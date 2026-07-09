import { LitElement, css, html, nothing } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { fireHassAction } from "../hass-action";
import { registerElement } from "../register-element";
import { buildThemeStyleMap } from "../styles";
import type { HomeAssistant, ResolvedTabletInfoCardConfig, TabletInfoRow } from "../types";
import { buildCardViewModel } from "../viewModel";
import type { TabletInfoGraphTapDetail } from "./tablet-info-card-graph";
import type { TabletInfoRowTapDetail } from "./tablet-info-card-row";
import "./tablet-info-card-graph";
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
      padding: 0 0 9px;
      color: var(--tic-main-color, #18bcf2);
      cursor: default;
    }

    .header-region {
      min-width: 0;
      padding: var(--tic-header-padding, 10px) var(--tic-header-padding, 10px) 0;
    }

    .body-region {
      min-width: 0;
      display: grid;
      align-content: start;
      gap: 7px;
      padding: var(--tic-body-padding, 10px) var(--tic-body-padding, 10px) 0;
    }

    .card.clickable {
      cursor: pointer;
    }

    .body-region.has-graph:not(.has-rows) {
      gap: 2px;
    }

    .body-region.has-graph.has-rows {
      grid-template-rows: min-content 1fr;
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
          class=${classMap({
            card: true,
            clickable: viewModel.isClickable,
            "has-graph": !!viewModel.graph,
            "has-rows": viewModel.rows.length > 0,
          })}
          role=${viewModel.isClickable ? "button" : "presentation"}
          tabindex=${viewModel.isClickable ? "0" : "-1"}
          @click=${this.handleCardTap}
          @keydown=${this.handleCardKeyDown}
          @tablet-info-graph-tap=${this.handleGraphTap}
          @tablet-info-row-tap=${this.handleRowTap}
        >
          <div class="header-region">
            <tablet-info-card-header .icon=${viewModel.icon} .title=${viewModel.title}></tablet-info-card-header>
          </div>
          <div
            class=${classMap({
              "body-region": true,
              "has-graph": !!viewModel.graph,
              "has-rows": viewModel.rows.length > 0,
            })}
          >
            ${viewModel.rows.length > 0 ? html`<tablet-info-card-rows .rows=${viewModel.rows}></tablet-info-card-rows>` : nothing}
            ${viewModel.graph
              ? html`<tablet-info-card-graph
                  class=${classMap({ compact: viewModel.rows.length === 0 })}
                  .graph=${viewModel.graph}
                  .hass=${this.hass}
                ></tablet-info-card-graph>`
              : nothing}
          </div>
        </div>
      </ha-card>
    `;
  }

  private handleCardTap() {
    if (!this.config) {
      return;
    }

    const viewModel = buildCardViewModel(this.config, this.hass);
    const actionEntity = this.config.entity || viewModel.graph?.entity;
    const tapAction =
      this.config.tap_action ||
      (viewModel.navigationPath
        ? { action: "navigate", navigation_path: viewModel.navigationPath }
        : actionEntity
          ? { action: "more-info" }
          : null);

    if (!tapAction) {
      return;
    }

    fireHassAction(this, {
      config: {
        entity: actionEntity,
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

  private handleGraphTap(event: CustomEvent<TabletInfoGraphTapDetail>) {
    event.stopPropagation();
    fireHassAction(this, {
      config: {
        entity: event.detail.graph.entity,
        tap_action: { action: "more-info" },
      },
      action: "tap",
    });
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
