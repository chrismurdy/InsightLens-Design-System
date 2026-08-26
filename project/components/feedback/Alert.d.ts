import * as React from "react";

/**
 * Inline semantic banner. Intentional addition — see readme.md.
 * @startingPoint section="Feedback" subtitle="Info, success, warning and danger banners" viewport="700x260"
 */
export interface AlertProps {
  tone?: "info" | "success" | "warning" | "danger";
  title?: string;
  children?: React.ReactNode;
  onDismiss?: () => void;
  style?: React.CSSProperties;
}
export function Alert(props: AlertProps): JSX.Element;
