/* @ds-bundle: {"format":3,"namespace":"EnvisionDesignSystem_6f7dfa","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"06c7e892fb63","components/display/Badge.jsx":"a01071b630f2","components/display/Card.jsx":"10b3bb3100d3","components/feedback/Alert.jsx":"a262211dc857","components/forms/Input.jsx":"826101dde6d7","components/navigation/Tabs.jsx":"41629dd02136","ui_kits/website/app.jsx":"67fbf94c4a40","ui_kits/website/kit.jsx":"da7e62cbcc06","ui_kits/website/sections.jsx":"9428ca82b21a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EnvisionDesignSystem_6f7dfa = window.EnvisionDesignSystem_6f7dfa || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Envision Button — square-cornered action control.
 * Primary uses the interactive action-blue; secondary is an outlined
 * variant. Optional Material Symbol icon on the left or right.
 */
function Button({
  children,
  variant = "primary",
  size = "medium",
  icon,
  iconPosition = "right",
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    small: {
      padding: "8px 16px",
      font: "var(--fs-p3)",
      icon: 18,
      gap: 8
    },
    medium: {
      padding: "12px 20px",
      font: "var(--fs-p2)",
      icon: 20,
      gap: 8
    },
    large: {
      padding: "16px 24px",
      font: "var(--fs-p1)",
      icon: 24,
      gap: 8
    }
  };
  const s = sizes[size] || sizes.medium;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    padding: s.padding,
    fontFamily: "var(--font-body)",
    fontSize: s.font,
    fontWeight: "var(--fw-medium)",
    lineHeight: 1.2,
    border: "2px solid transparent",
    borderRadius: "var(--radius-none)",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background-color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    opacity: disabled ? 0.45 : 1
  };
  const variants = {
    primary: {
      backgroundColor: "var(--action-bg)",
      color: "var(--action-fg)",
      borderColor: "var(--action-bg)"
    },
    secondary: {
      backgroundColor: "var(--surface-alt)",
      color: "var(--action-bg)",
      borderColor: "var(--action-bg)"
    },
    ghost: {
      backgroundColor: "transparent",
      color: "var(--action-bg)",
      borderColor: "transparent"
    }
  };
  const hoverEnter = e => {
    if (disabled) return;
    if (variant === "primary") {
      e.currentTarget.style.backgroundColor = "var(--action-bg-hover)";
      e.currentTarget.style.borderColor = "var(--action-bg-hover)";
    } else if (variant === "secondary") {
      e.currentTarget.style.backgroundColor = "var(--ev-action-tint)";
      e.currentTarget.style.borderColor = "var(--ev-sky-300)";
      e.currentTarget.style.color = "var(--ev-sky-300)";
    } else {
      e.currentTarget.style.backgroundColor = "var(--ev-action-50)";
    }
  };
  const hoverLeave = e => {
    if (disabled) return;
    Object.assign(e.currentTarget.style, variants[variant]);
  };
  const iconEl = icon ? /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: s.icon,
      lineHeight: 0,
      fontVariationSettings: "'wght' 500"
    },
    "aria-hidden": "true"
  }, icon) : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: hoverEnter,
    onMouseLeave: hoverLeave,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), icon && iconPosition === "left" && iconEl, children && /*#__PURE__*/React.createElement("span", null, children), icon && iconPosition === "right" && iconEl);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag / Badge — compact status or category label.
 * `tone` maps to the semantic palette; `variant` is solid or soft.
 */
