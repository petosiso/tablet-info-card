import type { TabletInfoGraph } from "../types";
import type { GraphTimeRange, SparklinePoint, SparklineRenderData } from "./types";

export const MAX_RENDER_POINTS = 120;

export const thinPoints = (points: SparklinePoint[], maxPoints: number): SparklinePoint[] => {
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

export const buildSparkline = (
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
    return buildSinglePointSparkline(domainPoints[0], domainStart, domainEnd, width, padding, innerHeight, min, max);
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

export const formatAxisLabel = (value: number): string => {
  const absoluteValue = Math.abs(value);
  const decimals = absoluteValue >= 100 ? 0 : absoluteValue >= 1 ? 1 : 2;

  return value.toFixed(decimals).replace(/\.?0+$/, "");
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

const buildSinglePointSparkline = (
  point: SparklinePoint,
  domainStart: number,
  domainEnd: number,
  width: number,
  padding: number,
  innerHeight: number,
  min: number,
  max: number,
): SparklineRenderData => {
  const y = padding + innerHeight / 2;
  const x = domainStart === domainEnd ? width : ((point.time - domainStart) / (domainEnd - domainStart)) * width;
  const xStart = Math.max(0, x - 2);
  const xEnd = Math.min(width, x + 2);

  return {
    path: `M ${formatPathNumber(xStart)} ${formatPathNumber(y)} L ${formatPathNumber(xEnd)} ${formatPathNumber(y)}`,
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
