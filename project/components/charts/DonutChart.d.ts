import * as React from "react";

/**
 * Share-of-total donut in the brand data ramp (gold first, teal second).
 * @startingPoint section="Charts" subtitle="Donut with legend, gold-led data ramp" viewport="700x240"
 */
export interface DonutDatum { label: string; value: number; color?: string; }
export interface DonutChartProps {
  data: DonutDatum[];
  size?: number;
  thickness?: number;
  title?: string;
  showLegend?: boolean;
  style?: React.CSSProperties;
}
export function DonutChart(props: DonutChartProps): JSX.Element;
