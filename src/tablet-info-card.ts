import { LitElement, css, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { CARD_TYPE, DEFAULT_CONFIG } from "./constants";
import { registerElement } from "./register-element";
import type { HomeAssistant, ResolvedTabletInfoCardConfig, TabletInfoCardConfig } from "./types";
import "./components/tablet-info-card-body";

// Thin Home Assistant adapter: keep HA lifecycle here and delegate UI to the body component.
export class TabletInfoCardElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @state()
  private config?: ResolvedTabletInfoCardConfig;

  @property({ attribute: false })
  hass?: HomeAssistant;

  setConfig(config: TabletInfoCardConfig) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
    };
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

  render() {
    if (!this.config) {
      return nothing;
    }

    return html`<tablet-info-card-body .config=${this.config} .hass=${this.hass}></tablet-info-card-body>`;
  }
}

registerElement(CARD_TYPE, TabletInfoCardElement);

declare global {
  interface HTMLElementTagNameMap {
    [CARD_TYPE]: TabletInfoCardElement;
  }
}
