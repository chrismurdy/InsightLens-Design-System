import * as React from "react";

/**
 * Pill-shaped prompt input for the InsightLens data-agent surfaces.
 * @startingPoint section="Forms" subtitle="AI prompt field from the DISCOVER screen" viewport="700x120"
 */
export interface PromptFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (value?: string) => void;
  placeholder?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function PromptField(props: PromptFieldProps): JSX.Element;
