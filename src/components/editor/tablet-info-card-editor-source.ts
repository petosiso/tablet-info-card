import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { registerElement } from "../../register-element";
import type { TabletInfoCardSource } from "../../types";
import { editorControlStyles } from "./editor-styles";
import { fireEditorUpdate } from "./editor-events";

const TAG_NAME = "tablet-info-card-editor-source";

export class TabletInfoCardEditorSource extends LitElement {
  static styles = editorControlStyles;

  @property({ type: String })
  source: TabletInfoCardSource = "template_entity";

  render() {
    return html`
      <label>
        <span>Data source</span>
        <select .value=${this.source} @change=${this.handleChange}>
          <option value="template_entity">Template entity</option>
          <option value="manual">Manual config</option>
        </select>
      </label>
    `;
  }

  private handleChange(event: Event) {
    const source = (event.target as HTMLSelectElement).value as TabletInfoCardSource;
    fireEditorUpdate(this, { source });
  }
}

registerElement(TAG_NAME, TabletInfoCardEditorSource);

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: TabletInfoCardEditorSource;
  }
}
