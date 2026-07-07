import type {
  HassEntity,
  HomeAssistant,
  ResolvedTabletInfoCardConfig,
  TabletInfoGraph,
  TabletInfoCardViewModel,
  TabletInfoGraphCurve,
  TabletInfoGraphPeriod,
  TabletInfoRow,
  TabletInfoRowConfig,
  TabletInfoCardSource,
} from "./types";
import { asEntityId, asText, formatEntityValue, hasValue, toBool } from "./utils";

interface TabletInfoGraphInput {
  entity?: unknown;
  name?: unknown;
  period?: unknown;
  hours_to_show?: unknown;
  unit?: unknown;
  color?: unknown;
  curve?: unknown;
  mode?: unknown;
}

// Single translation layer from HA config/entity attributes into a render-friendly model.
export const buildCardViewModel = (
  config: ResolvedTabletInfoCardConfig,
  hass?: HomeAssistant,
): TabletInfoCardViewModel => {
  const entity = getEntity(hass, config.entity);
  const attributes = entity?.attributes ?? {};
  const source = config.source;
  const isWarn = getCardWarn(config, hass, attributes, source);
  const navigationPath = getNavigationPath(config, attributes, source);
  const rows = getRows(config, hass, attributes, isWarn, source);
  const graph = getGraph(config, hass, attributes, source);

  return {
    entity,
    title: getTitle(config, entity, attributes, source),
    icon: asText(config.icon || (source === "template_entity" ? attributes.icon : "")) || "mdi:flash",
    navigationPath,
    isWarn,
    mainColor: isWarn ? config.text_nok : config.text_ok,
    background: isWarn ? config.background_nok : config.background_ok,
    rows,
    graph,
    isClickable: !!(config.tap_action || navigationPath || config.entity || graph?.entity),
  };
};

export const getEntity = (hass: HomeAssistant | undefined, entityId: string | undefined): HassEntity | undefined =>
  entityId && hass?.states ? hass.states[entityId] : undefined;

const getTitle = (
  config: ResolvedTabletInfoCardConfig,
  entity: HassEntity | undefined,
  attributes: Record<string, unknown>,
  source: TabletInfoCardSource,
): string =>
  asText(
    config.name ||
      (source === "template_entity" ? attributes.name || attributes.friendly_name : "") ||
      entity?.attributes?.friendly_name ||
      config.entity ||
      "",
  );

const getCardWarn = (
  config: ResolvedTabletInfoCardConfig,
  hass: HomeAssistant | undefined,
  attributes: Record<string, unknown>,
  source: TabletInfoCardSource,
): boolean => {
  if (hasValue(config.warn)) {
    return resolveWarn(config.warn, hass);
  }

  return source === "template_entity" ? toBool(attributes.is_warn) : false;
};

const getNavigationPath = (
  config: ResolvedTabletInfoCardConfig,
  attributes: Record<string, unknown>,
  source: TabletInfoCardSource,
): string | undefined =>
  asText(config.navigation_path || (source === "template_entity" ? attributes.navigation_path : "")) || undefined;

const getRows = (
  config: ResolvedTabletInfoCardConfig,
  hass: HomeAssistant | undefined,
  attributes: Record<string, unknown>,
  cardWarn: boolean,
  source: TabletInfoCardSource,
): TabletInfoRow[] => {
  if (source === "manual") {
    return (config.rows ?? [])
      .slice(0, 3)
      .map((row) => normalizeConfiguredRow(row, hass, cardWarn))
      .filter((row) => hasValue(row.text));
  }

  return getTemplateRows(attributes);
};

const getGraph = (
  config: ResolvedTabletInfoCardConfig,
  hass: HomeAssistant | undefined,
  attributes: Record<string, unknown>,
  source: TabletInfoCardSource,
): TabletInfoGraph | undefined => {
  const templateGraph: TabletInfoGraphInput = source === "template_entity" ? getTemplateGraphConfig(attributes) : {};
  const graph: TabletInfoGraphInput = config.graph ?? {};
  const entityId = asEntityId(firstValue(graph.entity, templateGraph.entity));
  if (!entityId) {
    return undefined;
  }

  const entity = getEntity(hass, entityId);
  const unit = asText(firstValue(graph.unit, templateGraph.unit, entity?.attributes?.unit_of_measurement)) || undefined;
  const color = asText(firstValue(graph.color, templateGraph.color)) || undefined;

  return {
    entity: entityId,
    name: asText(firstValue(graph.name, templateGraph.name, entity?.attributes?.friendly_name, entityId)),
    period: normalizeGraphPeriod(firstValue(graph.period, templateGraph.period)),
    hoursToShow: normalizeHoursToShow(firstValue(graph.hours_to_show, templateGraph.hours_to_show)),
    unit,
    color,
    curve: normalizeGraphCurve(firstValue(graph.curve, graph.mode, templateGraph.curve, templateGraph.mode)),
  };
};

const getTemplateGraphConfig = (attributes: Record<string, unknown>) => ({
  entity: attributes.graph_entity,
  name: attributes.graph_name,
  period: attributes.graph_period,
  hours_to_show: attributes.graph_hours_to_show,
  unit: attributes.graph_unit,
  color: attributes.graph_color,
  curve: attributes.graph_curve,
  mode: attributes.graph_mode,
});

const firstValue = (...values: unknown[]): unknown => values.find(hasValue);

const normalizeGraphPeriod = (value: unknown): TabletInfoGraphPeriod => {
  const period = asText(value).toLowerCase();
  return period === "today" || period === "day" || period === "daily" || period === "dnes" || period === "dneska"
    ? "today"
    : "hours";
};

const normalizeHoursToShow = (value: unknown): number => {
  const hours = Number.parseFloat(asText(value));
  if (!Number.isFinite(hours) || hours <= 0) {
    return 24;
  }

  return Math.min(Math.max(hours, 0.25), 168);
};

const normalizeGraphCurve = (value: unknown): TabletInfoGraphCurve => {
  const curve = asText(value).toLowerCase();
  return curve === "step" || curve === "stepped" || curve === "stairs" ? "step" : "linear";
};

const getTemplateRows = (attributes: Record<string, unknown>): TabletInfoRow[] =>
  [1, 2, 3]
    .map((rowNumber) => ({
      entity: asEntityId(attributes[`row_${rowNumber}_entity`]),
      text: asText(attributes[`row_${rowNumber}_text`]),
      warn: toBool(attributes[`row_${rowNumber}_warn`]),
    }))
    .filter((row) => hasValue(row.text));

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
    warn: hasValue(row.warn) ? resolveWarn(row.warn, hass) : cardWarn && toBool(row.inherit_warn),
    tap_action: row.tap_action,
  };
};

const resolveWarn = (warn: TabletInfoRowConfig["warn"], hass: HomeAssistant | undefined): boolean => {
  if (typeof warn !== "object" || warn === null || Array.isArray(warn)) {
    return toBool(warn);
  }

  const entity = getEntity(hass, warn.entity);
  if (!entity) {
    return false;
  }

  const expectedState = warn.state;
  if (expectedState !== undefined && expectedState !== null && expectedState !== "") {
    return matchesState(entity.state, expectedState);
  }

  const excludedState = warn.not_state;
  if (excludedState !== undefined && excludedState !== null && excludedState !== "") {
    return !matchesState(entity.state, excludedState);
  }

  return toBool(entity.state);
};

const matchesState = (actualState: string, expectedState: string | string[]): boolean => {
  const expectedStates = Array.isArray(expectedState) ? expectedState : [expectedState];
  return expectedStates.map(asText).includes(asText(actualState));
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
