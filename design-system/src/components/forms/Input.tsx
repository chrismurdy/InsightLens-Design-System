import * as React from "react";

export interface InputProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  name?: string;
  id?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  /** Material Symbols ligature shown inside the field, e.g. "search". */
  icon?: string;
  style?: React.CSSProperties;
}

/** Labelled square text field with an uppercase eyebrow label. */
export function Input({
  label, value, onChange, placeholder, type = "text", name, id,
  hint, error, disabled = false, required = false, icon, style,
}: InputProps) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || name || label;
  return (
    <label htmlFor={fieldId} style={{ display: "block", ...style }}>
      {label ? (
        <span className="il-eyebrow" style={{ display: "block", marginBottom: 8, color: "var(--il-ink-900)" }}>
          {label}{required ? <span style={{ color: "var(--il-gold-600)" }}> *</span> : null}
        </span>
      ) : null}
      <span style={{
        display: "flex", alignItems: "center", gap: 8, background: disabled ? "var(--il-grey-100)" : "var(--il-white)",
        border: "1px solid " + (error ? "var(--il-danger)" : focus ? "var(--il-blue-500)" : "var(--il-line-strong)"),
        borderRadius: "var(--il-radius-0)", padding: "0 12px",
        boxShadow: focus ? "var(--il-ring-focus)" : "none",
        transition: "border-color var(--il-dur) var(--il-ease), box-shadow var(--il-dur) var(--il-ease)",
      }}>
        {icon ? <span className="material-symbols-outlined" style={{ fontSize: 18, color: "var(--il-grey-500)" }}>{icon}</span> : null}
        <input
          id={fieldId} name={name} type={type} value={value} placeholder={placeholder}
          disabled={disabled} required={required}
          onChange={onChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            flex: 1, border: 0, outline: "none", background: "transparent", padding: "12px 0",
            font: "inherit", fontSize: "var(--il-size-body)", color: "var(--il-text-primary)",
          }}
        />
      </span>
      {error || hint ? (
        <span className="il-caption" style={{ display: "block", marginTop: 6, color: error ? "var(--il-danger)" : "var(--il-text-muted)" }}>
          {error || hint}
        </span>
      ) : null}
    </label>
  );
}
