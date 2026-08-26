import React from "react";

/** Platform left rail: logo lockup, uppercase items, gold-marked active row, sub-items. */
export function SideNav({ items = [], activeId, onSelect, logo, width = 232, footer, style }) {
  return (
    <nav style={{
      width, flex: "0 0 " + width + "px", background: "var(--il-white)",
      borderRight: "1px solid var(--il-line-hairline)", padding: "18px 0",
      display: "flex", flexDirection: "column", ...style,
    }}>
      {logo ? <div style={{ padding: "6px 20px 26px" }}><img src={logo} alt="InsightLens" style={{ height: 26, width: "auto" }} /></div> : null}
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 2 }}>
        {items.map((it) => {
          const active = it.id === activeId;
          const kids = it.children || [];
          return (
            <li key={it.id}>
              <button
                onClick={() => onSelect && onSelect(it.id)}
                className="il-nav-label"
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: 12,
                  background: active ? "var(--il-gold-050)" : "transparent",
                  borderLeft: "3px solid " + (active ? "var(--il-gold-500)" : "transparent"),
                  border: 0, borderLeftWidth: 3, borderLeftStyle: "solid",
                  borderLeftColor: active ? "var(--il-gold-500)" : "transparent",
                  color: "var(--il-ink-900)", padding: "11px 20px 11px 17px",
                  cursor: "pointer", textAlign: "left", font: "inherit",
                  fontWeight: active ? "var(--il-weight-bold)" : "var(--il-weight-semibold)",
                  transition: "background var(--il-dur) var(--il-ease)",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: active ? "var(--il-gold-600)" : "var(--il-grey-600)" }}>
                  {it.icon || "circle"}
                </span>
                {it.label}
              </button>
              {active && kids.length ? (
                <ul style={{ listStyle: "none", margin: "2px 0 8px", padding: "0 0 0 50px", display: "grid", gap: 6 }}>
                  {kids.map((k) => (
                    <li key={k.id}>
                      <button onClick={() => onSelect && onSelect(k.id)} className="il-small"
                        style={{ background: "none", border: 0, padding: 0, cursor: "pointer", font: "inherit",
                          color: k.id === it.activeChildId ? "var(--il-ink-900)" : "var(--il-text-secondary)",
                          fontWeight: k.id === it.activeChildId ? "var(--il-weight-semibold)" : "var(--il-weight-regular)" }}>
                        {k.id === it.activeChildId ? "▸ " : ""}{k.label}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
      {footer ? <div style={{ marginTop: "auto", padding: "20px" }}>{footer}</div> : null}
    </nav>
  );
}