function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  size = "medium",
  icon,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      solid: ["var(--ev-grey-700)", "#fff"],
      soft: ["var(--ev-grey-100)", "var(--ev-grey-700)"]
    },
    brand: {
      solid: ["var(--ev-blue-500)", "#fff"],
      soft: ["var(--ev-blue-50)", "var(--ev-blue-600)"]
    },
    info: {
      solid: ["var(--ev-action-500)", "#fff"],
      soft: ["var(--ev-action-50)", "var(--ev-action-700)"]
    },
    success: {
      solid: ["var(--ev-lime-500)", "#fff"],
      soft: ["var(--ev-lime-bg)", "var(--ev-lime-700)"]
    },
    warning: {
      solid: ["var(--ev-yellow-500)", "var(--ev-grey-900)"],
      soft: ["var(--ev-yellow-bg)", "var(--ev-yellow-700)"]
    },
    danger: {
      solid: ["var(--ev-red-500)", "#fff"],
      soft: ["var(--ev-red-bg)", "var(--ev-red-600)"]
    }
  };
  const [bg, fg] = (tones[tone] || tones.neutral)[variant];
  const sizes = {
    small: {
      padding: "2px 8px",
      font: "11px",
      icon: 14
    },
    medium: {
      padding: "4px 10px",
      font: "var(--fs-caption)",
      icon: 16
    }
  };
  const s = sizes[size] || sizes.medium;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      padding: s.padding,
      backgroundColor: bg,
      color: fg,
      fontFamily: "var(--font-body)",
      fontSize: s.font,
      fontWeight: "var(--fw-semibold)",
      lineHeight: 1.4,
      letterSpacing: "0.02em",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: s.icon,
      lineHeight: 0
    },
    "aria-hidden": "true"
  }, icon), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — surface container for projects, content, and features.
 * Optional cover image, eyebrow, title (Gotham), body and footer.
 * Hover lifts when `interactive`.
 */
function Card({
  image,
  imageAlt = "",
  imageHeight = 200,
  eyebrow,
  title,
  children,
  footer,
  interactive = false,
  tag,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "var(--surface-raised)",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border-hairline)",
      overflow: "hidden",
      boxShadow: interactive && hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: interactive && hover ? "translateY(-4px)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: imageHeight,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: interactive && hover ? "scale(1.04)" : "scale(1)",
      transition: "transform var(--dur-slow) var(--ease-standard)"
    }
  }), tag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12
    }
  }, tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-500)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-200)",
      flex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p3)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--text-link)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-h5)",
      lineHeight: "var(--lh-h5)",
      color: "var(--text-brand)",
      margin: 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p2)",
      lineHeight: "var(--lh-p2)",
      color: "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-300)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Alert — inline banner for semantic messages.
 * Square-ish (xs radius) with a leading icon, like the Figma alert-basic.
 */
function Alert({
  tone = "info",
  title,
  children,
  onClose,
  icon,
  style,
  ...rest
}) {
  const tones = {
    info: {
      bg: "var(--ev-action-50)",
      border: "var(--ev-action-200)",
      fg: "var(--ev-action-700)",
      icon: "info"
    },
    success: {
      bg: "var(--ev-lime-bg)",
      border: "var(--ev-lime-300)",
      fg: "var(--ev-lime-700)",
      icon: "check_circle"
    },
    warning: {
      bg: "var(--ev-yellow-bg)",
      border: "var(--ev-yellow-300)",
      fg: "var(--ev-yellow-700)",
      icon: "warning"
    },
    danger: {
      bg: "var(--ev-red-bg)",
      border: "var(--ev-red-200)",
      fg: "var(--ev-red-600)",
      icon: "cancel"
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-200)",
      padding: "var(--space-200) var(--space-300)",
      backgroundColor: t.bg,
      border: `1px solid ${t.border}`,
      borderRadius: "var(--radius-xs)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 20,
      lineHeight: "22px",
      color: t.fg,
      flex: "none"
    },
    "aria-hidden": "true"
  }, icon || t.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-p2)",
      color: "var(--text-strong)",
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-p3)",
      lineHeight: "var(--lh-p3)",
      color: "var(--text-body)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 2,
      color: "var(--ev-grey-600)",
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 18
    }
  }, "close")));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labelled text field. Square corners, action-blue focus ring.
 * Supports leading icon, helper / error text and disabled state.
 */
