import type { TabletInfoCardConfig } from "./types";

export const CARD_TYPE = "tablet-info-card";
export const CARD_VERSION = "0.4.0";
export const TEMPLATE_ENTITY_TYPE_ATTRIBUTE = "ui_element_type";
export const TEMPLATE_ENTITY_TYPE_VALUE = "tablet_info_card";

export const DEFAULT_CONFIG: Required<
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
    | "row_indent"
    | "header_padding"
    | "body_padding"
    | "height"
    | "graph_height"
    | "border_radius"
    | "title_font_size"
    | "row_font_size"
    | "graph_value_font_size"
    | "fullCardClick"
    | "source"
  >
> = {
  source: "template_entity",
  background_ok: "rgba(46, 46, 46, 0.5)",
  background_nok: "#ffcccc",
  text_ok: "#18bcf2",
  text_nok: "#3a3a3a",
  text_highlight: "#ff5d0c",
  graph_warn_color: "#d93025",
  graph_value_color: "#d5d8dc",
  icon_size: "37px",
  row_indent: "10px",
  header_padding: "10px",
  body_padding: "10px",
  height: "130px",
  graph_height: "35px",
  border_radius: "20px",
  title_font_size: "16px",
  row_font_size: "12px",
  graph_value_font_size: "20px",
  fullCardClick: false,
};
