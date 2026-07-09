import type { HassEntity, TabletInfoGraph } from "../types";
import { asText } from "../utils";
import type { GraphTimeRange, HistoryResponse, HistoryState, SparklinePoint } from "./types";

export const getGraphTimeRange = (graph: TabletInfoGraph): GraphTimeRange => {
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

export const getHistoryFetchKey = (graph: TabletInfoGraph, range: GraphTimeRange): string =>
  graph.period === "today"
    ? `${graph.entity}|${graph.period}|${range.historyStart}`
    : `${graph.entity}|${graph.period}|${graph.hoursToShow}`;

export const buildHistoryPath = (entityId: string, historyStart: number): string => {
  const start = new Date(historyStart).toISOString();
  const entity = encodeURIComponent(entityId);

  return `history/period/${start}?filter_entity_id=${entity}&significant_changes_only=0&no_attributes`;
};

export const getHistoryPoints = (response: HistoryResponse, entityId: string): SparklinePoint[] => {
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

export const getNumericState = (entity: HassEntity | undefined): number | null => parseNumericValue(entity?.state);

export const parseNumericValue = (value: unknown): number | null => {
  const numberValue = Number.parseFloat(asText(value));
  return Number.isFinite(numberValue) ? numberValue : null;
};

const normalizeHistoryGroups = (response: HistoryResponse): HistoryState[][] => {
  if (!Array.isArray(response) || response.length === 0) {
    return [];
  }

  return Array.isArray(response[0]) ? (response as HistoryState[][]) : [response as HistoryState[]];
};

const parseHistoryTime = (entry: HistoryState): number | null => {
  const timestamp = asText(entry.last_changed || entry.last_updated);
  if (!timestamp) {
    return null;
  }

  const time = Date.parse(timestamp);
  return Number.isFinite(time) ? time : null;
};
