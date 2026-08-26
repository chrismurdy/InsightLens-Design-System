import * as React from "react";

export interface BadgeProps {
  children?: React.ReactNode;
  tone?: "neutral" | "gold" | "navy" | "blue" | "success" | "danger";
  /** Show a leading status dot. */
  dot?: boolean;
  /** Square corners instead of a pill — use inside dense tables. */
  square?: boolean;
  style?: React.CSSProperties;
}

const TONES: Record<NonNullable<BadgeProps["tone"]>, { background: string; color: string; border: string }> = {
  neutral: { background: "var(--il-grey-100)", color: "var(--il-grey-700)", border: "var(--il-grey-200)" },
  gold:    { background: "var(--il-gold-050)", color: "var(--il-gold-700)", border: "var(--il-gold-200)" },
  navy:    { background: "var(--il-navy-050)", color: "var(--il-navy-500)", border: "var(--il-navy-100)" },
  blue:    { background: "var(--il-blue-050)", color: "var(--il-blue-700)", border: "var(--il-blue-300)" },
  success: { background: "#eaf5ee", color: "#1f6b41", border: "#bfe0cc" },
  danger:  { background: "#fbeceb", color: "var(--il-danger)", border: "#f2c9c5" },
};

/** Small uppercase status / category pill. */
export function Badge({ children, tone = "neutral", dot = false, square = false, style }: BadgeProps) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      background: t.background, color: t.color, border: "1px solid " + t.border,
      borderRadius: square ? "var(--il-radius-0)" : "var(--il-radius-pill)",
      padding: square ? "4px 8px" : "4px 12px",
      fontFamily: "var(--il-font-body)", fontSize: "var(--il-size-caption)",
      fontWeight: "var(--il-weight-semibold)" as React.CSSProperties["fontWeight"], letterSpacing: "var(--il-track-eyebrow)",
      textTransform: "uppercase", whiteSpace: "nowrap", ...style,
    }}>
      {dot ? <span style={{ width: 6, height: 6, borderRadius: "50%", background: t.color }} /> : null}
      {children}
    </span>
  );
}
