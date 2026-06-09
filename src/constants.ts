import type { TabletInfoCardConfig } from "./types";

export const CARD_TYPE = "tablet-info-card";
export const CARD_VERSION = "0.3.0";

export const DEFAULT_CONFIG: Required<
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
> = {
  background_ok: "#202226",
  background_nok: "#202226",
  text_ok: "#18bcf2",
  text_nok: "#18bcf2",
  text_highlight: "#ff7b22",
  icon_size: "30px",
  icon_col_width: "32px",
  row_indent: "10px",
  height: "118px",
  border_radius: "16px",
};
