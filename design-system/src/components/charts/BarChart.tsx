import * as React from "react";

export interface BarDatum {
  label: string;
  value: number;
  color?: string;
}

export interface BarChartProps {
  data: BarDatum[];
  height?: number;
  title?: string;
  valueFormat?: (d: BarDatum) => React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}

/** Vertical gold bar chart with a light horizontal grid, as used on Locations Overview. */
export function BarChart({ data = [], height = 200, title, valueFormat, color = "var(--il-chart-1)", style }: BarChartProps) {
  const max = Math.max(...data.map((d) => d.value), 1);
  const ticks = 5;
  return (
    <figure style={{ margin: 0, ...style }}>
      {title ? <figcaption className="il-h4" style={{ marginBottom: 12 }}>{title}</figcaption> : null}
      <div style={{ display: "flex", gap: 10 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height, paddingBottom: 22 }}>
          {Array.from({ length: ticks + 1 }, (_, i) => (
            <span key={i} className="il-caption" style={{ lineHeight: 1 }}>
              {Math.round((max / ticks) * (ticks - i))}
            </span>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ position: "relative", height, borderBottom: "1px solid var(--il-line-strong)" }}>
            {Array.from({ length: ticks }, (_, i) => (
              <span key={i} style={{ position: "absolute", left: 0, right: 0, top: (height / ticks) * i,
                borderTop: "1px solid var(--il-line-hairline)" }} />
            ))}
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end",
                          gap: "6%", padding: "0 3%" }}>
              {data.map((d, i) => (
                <div key={i} title={d.label + ": " + d.value} style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                  <span style={{ display: "block", width: "100%", maxWidth: 56,
                    height: (d.value / max) * height, background: d.color || color,
                    transition: "height var(--il-dur-slow) var(--il-ease)" }} />
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: "6%", padding: "8px 3% 0" }}>
            {data.map((d, i) => (
              <span key={i} className="il-caption" style={{ flex: 1, textAlign: "center", color: "var(--il-text-secondary)" }}>
                {valueFormat ? valueFormat(d) : d.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}
