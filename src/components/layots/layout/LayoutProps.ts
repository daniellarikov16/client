import { ReactNode, PropsWithChildren } from 'react';

export interface LayoutProps extends PropsWithChildren{
    headerChild?: ReactNode;
    footer?: ReactNode;
    title?: string;
}