function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  defaultValue,
  onChange,
  icon,
  helper,
  error,
  disabled = false,
  required = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  const borderColor = error ? "var(--ev-red-500)" : focus ? "var(--action-bg)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--fs-p3)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-strong)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ev-red-500)"
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "0 12px",
      height: 44,
      backgroundColor: disabled ? "var(--ev-grey-100)" : "var(--surface-page)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-none)",
      boxShadow: focus && !error ? "0 0 0 3px var(--ev-action-100)" : "none",
      transition: "border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 20,
      color: "var(--text-muted)",
      flex: "none"
    },
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p2)",
      color: "var(--text-strong)"
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: error ? "var(--ev-red-600)" : "var(--text-muted)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — underline-style navigation. Active tab is action-blue with a
 * 2px underline indicator. Controlled or uncontrolled.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.id);
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-700)",
      borderBottom: "1px solid var(--border-default)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), items.map(item => {
    const isActive = item.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => select(item.id),
      style: {
        appearance: "none",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0 0 12px",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-body)",
        fontSize: "var(--fs-p2)",
        fontWeight: isActive ? "var(--fw-semibold)" : "var(--fw-regular)",
        color: isActive ? "var(--action-bg)" : "var(--text-muted)",
        borderBottom: `2px solid ${isActive ? "var(--action-bg)" : "transparent"}`,
        marginBottom: -1,
        transition: "color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)"
      }
    }, item.icon && /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        fontSize: 18
      },
      "aria-hidden": "true"
    }, item.icon), item.label, item.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-caption)",
        fontWeight: "var(--fw-semibold)",
        background: isActive ? "var(--ev-action-50)" : "var(--ev-grey-100)",
        color: isActive ? "var(--action-bg)" : "var(--text-muted)",
        borderRadius: "var(--radius-pill)",
        padding: "1px 8px"
      }
    }, item.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Envision website UI kit — interactive composition. */
