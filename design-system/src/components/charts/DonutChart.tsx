import * as React from "react";

export interface DonutDatum {
  label: string;
  value: number;
  color?: string;
}

export interface DonutChartProps {
  data: DonutDatum[];
  size?: number;
  thickness?: number;
  title?: string;
  showLegend?: boolean;
  style?: React.CSSProperties;
}

const RAMP = ["var(--il-chart-1)", "var(--il-chart-2)", "var(--il-chart-3)", "var(--il-chart-4)", "var(--il-chart-5)", "var(--il-chart-6)"];

/** Donut with outside labels — the platform's standard share-of-total chart. */
export function DonutChart({ data = [], size = 168, thickness = 26, title, showLegend = true, style }: DonutChartProps) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <figure style={{ margin: 0, ...style }}>
      {title ? <figcaption className="il-h4" style={{ marginBottom: 12 }}>{title}</figcaption> : null}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <svg width={size} height={size} viewBox={"0 0 " + size + " " + size} role="img">
          <g transform={"rotate(-90 " + size / 2 + " " + size / 2 + ")"}>
            {data.map((d, i) => {
              const len = (d.value / total) * c;
              const el = (
                <circle key={i} cx={size / 2} cy={size / 2} r={r} fill="none"
                  stroke={d.color || RAMP[i % RAMP.length]} strokeWidth={thickness}
                  strokeDasharray={len + " " + (c - len)} strokeDashoffset={-offset} />
              );
              offset += len;
              return el;
            })}
          </g>
        </svg>
        {showLegend ? (
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8 }}>
            {data.map((d, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 10, height: 10, background: d.color || RAMP[i % RAMP.length], flex: "0 0 10px" }} />
                <span className="il-small">{d.label}</span>
                <span className="il-small" style={{ color: "var(--il-text-muted)" }}>
                  {Math.round((d.value / total) * 100)}%
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </figure>
  );
}
