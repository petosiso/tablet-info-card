import type { HassEntity } from "../types";

export type HistoryState = Partial<HassEntity> & {
  s?: string;
};

export type HistoryResponse = HistoryState[][] | HistoryState[];

export interface SparklinePoint {
  time: number;
  value: number;
}

export interface GraphTimeRange {
  historyStart: number;
  domainStart: number;
  domainEnd: number;
}

export interface SparklineRenderData {
  path: string;
  min: number;
  max: number;
}
