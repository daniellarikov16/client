import { FC } from "react";
import { WidgetLayoutProps } from "./WidgetLayoutProps";

export const WidgetLayout: FC<WidgetLayoutProps> = props => {
    const {
        children
    } = props;

    return(
        <div>
            <div>
                Header
            </div>
            <div>
                {children}
            </div>
            <div>
                Footer
            </div>
        </div>
    )
}