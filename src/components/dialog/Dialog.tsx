import { FC } from "react";
import { DialogProps } from './DialogProps';
import './dialogStyle.scss';
import {Button} from '../button';
import clsx from 'classnames';

export const Dialog: FC<DialogProps> = props => {
    const { className, title, open = false, onCancel, onSave, children } = props

    if (!open){
        return null;
    }
    return (
        <div className="dialog" onClick={onCancel}>
            <div className={clsx("dialog__paper", className)} onClick={(e) => {e.preventDefault(); e.stopPropagation();}}>
                <h4 className="dialog__header">{title}</h4>
                <div className="dialog__body">{children}</div>
                <div className="dialog__footer">
                    <Button type="primary" text="Сохранить" onClick={onSave}/>
                    <Button type='secondary'  text="Отмена" onClick={onCancel}/>
                </div>
            </div>
        </div>
    )
}
 
