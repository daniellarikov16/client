import { FC } from 'react';
import { IconProps } from '../../types/commonTypes';

export const PencilIcon: FC<IconProps> = props => {   
    const {
        className,
        color = '#313131',
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
            <path 
                d="M22 8L26 12L14 24L10 20L22 8Z" 
                stroke={color} 
                strokeWidth="2" 
                fill={color}
            />
            
            <path 
                d="M10 20L14 24L8 30L4 26L10 20Z" 
                fill="#D1A05A" 
                stroke="#B88C4A" 
                strokeWidth="2"
            />
            
            <path 
                d="M14 12L18 16L10 24L6 20L14 12Z" 
                fill="#C0C0C0" 
                stroke="#A0A0A0" 
                strokeWidth="2"
            />
            
            <path 
                d="M4 26L8 30L2 32L0 30L4 26Z" 
                fill="#555555" 
                stroke="#333333" 
                strokeWidth="2"
            />
        </svg>
    );
}