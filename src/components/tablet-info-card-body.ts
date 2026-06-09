import { LitElement, css, html, nothing } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { fireHassAction } from "../hass-action";
import { registerElement } from "../register-element";
import { buildThemeStyleMap } from "../styles";
import type { HomeAssistant, ResolvedTabletInfoCardConfig, TabletInfoRow } from "../types";
import { buildCardViewModel } from "../viewModel";
import type { TabletInfoRowTapDetail } from "./tablet-info-card-row";
import "./tablet-info-card-header";
import "./tablet-info-card-rows";

const TAG_NAME = "tablet-info-card-body";

export class TabletInfoCardBody extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: var(--paper-font-body1_-_font-family, var(--primary-font-family, sans-serif));
    }

    ha-card {
      display: block;
      min-height: var(--tic-height, 130px);
      border-radius: var(--tic-border-radius, 20px);
      background: var(--tic-background, rgba(46, 46, 46, 0.5));
      border: 1px solid color-mix(in srgb, var(--tic-main-color, #18bcf2) 75%, transparent);
      box-shadow:
        0 0 0 1px color-mix(in srgb, var(--tic-main-color, #18bcf2) 18%, transparent) inset,
        0 0 12px color-mix(in srgb, var(--tic-main-color, #18bcf2) 55%, transparent);
      overflow: hidden;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    .card {
      min-height: var(--tic-height, 130px);
      box-sizing: border-box;
      display: grid;
      grid-template-rows: min-content 1fr;
      gap: 7px;
      padding: 10px 11px 9px;
      color: var(--tic-main-color, #18bcf2);
      cursor: default;
    }

    .card.clickable {
      cursor: pointer;
    }
  `;

  @property({ attribute: false })
  config?: ResolvedTabletInfoCardConfig;

  @property({ attribute: false })
  hass?: HomeAssistant;

  render() {
    if (!this.config) {
      return nothing;
    }

    const viewModel = buildCardViewModel(this.config, this.hass);

    return html`
      <ha-card style=${styleMap(buildThemeStyleMap(this.config, viewModel))}>
        <div
          class=${classMap({ card: true, clickable: viewModel.isClickable })}
          role=${viewModel.isClickable ? "button" : "presentation"}
          tabindex=${viewModel.isClickable ? "0" : "-1"}
          @click=${this.handleCardTap}
          @keydown=${this.handleCardKeyDown}
          @tablet-info-row-tap=${this.handleRowTap}
        >
          <tablet-info-card-header .icon=${viewModel.icon} .title=${viewModel.title}></tablet-info-card-header>
          <tablet-info-card-rows .rows=${viewModel.rows}></tablet-info-card-rows>
        </div>
      </ha-card>
    `;
  }

  private handleCardTap() {
    if (!this.config) {
      return;
    }

    const viewModel = buildCardViewModel(this.config, this.hass);
    const tapAction =
      this.config.tap_action ||
      (viewModel.navigationPath
        ? { action: "navigate", navigation_path: viewModel.navigationPath }
        : this.config.entity
          ? { action: "more-info" }
          : null);

    if (!tapAction) {
      return;
    }

    fireHassAction(this, {
      config: {
        entity: this.config.entity,
        tap_action: tapAction,
      },
      action: "tap",
    });
  }

  private handleCardKeyDown(event: KeyboardEvent) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    this.handleCardTap();
  }

  private handleRowTap(event: CustomEvent<TabletInfoRowTapDetail>) {
    if (!this.config) {
      return;
    }

    event.stopPropagation();
    const row = event.detail.row;
    const tapAction = row.tap_action || (row.entity ? { action: "more-info" } : null);

    if (!tapAction) {
      return;
    }

    this.fireRowAction(row, tapAction);
  }

  // Row components own low-level clicks; the body translates their intent to HA actions.
  private fireRowAction(row: TabletInfoRow, tapAction: NonNullable<TabletInfoRow["tap_action"]> | { action: "more-info" }) {
    fireHassAction(this, {
      config: {
        entity: row.entity || this.config?.entity,
        tap_action: tapAction,
      },
      action: "tap",
    });
  }
}

registerElement(TAG_NAME, TabletInfoCardBody);

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: TabletInfoCardBody;
  }
}
