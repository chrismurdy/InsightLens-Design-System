import * as React from "react";

export interface CrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: CrumbItem[];
  onNavigate?: (item: CrumbItem, index: number) => void;
  style?: React.CSSProperties;
}

/** "Locations | Dashboard" — pipe-separated trail above every platform view title. */
export function Breadcrumb({ items = [], onNavigate, style }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 10, ...style }}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 ? <span className="il-small" style={{ color: "var(--il-grey-400)" }}>|</span> : null}
          {it.href || onNavigate ? (
            <a href={it.href || "#"} onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(it, i); } }}
               className="il-small"
               style={{ color: i === items.length - 1 ? "var(--il-ink-900)" : "var(--il-text-secondary)", textDecoration: "none" }}>
              {it.label}
            </a>
          ) : (
            <span className="il-small" style={{ color: i === items.length - 1 ? "var(--il-ink-900)" : "var(--il-text-secondary)" }}>{it.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
