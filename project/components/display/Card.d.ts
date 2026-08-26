import * as React from "react";

/**
 * Content / project card with optional cover image; lifts and zooms on hover.
 * @startingPoint section="Display" subtitle="Image card with eyebrow, title and body" viewport="700x340"
 */
export interface CardProps {
  image?: string;
  imageAlt?: string;
  eyebrow?: string;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  href?: string;
  interactive?: boolean;
  /** CSS aspect-ratio for the cover image. Default "16 / 9". */
  aspect?: string;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
