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
        <svg width={width} className={className} height={height} onClick={onClick} viewBox="0 -0.5 21 21" version='1.1' xmlns='https:/www.w3.org/200/svg' xmlnsXlink='http:/www.w3.org/1999/xlink'>
  <rect x="20" y="5" width="60" height="45" rx="2" fill="#f0f0f0" stroke="#333" stroke-width="1.5"/>
  <rect x="25" y="10" width="50" height="35" fill="#ddd" stroke="#666" stroke-width="1"/>
  
  <rect x="45" y="50" width="10" height="5" fill="#ccc" stroke="#333" stroke-width="1"/>
  <rect x="40" y="55" width="20" height="3" fill="#aaa" stroke="#333" stroke-width="1"/>
  
  <rect x="30" y="15" width="40" height="25" fill="#e1f5fe" stroke="#90caf9" stroke-width="0.5"/>
</svg>
    )
}