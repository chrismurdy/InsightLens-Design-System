import * as React from "react";

/**
 * Pipe-separated breadcrumb trail used above platform view titles.
 * @startingPoint section="Navigation" subtitle="Pipe-separated trail" viewport="700x90"
 */
export interface CrumbItem { label: string; href?: string; }
export interface BreadcrumbProps {
  items: CrumbItem[];
  onNavigate?: (item: CrumbItem, index: number) => void;
  style?: React.CSSProperties;
}
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
