import * as React from "react";

const NAMES = [
  "asset-management-platform", "3d-scans-digital-twins", "iot-sensors-traffic-analytics",
  "e-paper-digital-signage", "digital-display-monitoring", "api-integration",
  "cybersecurity-compliance", "ma-data-models", "multi-purpose-spatial-intelligence",
] as const;

export type ServiceIconName = (typeof NAMES)[number];

export interface ServiceIconProps {
  /** One of ServiceIcon.names, e.g. "3d-scans-digital-twins". */
  name: ServiceIconName | string;
  size?: number;
  label?: string;
  /** Relative prefix to the design-system root, e.g. "../../". */
  assetBase?: string;
  style?: React.CSSProperties;
}

/**
 * Renders one of the brand's nine gold line icons (PNG assets lifted from the site).
 * assetBase points at the directory that holds assets/icons.
 */
export function ServiceIcon({ name, size = 52, label, assetBase = "", style }: ServiceIconProps) {
  const src = assetBase + "assets/icons/service-" + name + ".png";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 14, ...style }}>
      <img src={src} alt={label || name} width={size} height={size}
           style={{ width: size, height: size, objectFit: "contain" }} />
      {label ? <span className="il-nav-label" style={{ color: "var(--il-ink-900)" }}>{label}</span> : null}
    </span>
  );
}

ServiceIcon.names = NAMES;
