import { FC } from 'react';
import { ButtonProps } from './ButtonProps';
import './buttonStyle.scss'
import clsx from 'classnames';

export const Button: FC<ButtonProps> = props => {
    const {
        onClick,
        text,
        type

    } = props;
    return(
        <div onClick = {onClick} className={clsx('button', {
            'button_primary': type === 'primary',
            'button_secondary': type === 'secondary'
        })}>
            {text}
        </div>
    );
}