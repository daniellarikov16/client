import { FC, useState } from 'react';
import { EmployeesListProps } from './EmployeesListProps';
import clsx from 'classnames';
import './employeesListStyles.scss'
import { PencilIcon, TrashIcon } from '../../assets/icons';

export const EmployeesList: FC<EmployeesListProps> = props => {
    const {
        employeesList,
        onItemClick,
        onItemDelete,
        onItemEdit
    } = props;
    const [selectedUser, setSelectedUser] = useState(0);

    const employeeClickHandler = (id: number) => {
        setSelectedUser(id);
        onItemClick && onItemClick(id);
    }

    const employeeEditHandler = (id: number) => {
        onItemEdit && onItemEdit(id);
    }

    const employeeDeleteHandler = (id: number) => {
        onItemDelete && onItemDelete(id);
    }

    const isSelected = (id: number) => selectedUser === id;

    return(
        <div className='empl-list'>
            {employeesList.map(user => {
                return (
                    <div key = {user.id} 
                        className={clsx('empl-list__item', {'empl-list__item_selected': isSelected(user.id)})}
                        onClick={() => employeeClickHandler(user.id)}>
                        <div className='empl-list__item-fio'>
                            <span>{`${user.lastName} ${user.firstName} ${user.middleName ?? ''}`.trim()}</span>
                        </div>
                        <div className='empl-list__item_actions'>
                            <PencilIcon width={18} height={18} onClick={() => {employeeEditHandler(user.id)}}/>
                            <TrashIcon width={18} height={18} onClick={() => {employeeDeleteHandler(user.id)}}/>
                        </div>
                    </div>)
            })}
        </div>
    )
}