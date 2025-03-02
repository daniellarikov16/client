export interface TextFieldProps {
    lableText?: string;
    type?: React.HTMLInputTypeAttribute;
    error?: string;
    value?: string;
    onChange?: (value: string) => void;
  }