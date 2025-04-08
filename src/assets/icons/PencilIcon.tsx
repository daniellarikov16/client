import { FC } from 'react';
import { IconProps } from '../../types/commonTypes'

export const PencilIcon: FC<IconProps> = props => {   
    const{
        className,
        color = '#ffffff',
        height = 28,
        width = 28,
        onClick
    } = props;

    return (
        <svg 
            width={width} 
            height={height} 
            className={className} 
            onClick={onClick}
            viewBox="0 0 32 32" 
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            >
            <path d="M75,30 L85,40 L60,65 L50,55 L75,30 Z" stroke={color} stroke-width="2"/>
            
            <path d="M25,50 L50,25 L55,30 L30,55 L25,50 Z" fill="#D1A05A" stroke="#B88C4A" stroke-width="2"/>
            
            <path d="M50,25 L55,30 L25,50 L20,45 L50,25 Z" fill="#C0C0C0" stroke="#A0A0A0" stroke-width="2"/>
            
            <path d="M20,45 L25,50 L15,60 L10,55 L20,45 Z" fill="#555555" stroke="#333333" stroke-width="2"/>
            
            <path d="M30,40 L35,45" stroke="#B88C4A" stroke-width="2" stroke-linecap="round"/>
            <path d="M35,35 L40,40" stroke="#B88C4A" stroke-width="2" stroke-linecap="round"/>
            <path d="M40,30 L45,35" stroke="#B88C4A" stroke-width="2" stroke-linecap="round"/>
        </svg>
    );
}