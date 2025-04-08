import { FC } from 'react';
import { IconProps } from '../../types/commonTypes';

export const TrashIcon: FC<IconProps> = props => {
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
                d="M22 10V7a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v3H6v2h2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V12h2v-2h-4zM12 7h8v3h-8V7zm10 17H10V12h12v12z" 
                fill={color}
            />
            
            <path 
                d="M14 14h2v8h-2zM16 14h2v8h-2zM18 14h2v8h-2z" 
                fill={color}
                opacity="0.7"
            />
            
            <path 
                d="M24 9H8V7h16v2z" 
                fill={color}
                opacity="0.8"
            />
            
            <path 
                d="M20 9h-8V7h8v2z" 
                fill={color}
                opacity="0.9"
            />
        </svg>
    );
};