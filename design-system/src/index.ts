// Styles are NOT imported here on purpose. This file is a JS/TS entry point built
// by Vite; routing styles.css through it would pull every @font-face and image
// url() into Vite's JS-triggered CSS asset pipeline, which (in library mode) has
// inlined local font files as base64 instead of emitting them as real files.
// Consumers import the raw stylesheet directly instead: see package.json's
// "./styles.css" export, which resolves to src/styles.css — an unprocessed CSS
// file whose relative asset paths (../assets/fonts/*, ../assets/icons/*) resolve
// correctly as shipped, exactly like the original prototype's plain <link> usage.

export { Button } from "./components/buttons/Button";
export type { ButtonProps } from "./components/buttons/Button";

export { Input } from "./components/forms/Input";
export type { InputProps } from "./components/forms/Input";
export { PromptField } from "./components/forms/PromptField";
export type { PromptFieldProps } from "./components/forms/PromptField";

export { Card } from "./components/display/Card";
export type { CardProps } from "./components/display/Card";
export { StatCard } from "./components/display/StatCard";
export type { StatCardProps } from "./components/display/StatCard";
export { Badge } from "./components/display/Badge";
export type { BadgeProps } from "./components/display/Badge";
export { ServiceIcon } from "./components/display/ServiceIcon";
export type { ServiceIconProps, ServiceIconName } from "./components/display/ServiceIcon";

export { DonutChart } from "./components/charts/DonutChart";
export type { DonutChartProps, DonutDatum } from "./components/charts/DonutChart";
export { BarChart } from "./components/charts/BarChart";
export type { BarChartProps, BarDatum } from "./components/charts/BarChart";

export { SideNav } from "./components/navigation/SideNav";
export type { SideNavProps, SideNavItem } from "./components/navigation/SideNav";
export { Breadcrumb } from "./components/navigation/Breadcrumb";
export type { BreadcrumbProps, CrumbItem } from "./components/navigation/Breadcrumb";

export { Alert } from "./components/feedback/Alert";
export type { AlertProps } from "./components/feedback/Alert";
