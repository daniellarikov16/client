import { ChangeEvent, FC } from 'react';
import { TextFieldProps } from './TextFieldProps';
import './textFieldStyles.scss';
import clsx from 'classnames';

export const TextField: FC<TextFieldProps> = (props) => {
  const { info, infoType = 'succes', lableText, lblWeight, onChange, type = 'text', value } = props;

  const changeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  return (
    <div className='container'>
      <label className={clsx('container__lbl',{
        'container__lbl_strong': lblWeight === 'strong'
      })}>{lableText}</label>
      <input className = "container__input" type={type} value={value} onChange={changeValueHandler} />
      <span className={clsx('container__info', {
        'container__info_info': infoType === 'info',
        'container__info_error': infoType === 'error',
        'container__info_succes': infoType === 'success',
      })}>{info}</span>
    </div>
  );
};