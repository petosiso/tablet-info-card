import { createRoot, type Root } from "react-dom/client";
import { CARD_TYPE, CARD_VERSION, DEFAULT_CONFIG } from "./constants";
import { TabletInfoCard } from "./components/TabletInfoCard";
import type {
  HassActionConfig,
  HomeAssistant,
  ResolvedTabletInfoCardConfig,
  TabletInfoCardConfig,
  TabletInfoRow,
} from "./types";
import { buildCardViewModel } from "./viewModel";
import { hasValue } from "./utils";

class TabletInfoCardElement extends HTMLElement {
  private config?: ResolvedTabletInfoCardConfig;
  private hassState?: HomeAssistant;
  private mountElement: HTMLDivElement;
  private reactRoot?: Root;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    this.mountElement = document.createElement("div");
    shadowRoot.appendChild(this.mountElement);
  }

  connectedCallback() {
    if (!this.reactRoot) {
      this.reactRoot = createRoot(this.mountElement);
    }

    this.renderReact();
  }

  setConfig(config: TabletInfoCardConfig) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
    };
    this.renderReact();
  }

  set hass(hass: HomeAssistant) {
    this.hassState = hass;
    this.renderReact();
  }

  disconnectedCallback() {
    this.reactRoot?.unmount();
    this.reactRoot = undefined;
  }

  getCardSize() {
    return 3;
  }

  getGridOptions() {
    return {
      rows: 2,
      columns: 4,
      min_rows: 2,
      min_columns: 3,
    };
  }

  static getStubConfig() {
    return {
      entity: "sensor.ui_element_example",
    };
  }

  static getConfigForm() {
    return {
      schema: [
        { name: "entity", selector: { entity: {} } },
        { name: "name", selector: { text: {} } },
        { name: "icon", selector: { icon: {} } },
        { name: "navigation_path", selector: { text: {} } },
        { name: "warn", selector: { boolean: {} } },
      ],
    };
  }

  private renderReact() {
    if (!this.config || !this.reactRoot) {
      return;
    }

    this.reactRoot.render(
      <TabletInfoCard
        config={this.config}
        hass={this.hassState}
        onCardTap={() => this.handleCardTap()}
        onRowTap={(row) => this.handleRowTap(row)}
      />,
    );
  }

  private handleCardTap() {
    if (!this.config) {
      return;
    }

    const viewModel = buildCardViewModel(this.config, this.hassState);
    const tapAction =
      this.config.tap_action ||
      (viewModel.navigationPath
        ? { action: "navigate", navigation_path: viewModel.navigationPath }
        : this.config.entity
          ? { action: "more-info" }
          : null);

    if (!tapAction) {
      return;
    }

    this.fireAction({
      entity: this.config.entity,
      tap_action: tapAction,
    });
  }

  private handleRowTap(row: TabletInfoRow) {
    if (!this.config) {
      return;
    }

    const tapAction = row.tap_action || (row.entity ? { action: "more-info" } : null);
    if (!tapAction) {
      return;
    }

    this.fireAction({
      entity: row.entity || this.config.entity,
      tap_action: tapAction,
    });
  }

  private fireAction(actionConfig: { entity?: string | null; tap_action: HassActionConfig }) {
    this.dispatchEvent(
      new CustomEvent("hass-action", {
        bubbles: true,
        composed: true,
        detail: {
          config: actionConfig,
          action: "tap",
        },
      }),
    );
  }
}

if (!customElements.get(CARD_TYPE)) {
  customElements.define(CARD_TYPE, TabletInfoCardElement);
}

window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === CARD_TYPE)) {
  window.customCards.push({
    type: CARD_TYPE,
    name: "Tablet Info Card",
    preview: true,
    description: "Compact status and navigation card with up to three detail rows.",
    documentationURL: "https://github.com/petosiso/tablet-info-card",
    getEntitySuggestion: (hass: HomeAssistant, entityId: string) => {
      const attributes = hass.states[entityId]?.attributes ?? {};
      const looksSupported =
        hasValue(attributes.navigation_path) ||
        hasValue(attributes.row_1_text) ||
        hasValue(attributes.row_2_text) ||
        hasValue(attributes.row_3_text);

      if (!looksSupported) {
        return null;
      }

      return {
        config: {
          type: `custom:${CARD_TYPE}`,
          entity: entityId,
        },
      };
    },
  });
}

console.info(
  `%c ${CARD_TYPE} %c ${CARD_VERSION} `,
  "color: white; background: #18bcf2; font-weight: 700;",
  "color: #18bcf2; background: transparent; font-weight: 700;",
);

declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      preview?: boolean;
      description?: string;
      documentationURL?: string;
      getEntitySuggestion?: (hass: HomeAssistant, entityId: string) => unknown;
    }>;
  }
}
