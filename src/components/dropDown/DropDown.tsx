import { ChangeEvent, FC } from "react";
import { DropDownProps } from "./DropDownProps";
import './dropDownStyles.scss'
import clsx from "classnames";


export const DropDown: FC<DropDownProps> = props => {
    const {items, label, lblWeight, selectedChanged} = props;

    const selectedChangedHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        selectedChanged && selectedChanged(event.target.value);
    }

    return(
        <div className="drop_down">
            {!!label && (
                <label className={clsx("drop_down__lbl", {
                    'drop_down__lbl_strong': lblWeight==='strong'
            })}>
                {label}
            </label>)}
            <select className="drop-down__select" onChange={selectedChangedHandler}>
                {items.map((item, idx)=>{
                    return (
                        <option key = {idx} value = {item.value}>{item.text}</option>
                    );
                })}
            </select>
        </div>
    )
} 