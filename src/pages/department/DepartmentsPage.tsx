import { FC } from "react";
import { Layout } from "../../components/layots";
import './departmentsPageStyles.scss'
import { Dialog, DropDown } from "../../components";
import { EmployeesList } from "../../components";
import { Button } from "../../components";


export const DepartmentsPage: FC = () => {
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
                    <Button text = "Добавить сотрудника" className="dep-page__add-user-btn" />
                </div>
                <div>

                <Dialog title = 'Test dialog'>
                    <div>123123</div>
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