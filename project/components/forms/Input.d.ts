import * as React from "react";

/**
 * Labelled square text field with an uppercase eyebrow label.
 * @startingPoint section="Forms" subtitle="Text field with label, hint and error states" viewport="700x220"
 */
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
export function Input(props: InputProps): JSX.Element;
