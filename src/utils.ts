import type { HassEntity } from "./types";

export const hasValue = (value: unknown): boolean => value !== undefined && value !== null && value !== "";

export const toBool = (value: unknown): boolean =>
  value === true ||
  value === "true" ||
  value === "True" ||
  value === "on" ||
  value === "yes" ||
  value === 1 ||
  value === "1";

export const asText = (value: unknown): string => {
  if (!hasValue(value)) {
    return "";
  }

  return String(value).replace(/\s+/g, " ").trim();
};

export const asEntityId = (value: unknown): string | null => {
  const text = asText(value);
  return text.length > 0 ? text : null;
};

export const formatEntityValue = (entity: HassEntity | undefined, unitOverride?: string): string => {
  if (!entity) {
    return "";
  }

  const value = Array.isArray(entity.state) || typeof entity.state === "object" ? JSON.stringify(entity.state) : entity.state;
  const unit = unitOverride ?? (entity.attributes?.unit_of_measurement ? String(entity.attributes.unit_of_measurement) : "");

  return unit ? `${value} ${unit}` : value;
};
