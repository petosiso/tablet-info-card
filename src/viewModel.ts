import type {
  HassEntity,
  HomeAssistant,
  ResolvedTabletInfoCardConfig,
  TabletInfoCardViewModel,
  TabletInfoRow,
  TabletInfoRowConfig,
} from "./types";
import { asEntityId, asText, formatEntityValue, hasValue, toBool } from "./utils";

export const buildCardViewModel = (
  config: ResolvedTabletInfoCardConfig,
  hass?: HomeAssistant,
): TabletInfoCardViewModel => {
  const entity = getEntity(hass, config.entity);
  const attributes = entity?.attributes ?? {};
  const isWarn = hasValue(config.warn) ? toBool(config.warn) : toBool(attributes.is_warn);
  const navigationPath = asText(config.navigation_path || attributes.navigation_path) || undefined;
  const rows = getRows(config, hass, attributes, isWarn);

  return {
    entity,
    title: getTitle(config, entity, attributes),
    icon: asText(config.icon || attributes.icon) || "mdi:flash",
    navigationPath,
    isWarn,
    mainColor: isWarn ? config.text_nok : config.text_ok,
    background: isWarn ? config.background_nok : config.background_ok,
    rows,
    isClickable: !!(config.tap_action || navigationPath || config.entity),
  };
};

export const getEntity = (hass: HomeAssistant | undefined, entityId: string | undefined): HassEntity | undefined =>
  entityId && hass?.states ? hass.states[entityId] : undefined;

const getTitle = (
  config: ResolvedTabletInfoCardConfig,
  entity: HassEntity | undefined,
  attributes: Record<string, unknown>,
): string =>
  asText(config.name || attributes.name || attributes.friendly_name || entity?.attributes?.friendly_name || config.entity || "");

const getRows = (
  config: ResolvedTabletInfoCardConfig,
  hass: HomeAssistant | undefined,
  attributes: Record<string, unknown>,
  cardWarn: boolean,
): TabletInfoRow[] => {
  if (Array.isArray(config.rows) && config.rows.length > 0) {
    return config.rows
      .slice(0, 3)
      .map((row) => normalizeConfiguredRow(row, hass, cardWarn))
      .filter((row) => hasValue(row.text));
  }

  return [1, 2, 3]
    .map((rowNumber) => ({
      entity: asEntityId(attributes[`row_${rowNumber}_entity`]),
      text: asText(attributes[`row_${rowNumber}_text`]),
      warn: toBool(attributes[`row_${rowNumber}_warn`]),
    }))
    .filter((row) => hasValue(row.text));
};

const normalizeConfiguredRow = (
  row: TabletInfoRowConfig,
  hass: HomeAssistant | undefined,
  cardWarn: boolean,
): TabletInfoRow => {
  const entity = getEntity(hass, row.entity);
  const text = hasValue(row.text) ? asText(row.text) : formatConfiguredEntityRow(entity, row);

  return {
    entity: row.entity ?? null,
    text,
    warn: hasValue(row.warn) ? toBool(row.warn) : cardWarn && toBool(row.inherit_warn),
    tap_action: row.tap_action,
  };
};

const formatConfiguredEntityRow = (entity: HassEntity | undefined, row: TabletInfoRowConfig): string => {
  if (!entity) {
    return "";
  }

  const label = row.name || entity.attributes?.friendly_name || row.entity || "";
  const rawValue = row.attribute ? entity.attributes?.[row.attribute] : formatEntityValue(entity, row.unit);
  const value = Array.isArray(rawValue) || typeof rawValue === "object" ? JSON.stringify(rawValue) : asText(rawValue);

  if (!hasValue(value)) {
    return asText(label);
  }

  return row.show_name === false ? value : `${asText(label)}: ${value}`;
};
