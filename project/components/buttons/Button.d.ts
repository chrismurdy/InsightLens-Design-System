import * as React from "react";

/**
 * Square-cornered uppercase action button — the InsightLens CTA.
 * @startingPoint section="Buttons" subtitle="Primary, accent, secondary and ghost actions" viewport="700x180"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = black, accent = signal gold, secondary = outlined, ghost = quiet blue. */
  variant?: "primary" | "accent" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  /** Material Symbols ligature name, e.g. "arrow_forward". */
  icon?: string;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  fullWidth?: boolean;
  as?: "button" | "a";
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
