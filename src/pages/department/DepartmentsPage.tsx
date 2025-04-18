import { FC, useState } from "react";
import { Layout } from "../../components/layots";
import './departmentsPageStyles.scss'
import { Dialog, DropDown } from "../../components";
import { EmployeesList } from "../../components";
import { Button } from "../../components";


export const DepartmentsPage: FC = () => {
    const[showEmployeeDialog, setShowEmployeeDialog] = useState (false);
    const [UserActionMode, setUserActionMode] = useState<'create' | 'edit'>('create');

    const createEmployeeHandler = () => {
        setUserActionMode('create');
        setShowEmployeeDialog(true);
    }


    return(
        <Layout>
            <div className="dep-page">
                <div className="dep-page__users-list-container">
                    <DropDown items={[{
                            text: 'Отдел 1', value: '1'
                        },{
                            text: 'Отдел 2', value: '2'
                        },{
                            text: 'Отдел 3', value: '3'
                        }]} 
                        label = "Отделы:"
                        selectedChanged = {(val) => console.log(val)}
                    />
                    <EmployeesList employeesList={[
                            {id: 1, lastName: 'Иванов', firstName: 'Иван', middleName:  'Иванович'},
                            {id: 2, lastName: 'Петров', firstName: 'Сергей', middleName:  'Дмитриевич'},
                            {id: 3, lastName: 'Степанов', firstName: 'Степан' },
                            {id: 4, lastName: 'Олегов', firstName: 'Олег', middleName:  'Олегович'},
                            {id: 5, lastName: 'Сергеев', firstName: 'Сергей', middleName:  'Сергеевич'}
                        ]}
                        onItemClick={(id) => console.log(id)}
                    />
                    <Button text = "Добавить сотрудника" onClick={createEmployeeHandler}  className="dep-page__add-user-btn" />
                </div>
                <div>

                    <Dialog title = {UserActionMode !== 'edit' ? 'Добавить сотрудника' : 'Изменить сотрудника'}
                        open = {showEmployeeDialog}
                        onSave = {() => {}}
                        onCancel= {() => setShowEmployeeDialog(false)}
                    >
                    </Dialog>

                    <div>
                        <span>ФИО</span>
                        <div>*</div>
                    </div>
                    <div>
                        <div>Личный данные</div>
                        <div>Данные о работе</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}