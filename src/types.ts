export type HassActionName = "more-info" | "navigate" | "toggle" | "call-service" | "none" | string;

export interface HassActionConfig {
  action: HassActionName;
  navigation_path?: string;
  service?: string;
  service_data?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface HassEntity {
  entity_id?: string;
  state: string;
  attributes?: Record<string, unknown>;
  last_changed?: string;
  last_updated?: string;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  callApi?<T = unknown>(method: string, path: string, parameters?: Record<string, unknown>): Promise<T>;
}

// Simple state matcher for fallback YAML; complex logic belongs in HA template sensors.
export interface WarnConditionConfig {
  entity: string;
  state?: string | string[];
  not_state?: string | string[];
}

export type WarnConfig = boolean | string | number | WarnConditionConfig;
export type CssSizeConfig = string | number;
export type TabletInfoCardSource = "template_entity" | "manual";
export type TabletInfoGraphPeriod = "hours" | "today";
export type TabletInfoGraphCurve = "linear" | "step";

export interface TabletInfoRowConfig {
  entity?: string;
  text?: unknown;
  name?: string;
  attribute?: string;
  unit?: string;
  show_name?: boolean;
  warn?: WarnConfig;
  inherit_warn?: unknown;
  tap_action?: HassActionConfig;
}

export interface TabletInfoGraphConfig {
  entity?: string;
  name?: string;
  period?: string;
  hours_to_show?: string | number;
  unit?: string;
  color?: string;
  curve?: string;
  mode?: string;
}

export interface TabletInfoCardConfig {
  type?: string;
  source?: TabletInfoCardSource;
  entity?: string;
  name?: string;
  icon?: string;
  navigation_path?: string;
  warn?: WarnConfig;
  rows?: TabletInfoRowConfig[];
  graph?: TabletInfoGraphConfig;
  tap_action?: HassActionConfig;
  background_ok?: string;
  background_nok?: string;
  text_ok?: string;
  text_nok?: string;
  text_highlight?: string;
  graph_warn_color?: string;
  graph_value_color?: string;
  icon_size?: string;
  icon_col_width?: string;
  row_indent?: string;
  height?: CssSizeConfig;
  border_radius?: string;
  title_font_size?: CssSizeConfig;
  row_font_size?: CssSizeConfig;
  graph_value_font_size?: CssSizeConfig;
  [key: string]: unknown;
}

export type ResolvedTabletInfoCardConfig = TabletInfoCardConfig &
  Required<
    Pick<
      TabletInfoCardConfig,
      | "background_ok"
      | "background_nok"
      | "text_ok"
      | "text_nok"
      | "text_highlight"
      | "graph_warn_color"
      | "graph_value_color"
      | "icon_size"
      | "icon_col_width"
      | "row_indent"
      | "height"
      | "border_radius"
      | "title_font_size"
      | "row_font_size"
      | "graph_value_font_size"
      | "source"
    >
  >;

export interface TabletInfoRow {
  entity: string | null;
  text: string;
  warn: boolean;
  tap_action?: HassActionConfig;
}

export interface TabletInfoGraph {
  entity: string;
  name: string;
  period: TabletInfoGraphPeriod;
  hoursToShow: number;
  unit?: string;
  color?: string;
  curve: TabletInfoGraphCurve;
}

export interface TabletInfoCardViewModel {
  entity?: HassEntity;
  title: string;
  icon: string;
  navigationPath?: string;
  isWarn: boolean;
  mainColor: string;
  background: string;
  rows: TabletInfoRow[];
  graph?: TabletInfoGraph;
  isClickable: boolean;
}
