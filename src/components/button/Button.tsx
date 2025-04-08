import { FC } from 'react';
import { ButtonProps } from './ButtonProps';
import './buttonStyle.scss'
import clsx from 'classnames';

export const Button: FC<ButtonProps> = props => {
    const {
        className,
        onClick,
        text,
        type

    } = props;
    return(
        <div onClick = {onClick} className={clsx('button', className, {
            'button_primary': type === 'primary',
            'button_secondary': type === 'secondary'
        })}>
            {text}
        </div>
    );
}