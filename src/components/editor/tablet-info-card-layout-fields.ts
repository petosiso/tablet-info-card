import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { DEFAULT_CONFIG } from "../../constants";
import { registerElement } from "../../register-element";
import type { TabletInfoCardConfig } from "../../types";
import { asText, toBool } from "../../utils";
import { editorControlStyles, editorGridStyles } from "./editor-styles";
import { fireEditorUpdate } from "./editor-events";

const TAG_NAME = "tablet-info-card-layout-fields";

type LayoutField =
  | "height"
  | "header_padding"
  | "body_padding"
  | "icon_size"
  | "title_font_size"
  | "row_font_size"
  | "graph_height"
  | "graph_value_font_size";

export class TabletInfoCardLayoutFields extends LitElement {
  static styles = [editorControlStyles, editorGridStyles];

  @property({ attribute: false })
  config: TabletInfoCardConfig = {};

  render() {
    return html`
      <div class="grid">
        <label>
          <span>Full card click</span>
          <span class="inline">
            <input type="checkbox" .checked=${toBool(this.config.fullCardClick)} @change=${this.handleFullCardClickToggle} />
            <span>Always navigate</span>
          </span>
        </label>
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
          <span>Header padding</span>
          <input
            type="number"
            min="0"
            max="32"
            step="1"
            .value=${this.asNumberText(this.config.header_padding, DEFAULT_CONFIG.header_padding)}
            @change=${this.handleNumberInput("header_padding")}
          />
        </label>
        <label>
          <span>Body padding</span>
          <input
            type="number"
            min="0"
            max="32"
            step="1"
            .value=${this.asNumberText(this.config.body_padding, DEFAULT_CONFIG.body_padding)}
            @change=${this.handleNumberInput("body_padding")}
          />
        </label>
        <label>
          <span>Icon size</span>
          <input
            type="number"
            min="16"
            max="72"
            step="1"
            .value=${this.asNumberText(this.config.icon_size, DEFAULT_CONFIG.icon_size)}
            @change=${this.handleNumberInput("icon_size")}
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
          <span>Graph height</span>
          <input
            type="number"
            min="20"
            max="96"
            step="1"
            .value=${this.asNumberText(this.config.graph_height, DEFAULT_CONFIG.graph_height)}
            @change=${this.handleNumberInput("graph_height")}
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

  private handleFullCardClickToggle(event: Event) {
    fireEditorUpdate(this, { fullCardClick: (event.target as HTMLInputElement).checked });
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