const {
  NavBar,
  Hero,
  TrustedClients,
  WhatWeDo,
  FeaturedWork,
  Methodology,
  CTA,
  Footer,
  EvButton
} = window;
function ContactDialog({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  if (!open) return null;
  const field = (label, props = {}) => /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p3)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({}, props, {
    style: {
      height: 44,
      padding: "0 12px",
      border: "1.5px solid var(--border-default)",
      borderRadius: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p2)",
      color: "var(--text-strong)",
      outline: "none"
    },
    onFocus: e => {
      e.target.style.borderColor = "var(--action-bg)";
      e.target.style.boxShadow = "0 0 0 3px var(--ev-action-100)";
    },
    onBlur: e => {
      e.target.style.borderColor = "var(--border-default)";
      e.target.style.boxShadow = "none";
    }
  })));
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "rgba(0,25,63,0.55)",
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 520,
      maxWidth: "100%",
      background: "#fff",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-xl)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "24px 28px",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-h5)",
      color: "var(--text-brand)",
      margin: 0
    }
  }, "Start a project"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--ev-grey-600)",
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "close"))), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "48px 28px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 48,
      color: "var(--ev-lime-500)"
    }
  }, "check_circle"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-h5)",
      color: "var(--text-brand)",
      margin: "12px 0 6px"
    }
  }, "Thank you"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p2)",
      color: "var(--text-body)",
      margin: 0
    }
  }, "We'll be in touch within two business days.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      padding: "24px 28px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, field("Full name", {
    placeholder: "Jordan Avery",
    required: true
  }), field("Work email", {
    type: "email",
    placeholder: "you@organization.com",
    required: true
  }), field("Organization", {
    placeholder: "e.g. Mount Sinai Hospital"
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p3)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-strong)"
    }
  }, "Tell us about your project"), /*#__PURE__*/React.createElement("textarea", {
    rows: 3,
    placeholder: "A donor recognition wall for our new pavilion\u2026",
    style: {
      padding: 12,
      border: "1.5px solid var(--border-default)",
      borderRadius: 0,
      resize: "vertical",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p2)",
      color: "var(--text-strong)",
      outline: "none"
    },
    onFocus: e => {
      e.target.style.borderColor = "var(--action-bg)";
    },
    onBlur: e => {
      e.target.style.borderColor = "var(--border-default)";
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 12,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(EvButton, {
    variant: "secondary",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(EvButton, {
    icon: "send",
    type: "submit"
  }, "Send enquiry")))));
}
function App() {
  const [contact, setContact] = React.useState(false);
  const open = () => setContact(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    onContact: open
  }), /*#__PURE__*/React.createElement(Hero, {
    onContact: open
  }), /*#__PURE__*/React.createElement(TrustedClients, null), /*#__PURE__*/React.createElement(WhatWeDo, null), /*#__PURE__*/React.createElement(FeaturedWork, null), /*#__PURE__*/React.createElement(Methodology, null), /*#__PURE__*/React.createElement(CTA, {
    onContact: open
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(ContactDialog, {
    open: contact,
    onClose: () => setContact(false)
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/kit.jsx
try { (() => {
/* Envision website UI kit — shared cosmetic primitives.
   These mirror the design-system components but are self-contained
   so the kit renders without the compiled bundle. */

function EvButton({
  children,
  variant = "primary",
  size = "medium",
  icon,
  iconPosition = "right",
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    small: {
      padding: "8px 16px",
      font: "var(--fs-p3)",
      icon: 18
    },
    medium: {
      padding: "12px 20px",
      font: "var(--fs-p2)",
      icon: 20
    },
    large: {
      padding: "16px 24px",
      font: "var(--fs-p1)",
      icon: 24
    }
  };
  const s = sizes[size];
  const variants = {
    primary: {
      background: hover ? "var(--action-bg-hover)" : "var(--action-bg)",
      color: "#fff",
      borderColor: hover ? "var(--action-bg-hover)" : "var(--action-bg)"
    },
    secondary: {
      background: hover ? "var(--ev-action-tint)" : "var(--surface-alt)",
      color: hover ? "var(--ev-sky-300)" : "var(--action-bg)",
      borderColor: hover ? "var(--ev-sky-300)" : "var(--action-bg)"
    },
    ondark: {
      background: hover ? "#fff" : "transparent",
      color: hover ? "var(--ev-blue-500)" : "#fff",
      borderColor: "#fff"
    },
    ghost: {
      background: hover ? "var(--ev-action-50)" : "transparent",
      color: "var(--action-bg)",
      borderColor: "transparent"
    }
  };
  const iconEl = icon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: s.icon,
      lineHeight: 0
    }
  }, icon);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: s.padding,
      fontFamily: "var(--font-body)",
      fontSize: s.font,
      fontWeight: "var(--fw-medium)",
      lineHeight: 1.2,
      border: "2px solid transparent",
      borderRadius: 0,
      cursor: "pointer",
      whiteSpace: "nowrap",
      transition: "all var(--dur-base) var(--ease-standard)",
      ...variants[variant],
      ...style
    }
  }, icon && iconPosition === "left" && iconEl, children && /*#__PURE__*/React.createElement("span", null, children), icon && iconPosition === "right" && iconEl);
}
function EvBadge({
  children,
  tone = "neutral",
  variant = "soft",
  style
}) {
  const tones = {
    neutral: {
      soft: ["var(--ev-grey-100)", "var(--ev-grey-700)"],
      solid: ["var(--ev-grey-700)", "#fff"]
    },
    brand: {
      soft: ["var(--ev-blue-50)", "var(--ev-blue-600)"],
      solid: ["var(--ev-blue-500)", "#fff"]
    },
    info: {
      soft: ["var(--ev-action-50)", "var(--ev-action-700)"],
      solid: ["var(--ev-action-500)", "#fff"]
    },
    success: {
      soft: ["var(--ev-lime-bg)", "var(--ev-lime-700)"],
      solid: ["var(--ev-lime-500)", "#fff"]
    }
  };
  const [bg, fg] = (tones[tone] || tones.neutral)[variant];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 10px",
      background: bg,
      color: fg,
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: ".02em",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
function Eyebrow({
  children,
  onDark,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p3)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: onDark ? "var(--ev-sky-300)" : "var(--text-link)",
      ...style
    }
  }, children);
}

