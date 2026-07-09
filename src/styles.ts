import type { StyleInfo } from "lit/directives/style-map.js";
import type { ResolvedTabletInfoCardConfig, TabletInfoCardViewModel } from "./types";

const sanitizeCssValue = (value: unknown, fallback: string): string => {
  const text = String(value ?? fallback).trim();
  return text.length > 0 ? text.replace(/[{};]/g, "") : fallback;
};

const sanitizeCssSize = (value: unknown, fallback: string): string => {
  if (typeof value === "number" && Number.isFinite(value)) {
    return `${value}px`;
  }

  const text = sanitizeCssValue(value, fallback);
  return /^-?\d+(\.\d+)?$/.test(text) ? `${text}px` : text;
};

// Dynamic theme values are CSS variables so nested Lit shadow roots inherit them cleanly.
export const buildThemeStyleMap = (
  config: ResolvedTabletInfoCardConfig,
  viewModel: TabletInfoCardViewModel,
): StyleInfo => ({
  "--tic-background": sanitizeCssValue(viewModel.background, "rgba(46, 46, 46, 0.5)"),
  "--tic-main-color": sanitizeCssValue(viewModel.mainColor, "#18bcf2"),
  "--tic-graph-color": sanitizeCssValue(
    viewModel.isWarn ? config.graph_warn_color : viewModel.graph?.color || viewModel.mainColor,
    "#18bcf2",
  ),
  "--tic-graph-value-color": sanitizeCssValue(viewModel.isWarn ? viewModel.mainColor : config.graph_value_color, "#d5d8dc"),
  "--tic-highlight-color": sanitizeCssValue(config.text_highlight, "#ff5d0c"),
  "--tic-height": sanitizeCssSize(config.height, "130px"),
  "--tic-graph-height": sanitizeCssSize(config.graph_height, "35px"),
  "--tic-border-radius": sanitizeCssValue(config.border_radius, "20px"),
  "--tic-icon-size": sanitizeCssSize(config.icon_size, "37px"),
  "--tic-row-indent": sanitizeCssSize(config.row_indent, "10px"),
  "--tic-header-padding": sanitizeCssSize(config.header_padding, "10px"),
  "--tic-body-padding": sanitizeCssSize(config.body_padding, "10px"),
  "--tic-title-font-size": sanitizeCssSize(config.title_font_size, "16px"),
  "--tic-row-font-size": sanitizeCssSize(config.row_font_size, "12px"),
  "--tic-graph-value-font-size": sanitizeCssSize(config.graph_value_font_size, "20px"),
});
