import { StringLiteral } from "typescript";

export interface ButtonProps{
    text?: string;
    onClick?: () => void;
    type?: 'primary' | 'secondary';
}