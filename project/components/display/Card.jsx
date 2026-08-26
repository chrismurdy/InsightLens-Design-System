import React from "react";

/** Media / content card: 12px radius, hairline border, lifts 4px on hover. */
export function Card({
  image, imageAlt = "", eyebrow, title, children, footer, href,
  interactive = true, aspect = "16 / 9", style,
}) {
  const [hover, setHover] = React.useState(false);
  const lift = interactive && hover;
  const Tag = href ? "a" : "div";
  return (
    <Tag
      href={href}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "block", background: "var(--il-surface-card)", color: "inherit", textDecoration: "none",
        border: "1px solid var(--il-line-hairline)", borderRadius: "var(--il-radius-lg)", overflow: "hidden",
        boxShadow: lift ? "var(--il-shadow-lg)" : "var(--il-shadow-sm)",
        transform: lift ? "translateY(-4px)" : "none",
        transition: "transform var(--il-dur) var(--il-ease), box-shadow var(--il-dur) var(--il-ease)",
        ...style,
      }}
    >
      {image ? (
        <div style={{ aspectRatio: aspect, overflow: "hidden", background: "var(--il-grey-100)" }}>
          <img src={image} alt={imageAlt} style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: lift ? "scale(1.045)" : "none",
            transition: "transform var(--il-dur-slow) var(--il-ease)",
          }} />
        </div>
      ) : null}
      <div style={{ padding: "20px 24px 24px" }}>
        {eyebrow ? <div className="il-eyebrow" style={{ marginBottom: 10 }}>{eyebrow}</div> : null}
        {title ? <h3 className="il-h4" style={{ margin: "0 0 8px" }}>{title}</h3> : null}
        {children ? <div className="il-small" style={{ color: "var(--il-text-secondary)" }}>{children}</div> : null}
        {footer ? <div style={{ marginTop: 16 }}>{footer}</div> : null}
      </div>
    </Tag>
  );
}
