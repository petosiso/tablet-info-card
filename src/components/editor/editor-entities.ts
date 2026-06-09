import type { HomeAssistant } from "../../types";
import { asText } from "../../utils";

export const getAllEntityIds = (hass: HomeAssistant | undefined): string[] =>
  Object.keys(hass?.states ?? {}).sort((left, right) => left.localeCompare(right));

export const getEntityLabel = (hass: HomeAssistant | undefined, entityId: string): string => {
  const friendlyName = asText(hass?.states[entityId]?.attributes?.friendly_name);
  return friendlyName ? `${friendlyName} (${entityId})` : entityId;
};
