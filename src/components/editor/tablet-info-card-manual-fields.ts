import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { registerElement } from "../../register-element";
import type { TabletInfoCardConfig, WarnConfig } from "../../types";
import { toBool } from "../../utils";
import { editorControlStyles, editorGridStyles } from "./editor-styles";
import { fireEditorUpdate } from "./editor-events";

const TAG_NAME = "tablet-info-card-manual-fields";

type TextField = "name" | "icon" | "navigation_path";

export class TabletInfoCardManualFields extends LitElement {
  static styles = [editorControlStyles, editorGridStyles];

  @property({ attribute: false })
  config: TabletInfoCardConfig = {};

  render() {
    return html`
      <div class="grid">
        <label>
          <span>Name</span>
          <input .value=${this.config.name ?? ""} @change=${this.handleTextInput("name")} />
        </label>
        <label>
          <span>Icon</span>
          <input .value=${this.config.icon ?? ""} placeholder="mdi:flash" @change=${this.handleTextInput("icon")} />
        </label>
        <label>
          <span>Navigation path</span>
          <input .value=${this.config.navigation_path ?? ""} @change=${this.handleTextInput("navigation_path")} />
        </label>
        ${this.renderWarnEditor()}
      </div>
    `;
  }

  private renderWarnEditor() {
    if (this.isComplexWarn(this.config.warn)) {
      return html`<p class="hint">Advanced warning condition is configured in YAML.</p>`;
    }

    return html`
      <label>
        <span>Warning state</span>
        <span class="inline">
          <input type="checkbox" .checked=${toBool(this.config.warn)} @change=${this.handleWarnToggle} />
          <span>Warn</span>
        </span>
      </label>
    `;
  }

  private handleTextInput(field: TextField) {
    return (event: Event) => {
      fireEditorUpdate(this, { [field]: this.getStringValue(event) });
    };
  }

  private handleWarnToggle(event: Event) {
    fireEditorUpdate(this, { warn: (event.target as HTMLInputElement).checked });
  }

  private getStringValue(event: Event): string | undefined {
    const value = (event.target as HTMLInputElement).value.trim();
    return value.length > 0 ? value : undefined;
  }

  private isComplexWarn(warn: WarnConfig | undefined): boolean {
    return typeof warn === "object" && warn !== null && !Array.isArray(warn);
  }
}

registerElement(TAG_NAME, TabletInfoCardManualFields);

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: TabletInfoCardManualFields;
  }
}
