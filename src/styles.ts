import type { StyleInfo } from "lit/directives/style-map.js";
import type { ResolvedTabletInfoCardConfig, TabletInfoCardViewModel } from "./types";

const sanitizeCssValue = (value: unknown, fallback: string): string => {
  const text = String(value ?? fallback).trim();
  return text.length > 0 ? text.replace(/[{};]/g, "") : fallback;
};

// Dynamic theme values are CSS variables so nested Lit shadow roots inherit them cleanly.
export const buildThemeStyleMap = (
  config: ResolvedTabletInfoCardConfig,
  viewModel: TabletInfoCardViewModel,
): StyleInfo => ({
  "--tic-background": sanitizeCssValue(viewModel.background, "rgba(46, 46, 46, 0.5)"),
  "--tic-main-color": sanitizeCssValue(viewModel.mainColor, "#18bcf2"),
  "--tic-highlight-color": sanitizeCssValue(config.text_highlight, "#ff5d0c"),
  "--tic-height": sanitizeCssValue(config.height, "130px"),
  "--tic-border-radius": sanitizeCssValue(config.border_radius, "20px"),
  "--tic-icon-size": sanitizeCssValue(config.icon_size, "37px"),
  "--tic-icon-col-width": sanitizeCssValue(config.icon_col_width, "37px"),
  "--tic-row-indent": sanitizeCssValue(config.row_indent, "10px"),
});
