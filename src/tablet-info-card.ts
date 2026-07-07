import { LitElement, css, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { CARD_TYPE, DEFAULT_CONFIG } from "./constants";
import { registerElement } from "./register-element";
import type { HomeAssistant, ResolvedTabletInfoCardConfig, TabletInfoCardConfig } from "./types";
import "./components/tablet-info-card-body";
import "./components/tablet-info-card-editor";

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
    return this.config?.graph ? 4 : 3;
  }

  getGridOptions() {
    const hasGraph = !!this.config?.graph;

    return {
      rows: hasGraph ? 4 : 2,
      columns: 4,
      min_rows: hasGraph ? 3 : 2,
      min_columns: 3,
    };
  }

  static getStubConfig() {
    return {
      source: "template_entity",
      entity: "sensor.ui_element_example",
    };
  }

  static getConfigElement() {
    return document.createElement("tablet-info-card-editor");
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
