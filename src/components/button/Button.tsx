import { FC } from 'react';
import { ButtonProps } from './ButtonProps';
import './buttonStyle.scss';

export const Button: FC<ButtonProps> = props => {
    const {
        onClick,
        text
    } = props;
    return(
        <div onClick = {onClick} className='button'>
            {text}
        </div>
    )
}