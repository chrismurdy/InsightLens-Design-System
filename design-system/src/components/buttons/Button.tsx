import * as React from "react";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLElement>, "onClick" | "style"> {
  children?: React.ReactNode;
  /** primary = black, accent = signal gold, secondary = outlined, ghost = quiet blue. */
  variant?: "primary" | "accent" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  /** Material Symbols ligature name, e.g. "arrow_forward". */
  icon?: string;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  fullWidth?: boolean;
  as?: "button" | "a";
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

const SIZES: Record<NonNullable<ButtonProps["size"]>, React.CSSProperties> = {
  sm: { padding: "8px 16px", fontSize: "12px", minHeight: 34 },
  md: { padding: "12px 24px", fontSize: "14px", minHeight: 44 },
  lg: { padding: "16px 32px", fontSize: "15px", minHeight: 52 },
};

const VARIANTS: Record<NonNullable<ButtonProps["variant"]>, React.CSSProperties> = {
  primary:   { background: "var(--il-ink-900)", color: "var(--il-white)", border: "1px solid var(--il-ink-900)" },
  accent:    { background: "var(--il-gold-500)", color: "var(--il-ink-900)", border: "1px solid var(--il-gold-500)" },
  secondary: { background: "transparent", color: "var(--il-ink-900)", border: "1px solid var(--il-ink-900)" },
  ghost:     { background: "transparent", color: "var(--il-blue-500)", border: "1px solid transparent" },
};

const HOVER: Record<NonNullable<ButtonProps["variant"]>, React.CSSProperties> = {
  primary:   { background: "var(--il-navy-500)", borderColor: "var(--il-navy-500)" },
  accent:    { background: "var(--il-gold-400)", borderColor: "var(--il-gold-400)" },
  secondary: { background: "var(--il-grey-100)" },
  ghost:     { background: "var(--il-blue-050)" },
};

/** Square-cornered uppercase action button — the InsightLens CTA. */
export function Button({
  children, variant = "primary", size = "md", icon, iconPosition = "right",
  disabled = false, fullWidth = false, as, href, onClick, style, ...rest
}: ButtonProps) {
  const [hover, setHover] = React.useState(false);
  const Tag = (as === "a" || href ? "a" : "button") as React.ElementType;
  const base: React.CSSProperties = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
    fontFamily: "var(--il-font-body)", fontWeight: "var(--il-weight-semibold)" as React.CSSProperties["fontWeight"],
    letterSpacing: "var(--il-track-nav)", textTransform: "uppercase",
    borderRadius: "var(--il-radius-0)", cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1, textDecoration: "none", whiteSpace: "nowrap",
    width: fullWidth ? "100%" : "auto",
    transition: "background var(--il-dur) var(--il-ease), border-color var(--il-dur) var(--il-ease), color var(--il-dur) var(--il-ease)",
    ...SIZES[size], ...VARIANTS[variant],
    ...(hover && !disabled ? HOVER[variant] : null), ...style,
  };
  const glyph = icon ? (
    <span className="material-symbols-outlined" style={{ fontSize: size === "lg" ? 20 : 18 }}>{icon}</span>
  ) : null;
  return (
    <Tag
      href={href} onClick={disabled ? undefined : onClick} disabled={Tag === "button" ? disabled : undefined}
      style={base} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}
    >
      {iconPosition === "left" ? glyph : null}
      {children}
      {iconPosition === "right" ? glyph : null}
    </Tag>
  );
}