/* layout helper — section shell with max-width container */
function Section({
  children,
  bg = "var(--surface-page)",
  pad = "96px 0",
  id,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      padding: pad,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 48px",
      boxSizing: "border-box"
    }
  }, children));
}
Object.assign(window, {
  EvButton,
  EvBadge,
  Eyebrow,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Envision website UI kit — page sections. */
const {
  EvButton,
  EvBadge,
  Eyebrow,
  Section
} = window;

/* ---------------- Nav Bar ---------------- */
function NavBar({
  onContact
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["Work", "Expertise", "Methodology", "About"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(10px)",
      borderBottom: `1px solid ${scrolled ? "var(--border-default)" : "transparent"}`,
      transition: "border-color var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 48px",
      height: 76,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/envision-wordmark-navy.png",
    alt: "Envision",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 36
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#" + l.toLowerCase(),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p2)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-strong)",
      textDecoration: "none"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--text-link)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--text-strong)"
  }, l)), /*#__PURE__*/React.createElement(EvButton, {
    size: "small",
    icon: "arrow_forward",
    onClick: onContact
  }, "Start a project"))));
}

/* ---------------- Hero ---------------- */
function Hero({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 620,
      display: "flex",
      alignItems: "center",
      background: "var(--ev-blue-500)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/hero-environment.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, rgba(0,25,63,0.92) 0%, rgba(0,46,114,0.78) 45%, rgba(0,46,114,0.25) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 48px",
      width: "100%",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "Recognition, Designed"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: 64,
      lineHeight: "72px",
      color: "#fff",
      margin: "20px 0 0",
      letterSpacing: "-0.01em"
    }
  }, "We make meaning visible in public space."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p1)",
      lineHeight: "30px",
      color: "rgba(255,255,255,0.85)",
      margin: "24px 0 0",
      maxWidth: 600
    }
  }, "Envision designs donor recognition, wayfinding, and environmental graphics that celebrate contribution and communicate purpose \u2014 across hospitals, universities, and cultural institutions."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(EvButton, {
    size: "large",
    icon: "arrow_forward",
    onClick: onContact
  }, "Start a project"), /*#__PURE__*/React.createElement(EvButton, {
    size: "large",
    variant: "ondark",
    href: "#work"
  }, "View our work")))));
}

/* ---------------- Trusted Clients ---------------- */
function TrustedClients() {
  const clients = ["SickKids", "Mount Sinai", "Royal Ontario Museum", "Sunnybrook", "University of Toronto", "Aga Khan Museum", "Western University", "Havergal College"];
  return /*#__PURE__*/React.createElement(Section, {
    pad: "56px 0",
    bg: "var(--ev-grey-50)"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p3)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      margin: "0 0 28px"
    }
  }, "Trusted by leading institutions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px 48px"
    }
  }, clients.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: 22,
      color: "var(--ev-grey-400)"
    }
  }, c))));
}

