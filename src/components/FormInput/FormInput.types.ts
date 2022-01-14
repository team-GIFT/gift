export interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  value?: string;
  visibleLabel?: boolean;
  children?: string;
  forwardRef?: HTMLInputElement | null;
  inputProps?: object;
  restProps?: object;
}
