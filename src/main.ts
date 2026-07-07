import { CARD_TYPE, CARD_VERSION } from "./constants";
import { isTabletInfoTemplateEntity } from "./card-source";
import type { HomeAssistant } from "./types";
import "./tablet-info-card";

// Card picker metadata lives outside the element so loading the bundle registers it once.
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === CARD_TYPE)) {
  window.customCards.push({
    type: CARD_TYPE,
    name: "Tablet Info Card",
    preview: true,
    description: "Compact status and navigation card with up to three detail rows and an optional graph.",
    documentationURL: "https://github.com/petosiso/tablet-info-card",
    getEntitySuggestion: (hass: HomeAssistant, entityId: string) => {
      const entity = hass.states[entityId];
      if (!isTabletInfoTemplateEntity(entity)) {
        return null;
      }

      return {
        config: {
          type: `custom:${CARD_TYPE}`,
          source: "template_entity",
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