/* ---------------- What We Do ---------------- */
function WhatWeDo() {
  const services = [{
    icon: "verified",
    title: "Donor Recognition",
    body: "Walls and displays that honour generosity with permanence and grace."
  }, {
    icon: "explore",
    title: "Wayfinding",
    body: "Signage systems that make complex environments effortless to navigate."
  }, {
    icon: "architecture",
    title: "Environmental Graphics",
    body: "Architectural-scale graphics that give a space its voice and identity."
  }, {
    icon: "devices",
    title: "Digital Experiences",
    body: "Interactive displays and touchscreens that bring recognition to life."
  }];
  return /*#__PURE__*/React.createElement(Section, {
    id: "expertise"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-h2)",
      lineHeight: "var(--lh-h2)",
      color: "var(--text-brand)",
      margin: "16px 0 0"
    }
  }, "Recognition across every surface")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24
    }
  }, services.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      padding: 28,
      background: "#fff",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--ev-action-50)",
      color: "var(--action-bg)",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 28
    }
  }, s.icon)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-h6)",
      color: "var(--text-brand)",
      margin: "0 0 8px"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p3)",
      lineHeight: "var(--lh-p3)",
      color: "var(--text-body)",
      margin: 0
    }
  }, s.body)))));
}

/* ---------------- Featured Work ---------------- */
const PROJECTS = [{
  img: "../../assets/photos/project-sinai.jpg",
  cat: "Healthcare",
  title: "Schwartz / Reisman Emergency Centre",
  client: "Mount Sinai Hospital"
}, {
  img: "../../assets/photos/project-western.jpg",
  cat: "Education",
  title: "Alumni Recognition Wall",
  client: "Western University"
}, {
  img: "../../assets/photos/project-sickkids.jpg",
  cat: "Healthcare",
  title: "Patient Pavilion Donor Display",
  client: "SickKids"
}, {
  img: "../../assets/photos/project-5.jpg",
  cat: "Culture",
  title: "Gallery Naming Program",
  client: "Aga Khan Museum"
}, {
  img: "../../assets/photos/project-6.jpg",
  cat: "Civic",
  title: "Community Recognition Plaza",
  client: "DUKE Heights BIA"
}, {
  img: "../../assets/photos/hero-environment.png",
  cat: "Wayfinding",
  title: "Transit Hub Signage System",
  client: "City of Toronto"
}];
function FeaturedWork() {
  const cats = ["All", "Healthcare", "Education", "Culture", "Civic", "Wayfinding"];
  const [active, setActive] = React.useState("All");
  const shown = active === "All" ? PROJECTS : PROJECTS.filter(p => p.cat === active);
  return /*#__PURE__*/React.createElement(Section, {
    id: "work",
    bg: "var(--ev-grey-50)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 24,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Our work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-h2)",
      lineHeight: "var(--lh-h2)",
      color: "var(--text-brand)",
      margin: "16px 0 0"
    }
  }, "Projects that stand the test of place")), /*#__PURE__*/React.createElement(EvButton, {
    variant: "secondary",
    icon: "arrow_forward"
  }, "All projects")), /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 32,
      borderBottom: "1px solid var(--border-default)",
      marginBottom: 32
    }
  }, cats.map(c => {
    const on = c === active;
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      role: "tab",
      "aria-selected": on,
      onClick: () => setActive(c),
      style: {
        appearance: "none",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0 0 12px",
        fontFamily: "var(--font-body)",
        fontSize: "var(--fs-p2)",
        fontWeight: on ? "var(--fw-semibold)" : "var(--fw-regular)",
        color: on ? "var(--action-bg)" : "var(--text-muted)",
        borderBottom: `2px solid ${on ? "var(--action-bg)" : "transparent"}`,
        marginBottom: -1,
        transition: "all var(--dur-base)"
      }
    }, c);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.title
  }, p)))));
}
function ProjectCard({
  img,
  cat,
  title,
  client
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "#fff",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: hover ? "translateY(-4px)" : "none",
      transition: "all var(--dur-base)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 200,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover ? "scale(1.05)" : "scale(1)",
      transition: "transform var(--dur-slow)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(EvBadge, {
    tone: "brand",
    variant: "solid"
  }, cat))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-h5)",
      lineHeight: "var(--lh-h5)",
      color: "var(--text-brand)",
      margin: "0 0 6px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p3)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, client)));
}

