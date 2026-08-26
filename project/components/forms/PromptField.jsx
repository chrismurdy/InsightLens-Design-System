import React from "react";

/** The pill prompt field from the platform's DISCOVER agent screen. */
export function PromptField({
  value, onChange, onSubmit, placeholder = "Ask InsightLens…", disabled = false, style,
}) {
  const [focus, setFocus] = React.useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); if (onSubmit) onSubmit(value); }}
      style={{
        display: "flex", alignItems: "center", gap: 8, width: "100%",
        background: "var(--il-white)", borderRadius: "var(--il-radius-pill)",
        border: "1px solid " + (focus ? "var(--il-blue-500)" : "var(--il-grey-400)"),
        boxShadow: focus ? "var(--il-ring-focus)" : "var(--il-shadow-sm)",
        padding: "6px 6px 6px 18px",
        transition: "border-color var(--il-dur) var(--il-ease), box-shadow var(--il-dur) var(--il-ease)",
        ...style,
      }}
    >
      <input
        value={value} placeholder={placeholder} disabled={disabled}
        onChange={onChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ flex: 1, border: 0, outline: "none", background: "transparent", font: "inherit",
                 fontSize: "var(--il-size-small)", padding: "8px 0", color: "var(--il-text-primary)" }}
      />
      <button type="submit" disabled={disabled} aria-label="Send"
        style={{ display: "grid", placeItems: "center", width: 34, height: 34, flex: "0 0 34px",
                 border: 0, borderRadius: "var(--il-radius-pill)", cursor: "pointer",
                 background: "var(--il-blue-500)", color: "var(--il-white)" }}>
        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_upward</span>
      </button>
    </form>
  );
}
