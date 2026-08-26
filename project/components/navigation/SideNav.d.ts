import * as React from "react";

/**
 * The InsightLens platform left navigation rail.
 * @startingPoint section="Navigation" subtitle="Platform left rail with active gold marker" viewport="700x420"
 */
export interface SideNavItem {
  id: string;
  label: string;
  /** Material Symbols ligature. */
  icon?: string;
  children?: { id: string; label: string }[];
  activeChildId?: string;
}
export interface SideNavProps {
  items: SideNavItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  /** Path to the logo lockup PNG. */
  logo?: string;
  width?: number;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}
export function SideNav(props: SideNavProps): JSX.Element;
