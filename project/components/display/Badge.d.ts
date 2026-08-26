import * as React from "react";

/**
 * Small uppercase status / category pill.
 * @startingPoint section="Display" subtitle="Status and category pills" viewport="700x110"
 */
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: "neutral" | "gold" | "navy" | "blue" | "success" | "danger";
  /** Show a leading status dot. */
  dot?: boolean;
  /** Square corners instead of a pill — use inside dense tables. */
  square?: boolean;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