/* ---------------- Methodology / Stats ---------------- */
function Methodology() {
  const steps = [{
    n: "01",
    t: "Discover",
    b: "We immerse in your story, donors, and architecture."
  }, {
    n: "02",
    t: "Design",
    b: "Concepts that balance permanence, dignity and place."
  }, {
    n: "03",
    t: "Fabricate",
    b: "Precision craft in metal, glass, and digital media."
  }, {
    n: "04",
    t: "Install",
    b: "Seamless on-site delivery and lasting stewardship."
  }];
  return /*#__PURE__*/React.createElement(Section, {
    id: "methodology"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Our methodology"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-h2)",
      lineHeight: "var(--lh-h2)",
      color: "var(--text-brand)",
      margin: "16px 0 20px"
    }
  }, "A disciplined path from idea to install"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p1)",
      lineHeight: "30px",
      color: "var(--text-body)",
      margin: 0
    }
  }, "Every recognition program follows a process we have refined across hundreds of installations \u2014 rigorous, collaborative, and built to endure.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 1,
      background: "var(--border-default)",
      border: "1px solid var(--border-default)"
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: "#fff",
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: 40,
      color: "var(--ev-action-200)",
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-h6)",
      color: "var(--text-brand)",
      margin: "16px 0 6px"
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p3)",
      lineHeight: "var(--lh-p3)",
      color: "var(--text-body)",
      margin: 0
    }
  }, s.b))))));
}

/* ---------------- CTA ---------------- */
function CTA({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ev-blue-500)",
      padding: "96px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 48px",
      textAlign: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "Let's build something lasting"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-h1)",
      lineHeight: "var(--lh-h1)",
      color: "#fff",
      margin: "16px auto 0",
      maxWidth: 800
    }
  }, "Ready to make contribution visible?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      justifyContent: "center",
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(EvButton, {
    size: "large",
    icon: "arrow_forward",
    onClick: onContact
  }, "Start a project"), /*#__PURE__*/React.createElement(EvButton, {
    size: "large",
    variant: "ondark"
  }, "Book a consultation"))));
}

/* ---------------- Footer ---------------- */
function Footer() {
  const cols = [{
    title: "WORK",
    items: ["Healthcare", "Education", "Culture", "Civic", "Corporate"]
  }, {
    title: "COMPANY",
    items: ["About", "Our Team", "Careers", "News"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ev-blue-500)",
      borderTop: "1px solid var(--ev-sky-200)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "80px 48px 40px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
      gap: 48,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/envision-wordmark-white.png",
    alt: "Envision",
    style: {
      height: 30,
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-light)",
      fontSize: 20,
      lineHeight: "30px",
      color: "rgba(255,255,255,0.9)",
      margin: "0 0 28px",
      maxWidth: 420
    }
  }, "An award-winning design company dedicated to recognition in the built environment."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p1)",
      fontWeight: "var(--fw-medium)"
    }
  }, /*#__PURE__*/React.createElement("div", null, "info@envisioncreates.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, "+1-416-694-8516"))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p3)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-wider)",
      color: "var(--ev-sky-300)",
      marginBottom: 18
    }
  }, c.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p2)",
      color: "rgba(255,255,255,0.85)",
      textDecoration: "none"
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p3)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-wider)",
      color: "var(--ev-sky-300)",
      marginBottom: 18
    }
  }, "CONTACT"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p2)",
      lineHeight: "24px",
      color: "rgba(255,255,255,0.85)",
      margin: 0
    }
  }, "Toronto", /*#__PURE__*/React.createElement("br", null), "750 Millway Avenue, Unit 7", /*#__PURE__*/React.createElement("br", null), "Concord, ON L4K 3T7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "24px 48px 40px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.2)",
      paddingTop: 24,
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-p3)",
      color: "rgba(255,255,255,0.7)"
    }
  }, "\xA9 2026 Envision Sales Inc. All rights reserved.")));
}
Object.assign(window, {
  NavBar,
  Hero,
  TrustedClients,
  WhatWeDo,
  FeaturedWork,
  Methodology,
  CTA,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
