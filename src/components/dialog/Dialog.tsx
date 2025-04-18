import { FC } from "react";
import { DialogProps } from './DialogProps';
import './dialogStyle.scss';
import {Button} from '../button';
import clsx from 'classnames';

export const Dialog: FC<DialogProps> = props => {
    const { className, title, children } = props
    return (
        <div className="dialog">
            <div className={clsx("dialog__paper", className)}>
                <h4 className="dialog__header">{title}</h4>
                <div>{children}</div>
                <div>
                    <Button type="primary" text="Сохранить" />
                    <Button type='secondary'  text="Отмена" />
                </div>
            </div>
        </div>
    )
}
 
