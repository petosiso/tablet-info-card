import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { DEFAULT_CONFIG } from "../../constants";
import { registerElement } from "../../register-element";
import type { TabletInfoCardConfig } from "../../types";
import { asText } from "../../utils";
import { editorControlStyles, editorGridStyles } from "./editor-styles";
import { fireEditorUpdate } from "./editor-events";

const TAG_NAME = "tablet-info-card-layout-fields";

type LayoutField = "height" | "title_font_size" | "row_font_size" | "graph_value_font_size";

export class TabletInfoCardLayoutFields extends LitElement {
  static styles = [editorControlStyles, editorGridStyles];

  @property({ attribute: false })
  config: TabletInfoCardConfig = {};

  render() {
    return html`
      <div class="grid">
        <label>
          <span>Card height</span>
          <input
            type="number"
            min="80"
            max="260"
            step="1"
            .value=${this.asNumberText(this.config.height, DEFAULT_CONFIG.height)}
            @change=${this.handleNumberInput("height")}
          />
        </label>
        <label>
          <span>Title font size</span>
          <input
            type="number"
            min="8"
            max="32"
            step="1"
            .value=${this.asNumberText(this.config.title_font_size, DEFAULT_CONFIG.title_font_size)}
            @change=${this.handleNumberInput("title_font_size")}
          />
        </label>
        <label>
          <span>Row font size</span>
          <input
            type="number"
            min="8"
            max="24"
            step="1"
            .value=${this.asNumberText(this.config.row_font_size, DEFAULT_CONFIG.row_font_size)}
            @change=${this.handleNumberInput("row_font_size")}
          />
        </label>
        <label>
          <span>Graph value font size</span>
          <input
            type="number"
            min="10"
            max="32"
            step="1"
            .value=${this.asNumberText(this.config.graph_value_font_size, DEFAULT_CONFIG.graph_value_font_size)}
            @change=${this.handleNumberInput("graph_value_font_size")}
          />
        </label>
      </div>
    `;
  }

  private handleNumberInput(field: LayoutField) {
    return (event: Event) => {
      const value = this.getStringValue(event);
      fireEditorUpdate(this, { [field]: value ? Number(value) : undefined });
    };
  }

  private getStringValue(event: Event): string | undefined {
    const value = (event.target as HTMLInputElement).value.trim();
    return value.length > 0 ? value : undefined;
  }

  private asNumberText(value: unknown, fallback: unknown): string {
    const resolvedValue = value ?? fallback;
    return typeof resolvedValue === "number" ? String(resolvedValue) : asText(resolvedValue).replace(/px$/i, "");
  }
}

registerElement(TAG_NAME, TabletInfoCardLayoutFields);

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: TabletInfoCardLayoutFields;
  }
}
