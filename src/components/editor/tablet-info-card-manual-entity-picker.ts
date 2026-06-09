import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { registerElement } from "../../register-element";
import type { HomeAssistant } from "../../types";
import { editorControlStyles } from "./editor-styles";
import { getAllEntityIds, getEntityLabel } from "./editor-entities";
import { fireEditorUpdate } from "./editor-events";

const TAG_NAME = "tablet-info-card-manual-entity-picker";

export class TabletInfoCardManualEntityPicker extends LitElement {
  static styles = editorControlStyles;

  @property({ attribute: false })
  hass?: HomeAssistant;

  @property({ type: String })
  entity?: string;

  render() {
    const entityIds = getAllEntityIds(this.hass);

    return html`
      <label>
        <span>Main entity</span>
        <input list="tablet-info-card-entities" .value=${this.entity ?? ""} @change=${this.handleChange} />
      </label>
      <datalist id="tablet-info-card-entities">
        ${entityIds.map((entityId) => html`<option value=${entityId}>${getEntityLabel(this.hass, entityId)}</option>`)}
      </datalist>
    `;
  }

  private handleChange(event: Event) {
    fireEditorUpdate(this, { entity: this.getStringValue(event) });
  }

  private getStringValue(event: Event): string | undefined {
    const value = (event.target as HTMLInputElement).value.trim();
    return value.length > 0 ? value : undefined;
  }
}

registerElement(TAG_NAME, TabletInfoCardManualEntityPicker);

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: TabletInfoCardManualEntityPicker;
  }
}
