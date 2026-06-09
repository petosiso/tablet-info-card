import type { ResolvedTabletInfoCardConfig, TabletInfoCardViewModel } from "./types";

const cssValue = (value: unknown, fallback: string): string => {
  const text = String(value ?? fallback).trim();
  return text.length > 0 ? text.replace(/[{};]/g, "") : fallback;
};

export const buildStyles = (
  config: ResolvedTabletInfoCardConfig,
  viewModel: TabletInfoCardViewModel,
): string => `
  :host {
    display: block;
    font-family: var(--paper-font-body1_-_font-family, var(--primary-font-family, sans-serif));
    --tic-background: ${cssValue(viewModel.background, "#202226")};
    --tic-main-color: ${cssValue(viewModel.mainColor, "#18bcf2")};
    --tic-highlight-color: ${cssValue(config.text_highlight, "#ff7b22")};
    --tic-height: ${cssValue(config.height, "118px")};
    --tic-border-radius: ${cssValue(config.border_radius, "16px")};
    --tic-icon-size: ${cssValue(config.icon_size, "30px")};
    --tic-icon-col-width: ${cssValue(config.icon_col_width, "32px")};
    --tic-row-indent: ${cssValue(config.row_indent, "10px")};
  }

  ha-card {
    display: block;
    min-height: var(--tic-height);
    border-radius: var(--tic-border-radius);
    background: var(--tic-background);
    border: 1px solid color-mix(in srgb, var(--tic-main-color) 75%, transparent);
    box-shadow:
      0 0 0 1px color-mix(in srgb, var(--tic-main-color) 18%, transparent) inset,
      0 0 12px color-mix(in srgb, var(--tic-main-color) 55%, transparent);
    overflow: hidden;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .tic-card {
    min-height: var(--tic-height);
    box-sizing: border-box;
    display: grid;
    grid-template-rows: min-content 1fr;
    gap: 7px;
    padding: 10px 11px 9px 11px;
    color: var(--tic-main-color);
    cursor: default;
  }

  .tic-card.clickable {
    cursor: pointer;
  }

  .tic-header {
    display: grid;
    grid-template-columns: var(--tic-icon-col-width) 1fr;
    column-gap: 8px;
    align-items: center;
    min-width: 0;
  }

  .tic-icon-cell {
    width: var(--tic-icon-col-width);
    height: var(--tic-icon-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ha-icon {
    --mdc-icon-size: var(--tic-icon-size);
    --iron-icon-width: var(--tic-icon-size);
    --iron-icon-height: var(--tic-icon-size);
    color: var(--tic-main-color);
    filter: drop-shadow(0 0 5px color-mix(in srgb, var(--tic-main-color) 42%, transparent));
  }

  .tic-title {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: 0;
    color: var(--tic-main-color);
  }

  .tic-rows {
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 6px;
    padding-left: var(--tic-row-indent);
  }

  .tic-row {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 11px;
    line-height: 1.15;
    color: var(--tic-main-color);
  }

  .tic-row.button {
    cursor: pointer;
  }

  .tic-row.warn {
    color: var(--tic-highlight-color);
    font-weight: 700;
  }

  .tic-row.empty {
    opacity: 0.7;
  }
`;
