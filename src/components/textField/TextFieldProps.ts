type InfoType = 'info' | 'error' | 'success';

export interface TextFieldProps {
    lableText?: string;
    type?: React.HTMLInputTypeAttribute;
    info?: string;
    infoType?: InfoType;
    value?: string;
    onChange?: (value: string) => void;
  }