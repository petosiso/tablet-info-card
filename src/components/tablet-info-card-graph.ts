import { LitElement, css, html, nothing, svg, type PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { registerElement } from "../register-element";
import type { HassEntity, HomeAssistant, TabletInfoGraph } from "../types";
import { asText, hasValue } from "../utils";

const TAG_NAME = "tablet-info-card-graph";
const HISTORY_REFRESH_MS = 60_000;
const MAX_RENDER_POINTS = 120;

export interface TabletInfoGraphTapDetail {
  graph: TabletInfoGraph;
}

type HistoryState = Partial<HassEntity> & {
  s?: string;
};

type HistoryResponse = HistoryState[][] | HistoryState[];

interface SparklinePoint {
  time: number;
  value: number;
}

interface GraphTimeRange {
  historyStart: number;
  domainStart: number;
  domainEnd: number;
}

interface SparklineRenderData {
  path: string;
  min: number;
  max: number;
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
      height: 45px;
      min-height: 45px;
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
      top: -4px;
    }

    .axis-label.bottom {
      bottom: -4px;
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
    if (this.isLoading || (this.fetchKey === key && now - this.lastFetchedAt < HISTORY_REFRESH_MS)) {
      return;
    }

    this.isLoading = true;
    this.fetchKey = key;
    const currentRequestId = ++this.requestId;

    try {
      const response = await this.hass.callApi<HistoryResponse>("GET", buildHistoryPath(this.graph.entity, range.historyStart));

      if (currentRequestId !== this.requestId) {
        return;
      }

      this.points = thinPoints(getHistoryPoints(response, this.graph.entity), MAX_RENDER_POINTS);
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
    const value = entity && hasValue(entity.state) ? asText(entity.state) : "-";
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

const getGraphTimeRange = (graph: TabletInfoGraph): GraphTimeRange => {
  const now = Date.now();

  if (graph.period === "today") {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(end.getDate() + 1);

    return {
      historyStart: start.getTime(),
      domainStart: start.getTime(),
      domainEnd: end.getTime(),
    };
  }

  const start = now - graph.hoursToShow * 60 * 60 * 1000;
  return {
    historyStart: start,
    domainStart: start,
    domainEnd: now,
  };
};

const getHistoryFetchKey = (graph: TabletInfoGraph, range: GraphTimeRange): string =>
  graph.period === "today"
    ? `${graph.entity}|${graph.period}|${range.historyStart}`
    : `${graph.entity}|${graph.period}|${graph.hoursToShow}`;

const buildHistoryPath = (entityId: string, historyStart: number): string => {
  const start = new Date(historyStart).toISOString();
  const entity = encodeURIComponent(entityId);

  return `history/period/${start}?filter_entity_id=${entity}&significant_changes_only=0&no_attributes`;
};

const getHistoryPoints = (response: HistoryResponse, entityId: string): SparklinePoint[] => {
  const groups = normalizeHistoryGroups(response);
  const history = groups.find((group) => group.some((entry) => entry.entity_id === entityId)) ?? groups[0] ?? [];

  return history
    .map((entry, index) => {
      const value = parseNumericValue(entry.state ?? entry.s);
      if (value === null) {
        return null;
      }

      return {
        time: parseHistoryTime(entry) ?? index,
        value,
      };
    })
    .filter((point): point is SparklinePoint => point !== null)
    .sort((left, right) => left.time - right.time);
};

const normalizeHistoryGroups = (response: HistoryResponse): HistoryState[][] => {
  if (!Array.isArray(response)) {
    return [];
  }

  if (response.length === 0) {
    return [];
  }

  return Array.isArray(response[0]) ? (response as HistoryState[][]) : [response as HistoryState[]];
};

const getNumericState = (entity: HassEntity | undefined): number | null => parseNumericValue(entity?.state);

const parseHistoryTime = (entry: HistoryState): number | null => {
  const timestamp = asText(entry.last_changed || entry.last_updated);
  if (!timestamp) {
    return null;
  }

  const time = Date.parse(timestamp);
  return Number.isFinite(time) ? time : null;
};

const parseNumericValue = (value: unknown): number | null => {
  const numberValue = Number.parseFloat(asText(value));
  return Number.isFinite(numberValue) ? numberValue : null;
};

const thinPoints = (points: SparklinePoint[], maxPoints: number): SparklinePoint[] => {
  if (points.length <= maxPoints) {
    return points;
  }

  const minTime = points[0].time;
  const maxTime = points[points.length - 1].time;
  if (maxTime === minTime) {
    return thinByIndex(points, maxPoints);
  }

  const bucketCount = Math.max(1, Math.floor((maxPoints - 2) / 2));
  const bucketSize = (maxTime - minTime) / bucketCount;
  const thinned: SparklinePoint[] = [points[0]];

  for (let bucketIndex = 0; bucketIndex < bucketCount; bucketIndex += 1) {
    const bucketStart = minTime + bucketIndex * bucketSize;
    const bucketEnd = bucketIndex === bucketCount - 1 ? maxTime : bucketStart + bucketSize;
    const bucket = points.filter((point) => point.time >= bucketStart && point.time <= bucketEnd);
    if (bucket.length === 0) {
      continue;
    }

    const minPoint = bucket.reduce((min, point) => (point.value < min.value ? point : min), bucket[0]);
    const maxPoint = bucket.reduce((max, point) => (point.value > max.value ? point : max), bucket[0]);
    appendUniquePoints(thinned, [minPoint, maxPoint].sort((left, right) => left.time - right.time));
  }

  appendUniquePoints(thinned, [points[points.length - 1]]);
  return thinned.length <= maxPoints ? thinned : thinByIndex(thinned, maxPoints);
};

const thinByIndex = (points: SparklinePoint[], maxPoints: number): SparklinePoint[] => {
  const step = (points.length - 1) / (maxPoints - 1);
  return Array.from({ length: maxPoints }, (_, index) => points[Math.round(index * step)]);
};

const appendUniquePoints = (target: SparklinePoint[], points: SparklinePoint[]) => {
  for (const point of points) {
    const last = target[target.length - 1];
    if (!last || last.time !== point.time || last.value !== point.value) {
      target.push(point);
    }
  }
};

const buildSparkline = (
  points: SparklinePoint[],
  width: number,
  height: number,
  curve: TabletInfoGraph["curve"],
  range?: GraphTimeRange,
): SparklineRenderData | undefined => {
  if (points.length === 0) {
    return undefined;
  }

  const domainStart = range?.domainStart ?? points[0].time;
  const domainEnd = range?.domainEnd ?? points[points.length - 1].time;
  const domainPoints = getDomainPoints(points, domainStart, domainEnd, curve);
  if (domainPoints.length === 0) {
    return undefined;
  }

  const values = domainPoints.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const padding = 4;
  const innerHeight = height - padding * 2;

  if (domainPoints.length === 1 || domainStart === domainEnd) {
    const y = padding + innerHeight / 2;
    const x = domainStart === domainEnd ? width : ((domainPoints[0].time - domainStart) / (domainEnd - domainStart)) * width;
    const xStart = Math.max(0, x - 2);
    const xEnd = Math.min(width, x + 2);
    return {
      path: `M ${formatPathNumber(xStart)} ${formatPathNumber(y)} L ${formatPathNumber(xEnd)} ${formatPathNumber(y)}`,
      min,
      max,
    };
  }

  return {
    path:
      curve === "step"
        ? buildStepPath(domainPoints, domainStart, domainEnd, width, padding, innerHeight, min, max)
        : buildLinearPath(domainPoints, domainStart, domainEnd, width, padding, innerHeight, min, max),
    min,
    max,
  };
};

const getDomainPoints = (
  points: SparklinePoint[],
  domainStart: number,
  domainEnd: number,
  curve: TabletInfoGraph["curve"],
): SparklinePoint[] => {
  const domainPoints = points.filter((point) => point.time >= domainStart && point.time <= domainEnd);
  if (curve !== "step") {
    return domainPoints;
  }

  const previousPoint = [...points].reverse().find((point) => point.time < domainStart);
  if (previousPoint) {
    return [{ time: domainStart, value: previousPoint.value }, ...domainPoints];
  }

  const firstPoint = domainPoints[0];
  if (firstPoint && firstPoint.time > domainStart) {
    return [{ time: domainStart, value: firstPoint.value }, ...domainPoints];
  }

  return domainPoints;
};

const buildLinearPath = (
  points: SparklinePoint[],
  domainStart: number,
  domainEnd: number,
  width: number,
  padding: number,
  innerHeight: number,
  min: number,
  max: number,
): string =>
  points
    .map((point, index) => {
      const { x, y } = getPointCoordinates(point, domainStart, domainEnd, width, padding, innerHeight, min, max);
      const command = index === 0 ? "M" : "L";

      return `${command} ${formatPathNumber(x)} ${formatPathNumber(y)}`;
    })
    .join(" ");

const buildStepPath = (
  points: SparklinePoint[],
  domainStart: number,
  domainEnd: number,
  width: number,
  padding: number,
  innerHeight: number,
  min: number,
  max: number,
): string => {
  const [firstPoint, ...remainingPoints] = points;
  const first = getPointCoordinates(firstPoint, domainStart, domainEnd, width, padding, innerHeight, min, max);
  const commands = [`M ${formatPathNumber(first.x)} ${formatPathNumber(first.y)}`];
  let previousY = first.y;

  for (const point of remainingPoints) {
    const { x, y } = getPointCoordinates(point, domainStart, domainEnd, width, padding, innerHeight, min, max);
    commands.push(`L ${formatPathNumber(x)} ${formatPathNumber(previousY)}`);
    commands.push(`L ${formatPathNumber(x)} ${formatPathNumber(y)}`);
    previousY = y;
  }

  return commands.join(" ");
};

const getPointCoordinates = (
  point: SparklinePoint,
  domainStart: number,
  domainEnd: number,
  width: number,
  padding: number,
  innerHeight: number,
  min: number,
  max: number,
): { x: number; y: number } => {
  const x = ((point.time - domainStart) / (domainEnd - domainStart)) * width;
  const normalizedY = max === min ? 0.5 : (point.value - min) / (max - min);
  const y = padding + (1 - normalizedY) * innerHeight;

  return { x, y };
};

const formatPathNumber = (value: number): string => value.toFixed(2).replace(/\.?0+$/, "");

const formatAxisLabel = (value: number): string => {
  const absoluteValue = Math.abs(value);
  const decimals = absoluteValue >= 100 ? 0 : absoluteValue >= 1 ? 1 : 2;

  return value.toFixed(decimals).replace(/\.?0+$/, "");
};

registerElement(TAG_NAME, TabletInfoCardGraph);

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: TabletInfoCardGraph;
  }
}
