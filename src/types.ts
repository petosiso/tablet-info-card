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
}

export interface TabletInfoRowConfig {
  entity?: string;
  text?: unknown;
  name?: string;
  attribute?: string;
  unit?: string;
  show_name?: boolean;
  warn?: unknown;
  inherit_warn?: unknown;
  tap_action?: HassActionConfig;
}

export interface TabletInfoCardConfig {
  type?: string;
  entity?: string;
  name?: string;
  icon?: string;
  navigation_path?: string;
  warn?: unknown;
  rows?: TabletInfoRowConfig[];
  tap_action?: HassActionConfig;
  background_ok?: string;
  background_nok?: string;
  text_ok?: string;
  text_nok?: string;
  text_highlight?: string;
  icon_size?: string;
  icon_col_width?: string;
  row_indent?: string;
  height?: string;
  border_radius?: string;
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
      | "icon_size"
      | "icon_col_width"
      | "row_indent"
      | "height"
      | "border_radius"
    >
  >;

export interface TabletInfoRow {
  entity: string | null;
  text: string;
  warn: boolean;
  tap_action?: HassActionConfig;
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
  isClickable: boolean;
}
