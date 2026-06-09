import type { StyleInfo } from "lit/directives/style-map.js";
import type { ResolvedTabletInfoCardConfig, TabletInfoCardViewModel } from "./types";

const sanitizeCssValue = (value: unknown, fallback: string): string => {
  const text = String(value ?? fallback).trim();
  return text.length > 0 ? text.replace(/[{};]/g, "") : fallback;
};

export const buildThemeStyleMap = (
  config: ResolvedTabletInfoCardConfig,
  viewModel: TabletInfoCardViewModel,
): StyleInfo => ({
  "--tic-background": sanitizeCssValue(viewModel.background, "#202226"),
  "--tic-main-color": sanitizeCssValue(viewModel.mainColor, "#18bcf2"),
  "--tic-highlight-color": sanitizeCssValue(config.text_highlight, "#ff7b22"),
  "--tic-height": sanitizeCssValue(config.height, "118px"),
  "--tic-border-radius": sanitizeCssValue(config.border_radius, "16px"),
  "--tic-icon-size": sanitizeCssValue(config.icon_size, "30px"),
  "--tic-icon-col-width": sanitizeCssValue(config.icon_col_width, "32px"),
  "--tic-row-indent": sanitizeCssValue(config.row_indent, "10px"),
});
