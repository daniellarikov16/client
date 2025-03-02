import { ChangeEvent, FC } from 'react';
import { TextFieldProps } from './TextFieldProps';

export const TextField: FC<TextFieldProps> = (props) => {
  const { error, lableText, onChange, type = 'text', value } = props;

  const changeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  return (
    <div>
      <label>{lableText}</label>
      <input type={type} value={value} onChange={changeValueHandler} />
      <span>{error}</span>
    </div>
  );
};