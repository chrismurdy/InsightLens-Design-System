import * as React from "react";

/**
 * Vertical bar chart, gold bars on a hairline grid.
 * @startingPoint section="Charts" subtitle="Gold bars, hairline grid, caption labels" viewport="700x300"
 */
export interface BarDatum { label: string; value: number; color?: string; }
export interface BarChartProps {
  data: BarDatum[];
  height?: number;
  title?: string;
  valueFormat?: (d: BarDatum) => React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}
export function BarChart(props: BarChartProps): JSX.Element;
