import { FC } from 'react';

interface IconProps{
    width?: number | string,
    height?: number | string,
    color?: string,
    className?: string,
    onClick?: () => void
}
export const LogoIcon: FC<IconProps> = props => {   
    const{
        className,
        color = '#ffffff',
        height = 28,
        width = 28,
        onClick
    } = props;

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={width} className={className} height={height} onClick={onClick} viewBox="796 796 200 200" enableBackground='new 796 796 200 200'  version='1.1'><g fill="none" fill-rule="nonzero"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z"/><path fill="#09244B" d="M6.06 3.94a1.5 1.5 0 1 0-2.12 2.12l4.17 4.172a5.5 5.5 0 0 0 7.78 0l4.17-4.171a1.5 1.5 0 0 0-2.12-2.122l-4.172 4.172a2.5 2.5 0 0 1-3.536 0L6.061 3.939Zm0 16.12a1.5 1.5 0 0 1-2.12-2.12l4.17-4.172a5.5 5.5 0 0 1 7.78 0l4.17 4.171a1.5 1.5 0 0 1-2.12 2.122l-4.172-4.172a2.5 2.5 0 0 0-3.536 0l-4.171 4.172Z"/></g></svg>
    )
}