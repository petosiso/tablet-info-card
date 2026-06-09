import { LitElement, html, nothing } from "lit";
import { property } from "lit/decorators.js";
import { getTabletInfoTemplateEntityIds, isTabletInfoTemplateEntity } from "../../card-source";
import { registerElement } from "../../register-element";
import type { HomeAssistant } from "../../types";
import { editorControlStyles } from "./editor-styles";
import { getEntityLabel } from "./editor-entities";
import { fireEditorUpdate } from "./editor-events";

const TAG_NAME = "tablet-info-card-template-entity-picker";

export class TabletInfoCardTemplateEntityPicker extends LitElement {
  static styles = editorControlStyles;

  @property({ attribute: false })
  hass?: HomeAssistant;

  @property({ type: String })
  entity?: string;

  render() {
    const entityIds = this.getTemplateEntityOptions();
    const currentIsMarked = isTabletInfoTemplateEntity(this.entity ? this.hass?.states[this.entity] : undefined);

    return html`
      <label>
        <span>Template entity</span>
        <select .value=${this.entity ?? ""} @change=${this.handleChange}>
          <option value="">Select UI template entity</option>
          ${entityIds.map((entityId) => html`<option value=${entityId}>${getEntityLabel(this.hass, entityId)}</option>`)}
        </select>
      </label>
      ${this.entity && !currentIsMarked
        ? html`<p class="hint">
            Current entity is kept, but it is missing the template marker attribute
            <code>ui_element_type: tablet_info_card</code>.
          </p>`
        : nothing}
    `;
  }

  private getTemplateEntityOptions(): string[] {
    const entityIds = getTabletInfoTemplateEntityIds(this.hass);

    if (this.entity && !entityIds.includes(this.entity)) {
      return [this.entity, ...entityIds];
    }

    return entityIds;
  }

  private handleChange(event: Event) {
    fireEditorUpdate(this, { entity: this.getStringValue(event) });
  }

  private getStringValue(event: Event): string | undefined {
    const value = (event.target as HTMLSelectElement).value.trim();
    return value.length > 0 ? value : undefined;
  }
}

registerElement(TAG_NAME, TabletInfoCardTemplateEntityPicker);

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: TabletInfoCardTemplateEntityPicker;
  }
}
