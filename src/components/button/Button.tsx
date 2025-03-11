import { FC } from 'react';
import { ButtonProps } from './ButtonProps';

export const Button: FC<ButtonProps> = props => {
    const {
        onClick,
        text
    } = props;
    return(
        <div onClick = {onClick}>
            {text}
        </div>
    )
}