import { ChangeEvent, FC } from 'react';
import { TextFieldProps } from './TextFieldProps';
import './textFieldStyles.css';

export const TextField: FC<TextFieldProps> = (props) => {
  const { info = "errror", infoType = 'error', lableText, onChange, type = 'text', value } = props;

  const changeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  return (
    <div className='container'>
      <label className='container__lbl'>{lableText}</label>
      <input className = "container__input" type={type} value={value} onChange={changeValueHandler} />
      <span className={`container__info ${infoType === 'error' ? 'container__info_error': 'container_info_success'}`}>{info}</span>
    </div>
  );
};