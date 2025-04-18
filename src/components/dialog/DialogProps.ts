import { PropsWithChildren } from "react";

export interface DialogProps extends PropsWithChildren {
    className?: string;
    title: string;
}