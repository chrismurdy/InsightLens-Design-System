import * as React from "react";

/**
 * One of the nine gold line icons from the InsightLens service pages.
 * @startingPoint section="Display" subtitle="The nine brand service icons" viewport="700x200"
 */
export interface ServiceIconProps {
  /** One of ServiceIcon.names, e.g. "3d-scans-digital-twins". */
  name: string;
  size?: number;
  label?: string;
  /** Relative prefix to the design-system root, e.g. "../../". */
  assetBase?: string;
  style?: React.CSSProperties;
}
export function ServiceIcon(props: ServiceIconProps): JSX.Element;
