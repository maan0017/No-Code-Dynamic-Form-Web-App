enum TextType {
  "Text Field",
  "text",
  "password",
  "email",
  "color",
  "tel",
}

export interface TextField {
  required: boolean;
  name: string;
  help_text?: string;
  placeholder: string;
  type: TextType;
  value?: string;
  maxLength: number;
}

export interface Checkbox {
  required: boolean;
  maxSelect: number;
  options: { option: string; selected: boolean | false }[];
  help_text?: string;
  toogle: boolean | false;
  name: string;
}

export interface RadioButtons {
  options: string[];
  selected: string | null;
}

enum ButtonStyle {
  DEFAULT = "btn",
  DANGER = "btn btn-danger",
  INFO = "btn btn-info",
  PRIMARY = "btn btn-primary",
  SECONDARY = "btn btn-secondary",
  SUCCESS = "btn btn-success",
  WARNING = "btn btn-warning",
  LIGHT = "btn btn-light",
  DARK = "btn btn-dark",
}

export interface Button {
  name: string;
  value?: string | "Button";
  type?: string;
  style?: ButtonStyle | "DEFAULT";
}
