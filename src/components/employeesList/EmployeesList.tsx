import { FC, useState } from 'react';
import { EmployeesListProps } from './EmployeesListProps';

export const EmployeesList: FC<EmployeesListProps> = props => {
    const {employeesList} = props;
    const [selectedUser, setSelectedUser] = useState(0);

    const employeeClickHandler = (id: number) => {
        setSelectedUser(id);
    }

    const isSelected = (id: number) => selectedUser === id;

    return(
        <div>
            {employeesList.map(user => {
                return (
                    <div key = {user.id} onClick={() => employeeClickHandler(user.id)}>
                        {`${user.lastName} ${user.firstName} ${user.middleName ?? ''}`.trim()}
                    </div>)
            })}
        </div>
    )
}