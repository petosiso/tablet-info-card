import { LitElement, css, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { registerElement } from "../register-element";
import type { HomeAssistant, TabletInfoCardConfig } from "../types";
import type { EditorUpdateDetail } from "./editor/editor-events";
import "./editor/tablet-info-card-editor-source";
import "./editor/tablet-info-card-layout-fields";
import "./editor/tablet-info-card-manual-fields";
import "./editor/tablet-info-card-manual-entity-picker";
import "./editor/tablet-info-card-template-entity-picker";

const TAG_NAME = "tablet-info-card-editor";

export class TabletInfoCardEditor extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: var(--paper-font-body1_-_font-family, var(--primary-font-family, sans-serif));
    }

    .editor {
      display: grid;
      gap: 14px;
    }

    .hint {
      margin: 0;
      color: var(--secondary-text-color, #727272);
      font-size: 12px;
      line-height: 1.35;
    }
  `;

  @state()
  private config: TabletInfoCardConfig = {};

  @property({ attribute: false })
  hass?: HomeAssistant;

  setConfig(config: TabletInfoCardConfig) {
    this.config = { source: "template_entity", ...config };
  }

  render() {
    const source = this.config.source ?? "template_entity";

    return html`
      <div class="editor" @tablet-info-card-editor-update=${this.handleEditorUpdate}>
        <tablet-info-card-editor-source .source=${source}></tablet-info-card-editor-source>
        ${source === "template_entity" ? this.renderTemplateEntityPicker() : this.renderManualEntityPicker()}
        ${source === "manual" ? this.renderManualFields() : nothing}
        <tablet-info-card-layout-fields .config=${this.config}></tablet-info-card-layout-fields>
        ${source === "manual" ? this.renderManualRowsNotice() : nothing}
      </div>
    `;
  }

  private renderTemplateEntityPicker() {
    return html`
      <tablet-info-card-template-entity-picker
        .hass=${this.hass}
        .entity=${this.config.entity}
      ></tablet-info-card-template-entity-picker>
    `;
  }

  private renderManualEntityPicker() {
    return html`
      <tablet-info-card-manual-entity-picker
        .hass=${this.hass}
        .entity=${this.config.entity}
      ></tablet-info-card-manual-entity-picker>
    `;
  }

  private renderManualFields() {
    return html`<tablet-info-card-manual-fields .config=${this.config}></tablet-info-card-manual-fields>`;
  }

  private renderManualRowsNotice() {
    return html`<p class="hint">Manual rows are supported in YAML through the <code>rows</code> option.</p>`;
  }

  private handleEditorUpdate(event: CustomEvent<EditorUpdateDetail>) {
    event.stopPropagation();
    this.updateConfig(event.detail.patch);
  }

  private updateConfig(patch: Partial<TabletInfoCardConfig>) {
    const config: TabletInfoCardConfig = { ...this.config, ...patch };

    for (const key of Object.keys(config)) {
      const value = config[key];
      if (value === undefined || value === null || value === "") {
        delete config[key];
      }
    }

    this.config = config;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        bubbles: true,
        composed: true,
        detail: { config },
      }),
    );
  }
}

registerElement(TAG_NAME, TabletInfoCardEditor);

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: TabletInfoCardEditor;
  }
}
