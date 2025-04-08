import { StringLiteral } from "typescript";

export interface ButtonProps{
    className?: string;
    text?: string;
    onClick?: () => void;
    type?: 'primary' | 'secondary';
}