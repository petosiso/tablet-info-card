import { LitElement, css, html, nothing, svg, type PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { buildHistoryPath, getGraphTimeRange, getHistoryFetchKey, getHistoryPoints, getNumericState } from "../graph/history";
import { buildSparkline, formatAxisLabel, MAX_RENDER_POINTS, thinPoints } from "../graph/sparkline";
import type { HistoryResponse, SparklinePoint } from "../graph/types";
import { registerElement } from "../register-element";
import type { HassEntity, HomeAssistant, TabletInfoGraph } from "../types";
import { asText, hasValue } from "../utils";

const TAG_NAME = "tablet-info-card-graph";
const HISTORY_REFRESH_MS = 60_000;

export interface TabletInfoGraphTapDetail {
  graph: TabletInfoGraph;
}

export class TabletInfoCardGraph extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-width: 0;
    }

    .graph {
      min-width: 0;
      display: grid;
      gap: 3px;
      padding-left: var(--tic-row-indent, 10px);
      color: var(--tic-graph-value-color, #d5d8dc);
      cursor: pointer;
    }

    .sparkline {
      position: relative;
      width: 100%;
      height: var(--tic-graph-height, 35px);
      min-height: var(--tic-graph-height, 35px);
      margin-top: 1px;
    }

    :host(.compact) .sparkline {
      margin-top: -4px;
    }

    .sparkline.empty {
      opacity: 0.35;
      border-bottom: 1px solid color-mix(in srgb, var(--tic-graph-color, #18bcf2) 50%, transparent);
    }

    .axis-label {
      position: absolute;
      right: 0;
      z-index: 1;
      max-width: 34px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 9px;
      font-weight: 600;
      line-height: 1;
      letter-spacing: 0;
      color: var(--tic-graph-value-color, #d5d8dc);
      opacity: 0.72;
      text-shadow:
        0 0 3px var(--tic-background, rgba(46, 46, 46, 0.85)),
        0 0 6px var(--tic-background, rgba(46, 46, 46, 0.85));
      pointer-events: none;
    }

    .axis-label.top {
      top: 0;
      transform: translateY(-8px);
    }

    .axis-label.bottom {
      bottom: 0;
      transform: translateY(8px);
    }

    svg {
      display: block;
      width: 100%;
      height: 100%;
      overflow: visible;
    }

    .line {
      fill: none;
      stroke: var(--tic-graph-color, var(--tic-main-color, #18bcf2));
      stroke-width: 2.2;
      stroke-linecap: round;
      stroke-linejoin: round;
      filter: drop-shadow(0 0 5px color-mix(in srgb, var(--tic-graph-color, #18bcf2) 42%, transparent));
    }

    .current {
      min-width: 0;
      display: flex;
      align-items: baseline;
      gap: 4px;
      line-height: 1;
      color: var(--tic-graph-value-color, #d5d8dc);
    }

    .value {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: var(--tic-graph-value-font-size, 20px);
      font-weight: 700;
      letter-spacing: 0;
    }

    .unit {
      flex: 0 0 auto;
      font-size: calc(var(--tic-graph-value-font-size, 20px) * 0.65);
      font-weight: 500;
      opacity: 0.95;
    }

    .name {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: calc(var(--tic-graph-value-font-size, 20px) - 2px);
      line-height: 1.15;
      color: var(--tic-graph-value-color, #d5d8dc);
      opacity: 0.72;
    }
  `;

  @property({ attribute: false })
  graph?: TabletInfoGraph;

  @property({ attribute: false })
  hass?: HomeAssistant;

  @state()
  private points: SparklinePoint[] = [];

  @state()
  private isLoading = false;

  private fetchKey = "";
  private lastFetchedAt = 0;
  private requestId = 0;

  protected updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has("graph") || changedProperties.has("hass")) {
      void this.loadHistory();
    }
  }

  render() {
    if (!this.graph) {
      return nothing;
    }

    const entity = this.hass?.states?.[this.graph.entity];
    const current = this.getCurrentDisplay(entity);

    return html`
      <div
        class="graph"
        role="button"
        tabindex="0"
        @click=${this.handleTap}
        @keydown=${this.handleKeyDown}
      >
        ${this.renderSparkline(entity)}
        <div class="current" title=${current.full}>
          <span class="value">${current.value}</span>
          ${current.unit ? html`<span class="unit">${current.unit}</span>` : nothing}
        </div>
        <div class="name" title=${this.graph.name}>${this.graph.name}</div>
      </div>
    `;
  }

  private async loadHistory() {
    if (!this.graph?.entity || !this.hass?.callApi) {
      this.fetchKey = "";
      if (this.points.length > 0) {
        this.points = [];
      }
      return;
    }

    const range = getGraphTimeRange(this.graph);
    const key = getHistoryFetchKey(this.graph, range);
    const now = Date.now();
    if ((this.isLoading && this.fetchKey === key) || (this.fetchKey === key && now - this.lastFetchedAt < HISTORY_REFRESH_MS)) {
      return;
    }

    this.isLoading = true;
    this.fetchKey = key;
    const requestGraph = this.graph;
    const currentRequestId = ++this.requestId;

    try {
      const response = await this.hass.callApi<HistoryResponse>("GET", buildHistoryPath(requestGraph.entity, range.historyStart));

      if (currentRequestId !== this.requestId || this.graph?.entity !== requestGraph.entity) {
        return;
      }

      this.points = thinPoints(getHistoryPoints(response, requestGraph.entity), MAX_RENDER_POINTS);
      this.lastFetchedAt = Date.now();
    } catch {
      if (currentRequestId === this.requestId) {
        this.points = [];
        this.lastFetchedAt = Date.now();
      }
    } finally {
      if (currentRequestId === this.requestId) {
        this.isLoading = false;
      }
    }
  }

  private renderSparkline(entity: HassEntity | undefined) {
    const range = this.graph ? getGraphTimeRange(this.graph) : undefined;
    const sparkline = buildSparkline(this.getChartPoints(entity), 220, 45, this.graph?.curve ?? "linear", range);

    if (!sparkline) {
      return html`<div class="sparkline empty"></div>`;
    }

    const minLabel = formatAxisLabel(sparkline.min);
    const maxLabel = formatAxisLabel(sparkline.max);

    return html`
      <div class="sparkline" aria-hidden="true">
        <span class="axis-label top" title=${maxLabel}>${maxLabel}</span>
        <span class="axis-label bottom" title=${minLabel}>${minLabel}</span>
        ${svg`<svg viewBox="0 0 220 45" preserveAspectRatio="none">
          <path class="line" d=${sparkline.path}></path>
        </svg>`}
      </div>
    `;
  }

  private getChartPoints(entity: HassEntity | undefined): SparklinePoint[] {
    const points = [...this.points];
    const current = getNumericState(entity);
    const lastPoint = points[points.length - 1];
    const now = Date.now();

    if (current !== null && (!lastPoint || lastPoint.value !== current || lastPoint.time < now - 1_000)) {
      points.push({
        time: now,
        value: current,
      });
    }

    return thinPoints(points, MAX_RENDER_POINTS);
  }

  private getCurrentDisplay(entity: HassEntity | undefined): { value: string; unit: string; full: string } {
    const numericValue = getNumericState(entity);
    const value =
      numericValue !== null ? numericValue.toFixed(1) : entity && hasValue(entity.state) ? asText(entity.state) : "-";
    const unit = this.graph?.unit || asText(entity?.attributes?.unit_of_measurement) || "";
    const full = unit ? `${value} ${unit}` : value;

    return { value, unit, full };
  }

  private handleTap(event: Event) {
    if (!this.graph) {
      return;
    }

    event.stopPropagation();
    this.dispatchEvent(
      new CustomEvent<TabletInfoGraphTapDetail>("tablet-info-graph-tap", {
        bubbles: true,
        composed: true,
        detail: { graph: this.graph },
      }),
    );
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    this.handleTap(event);
  }
}

registerElement(TAG_NAME, TabletInfoCardGraph);

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: TabletInfoCardGraph;
  }
}
