import React from "react";

/** The platform's big-number metric block: huge display numeral, quiet label. */
export function StatCard({ value, label, delta, deltaDirection = "up", bordered = true, style }) {
  const up = deltaDirection === "up";
  return (
    <div style={{
      padding: bordered ? "20px 24px" : 0,
      border: bordered ? "1px solid var(--il-line-hairline)" : "none",
      borderRadius: bordered ? "var(--il-radius-md)" : 0,
      background: "var(--il-surface-card)", ...style,
    }}>
      <div className="il-metric">{value}</div>
      <div className="il-small" style={{ color: "var(--il-text-secondary)", marginTop: 6, maxWidth: "14ch" }}>{label}</div>
      {delta ? (
        <div className="il-caption" style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 4,
          color: up ? "var(--il-success)" : "var(--il-danger)" }}>
          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>{up ? "trending_up" : "trending_down"}</span>
          {delta}
        </div>
      ) : null}
    </div>
  );
}
