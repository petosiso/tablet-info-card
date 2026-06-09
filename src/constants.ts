import type { TabletInfoCardConfig } from "./types";

export const CARD_TYPE = "tablet-info-card";
export const CARD_VERSION = "0.3.1";

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
  background_ok: "rgba(46, 46, 46, 0.5)",
  background_nok: "#ffcccc",
  text_ok: "#18bcf2",
  text_nok: "#3a3a3a",
  text_highlight: "#ff5d0c",
  icon_size: "37px",
  icon_col_width: "37px",
  row_indent: "10px",
  height: "130px",
  border_radius: "20px",
};
