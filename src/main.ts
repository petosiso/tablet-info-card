import { CARD_TYPE, CARD_VERSION } from "./constants";
import type { HomeAssistant } from "./types";
import { hasValue } from "./utils";
import "./tablet-info-card";

window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === CARD_TYPE)) {
  window.customCards.push({
    type: CARD_TYPE,
    name: "Tablet Info Card",
    preview: true,
    description: "Compact status and navigation card with up to three detail rows.",
    documentationURL: "https://github.com/petosiso/tablet-info-card",
    getEntitySuggestion: (hass: HomeAssistant, entityId: string) => {
      const attributes = hass.states[entityId]?.attributes ?? {};
      const looksSupported =
        hasValue(attributes.navigation_path) ||
        hasValue(attributes.row_1_text) ||
        hasValue(attributes.row_2_text) ||
        hasValue(attributes.row_3_text);

      if (!looksSupported) {
        return null;
      }

      return {
        config: {
          type: `custom:${CARD_TYPE}`,
          entity: entityId,
        },
      };
    },
  });
}

console.info(
  `%c ${CARD_TYPE} %c ${CARD_VERSION} `,
  "color: white; background: #18bcf2; font-weight: 700;",
  "color: #18bcf2; background: transparent; font-weight: 700;",
);

declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      preview?: boolean;
      description?: string;
      documentationURL?: string;
      getEntitySuggestion?: (hass: HomeAssistant, entityId: string) => unknown;
    }>;
  }
}
