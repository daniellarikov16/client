import { FC } from 'react';
import { IconProps } from '../../types/commonTypes'

export const UploadIcon: FC<IconProps> = props => {
    const {
        className,
        color = '#ffffff',
        height = 24,
        width = 24,
        onClick
    } = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 1.58578L7.29294 6.29289L8.70715 7.70711L11 5.41426L11 18L13 18L13 5.41416L15.2929 7.7071L16.7072 6.29289L12 1.58578Z" fill="black"/><path d="M7 20H17V22H7V20Z" fill="black"/></svg>
    );
};