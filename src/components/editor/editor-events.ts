import type { TabletInfoCardConfig } from "../../types";

export const EDITOR_UPDATE_EVENT = "tablet-info-card-editor-update";

export interface EditorUpdateDetail {
  patch: Partial<TabletInfoCardConfig>;
}

export const fireEditorUpdate = (target: EventTarget, patch: Partial<TabletInfoCardConfig>) => {
  target.dispatchEvent(
    new CustomEvent<EditorUpdateDetail>(EDITOR_UPDATE_EVENT, {
      bubbles: true,
      composed: true,
      detail: { patch },
    }),
  );
};
