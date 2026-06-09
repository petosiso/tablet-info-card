import { TEMPLATE_ENTITY_TYPE_ATTRIBUTE, TEMPLATE_ENTITY_TYPE_VALUE } from "./constants";
import type { HassEntity, HomeAssistant } from "./types";
import { asText } from "./utils";

export const isTabletInfoTemplateEntity = (entity: HassEntity | undefined): boolean => {
  const attributes = entity?.attributes ?? {};
  const marker = asText(attributes[TEMPLATE_ENTITY_TYPE_ATTRIBUTE]);

  return marker === TEMPLATE_ENTITY_TYPE_VALUE;
};

export const getTabletInfoTemplateEntityIds = (hass: HomeAssistant | undefined): string[] =>
  Object.entries(hass?.states ?? {})
    .filter(([, entity]) => isTabletInfoTemplateEntity(entity))
    .map(([entityId]) => entityId)
    .sort((left, right) => left.localeCompare(right));
