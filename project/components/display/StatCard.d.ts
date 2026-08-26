import * as React from "react";

/**
 * Large metric readout used across platform dashboards ("497 / Number of Locations").
 * @startingPoint section="Display" subtitle="Dashboard metric with optional delta" viewport="700x160"
 */
export interface StatCardProps {
  value: React.ReactNode;
  label: string;
  delta?: string;
  deltaDirection?: "up" | "down";
  bordered?: boolean;
  style?: React.CSSProperties;
}
export function StatCard(props: StatCardProps): JSX.Element;
