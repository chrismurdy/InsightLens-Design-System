import React from "react";

const TONES = {
  info:    { border: "var(--il-blue-500)", bg: "var(--il-blue-050)", fg: "var(--il-blue-700)", icon: "info" },
  success: { border: "var(--il-success)", bg: "#eaf5ee", fg: "#1f6b41", icon: "check_circle" },
  warning: { border: "var(--il-gold-500)", bg: "var(--il-gold-050)", fg: "var(--il-gold-700)", icon: "warning" },
  danger:  { border: "var(--il-danger)", bg: "#fbeceb", fg: "var(--il-danger)", icon: "cancel" },
};

/** Inline status banner for platform screens. */
export function Alert({ tone = "info", title, children, onDismiss, style }) {
  const t = TONES[tone] || TONES.info;
  return (
    <div role="status" style={{
      display: "flex", gap: 12, alignItems: "flex-start",
      background: t.bg, borderLeft: "3px solid " + t.border, borderRadius: "var(--il-radius-sm)",
      padding: "14px 16px", ...style,
    }}>
      <span className="material-symbols-outlined" style={{ fontSize: 20, color: t.fg }}>{t.icon}</span>
      <div style={{ flex: 1 }}>
        {title ? <div className="il-small" style={{ fontWeight: "var(--il-weight-semibold)", color: "var(--il-ink-900)" }}>{title}</div> : null}
        {children ? <div className="il-small" style={{ color: "var(--il-text-secondary)", marginTop: title ? 2 : 0 }}>{children}</div> : null}
      </div>
      {onDismiss ? (
        <button onClick={onDismiss} aria-label="Dismiss"
          style={{ background: "none", border: 0, cursor: "pointer", color: "var(--il-grey-600)", padding: 0, lineHeight: 1 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>close</span>
        </button>
      ) : null}
    </div>
  );
}
