export type LabelWeight = "normal" | "strong";

export interface IconProps {
    width?: number | string;
    height?: number | string;
    color?: string;
    className?: string;
    onClick?: () => void;
}