import { FC, useEffect, useState } from "react";
import { Layout } from "../../components/layots";
import './departmentsPageStyles.scss'
import { Dialog, DropDown, TextField } from "../../components";
import { EmployeesList } from "../../components";
import { Button } from "../../components";
import { Employee, Department } from '../../types/models'
import { DropDownItem } from "../../components/dropDown/DropDownProps";

const fakeEmployeesData = [
    {id: 1, lastName: 'Иванов', firstName: 'Иван', middleName:  'Иванович', birthDate: new Date(). toISOString(), email: "ivan@mail.ru", phoneNumber: '8-800-888-88-88'},
    {id: 2, lastName: 'Петров', firstName: 'Сергей', middleName:  'Дмитриевич',  birthDate: new Date(). toISOString(), email: "ivan@mail.ru", phoneNumber: '8-800-888-88-88'},
    {id: 3, lastName: 'Степанов', firstName: 'Степан',  birthDate: new Date(). toISOString(), email: "ivan@mail.ru", phoneNumber: '8-800-888-88-88' },
    {id: 4, lastName: 'Олегов', firstName: 'Олег', middleName:  'Олегович',  birthDate: new Date(). toISOString(), email: "ivan@mail.ru", phoneNumber: '8-800-888-88-88'},
    {id: 5, lastName: 'Сергеев', firstName: 'Сергей', middleName:  'Сергеевич',  birthDate: new Date(). toISOString(), email: "ivan@mail.ru", phoneNumber: '8-800-888-88-88'}
] as Array<Employee>;

const fakeDepartmentsData = [
    {id: 1, name: "Отдел 1", employees: []},
    {id: 2, name: "Отдел 2", employees: fakeEmployeesData},
    {id: 3, name: "Отдел 3", employees: []}
] as Array<Department>;

export const DepartmentsPage: FC = () => {
    const [employeesData, setEmployeesData] = useState<Array<Employee>>([]);
    const [departmentsData, setDepartmentsData] = useState<Array<Department>>([]);
    const [selectedDepartmentId, setSelectedDepartmentId] = useState <number>();
    const [selectedEmloyeeId, setSelectedEmployeeId] = useState<number>();
    const [showEmployeeDialog, setShowEmployeeDialog] = useState (false);
    const [UserActionMode, setUserActionMode] = useState<'create' | 'edit'>('create');
    const [UserToEdit, setUserToEdit] = useState(0);
    
    const [lastName, setLastName] = useState ('');
    const [firstName, setFirstName] = useState ('');
    const [midleName, setMidleName] = useState ('');

    useEffect(() => {
        setEmployeesData(fakeEmployeesData);
    }, []);

    useEffect(() => {
        setTimeout(()=>{
            setDepartmentsData(fakeDepartmentsData);
            if (Array.isArray(fakeDepartmentsData) && fakeDepartmentsData.length){
                setEmployeesData(fakeDepartmentsData[0].employees)
            }
        }, 500)
    }, []);

    useEffect(() => {
        const selectedDepartment = departmentsData.find(d => d.id === selectedDepartmentId); 
        setEmployeesData(selectedDepartment ? selectedDepartment.employees : []); 
        setSelectedEmployeeId(undefined);  
    }, [departmentsData, selectedDepartmentId])

    useEffect (() => {
        clearEmployeeDialogFields();
        if (UserActionMode === "edit") {
            const employee = UserActionMode === 'edit'
                ? employeesData.find(e => e.id === UserToEdit)
                : undefined;
            
            setLastName(employee?.lastName ?? '');
            setFirstName(employee?.firstName ?? '');
            setMidleName(employee?.middleName ?? '');
        }
    },[employeesData, UserActionMode, UserToEdit]);

    const clearEmployeeDialogFields = () =>{
        setLastName ('');
        setFirstName('');
        setMidleName('');
    }

    const createEmployeeHandler = () => {
        setUserActionMode('create');
        setShowEmployeeDialog(true);
    }

    const editEmployeeHandler = (id: number)=>{
        setUserActionMode('edit'); 
        setUserToEdit(id);
        setShowEmployeeDialog(true);
    }
    
    const userDialogContentRender = () => {
        return (
            <>
                <TextField lableText="Фамилия" value={lastName} onChange={(val) => setLastName(val)}/>
                <TextField lableText="Имя" value={firstName} onChange={(val) => setFirstName(val)}/>
                <TextField lableText="Отчество" value={midleName} onChange={(val) => setMidleName(val)}/>
            </>
        )
    }

    const closeEmployeeDialogHandler = () =>{
        setShowEmployeeDialog(false);
        clearEmployeeDialogFields();
    }

    const departmentChangedHandler = (id?: string) => {
            const _id:  number | undefined = !id ? undefined: +id;
            setSelectedDepartmentId(_id)
    }

    const onEmployeeSelectedHandler = (id: number) => {
        setSelectedEmployeeId(id);
    }

    return(
        <Layout>
            <Dialog title={UserActionMode != 'edit' ? 'Добавить сотрудника' : 'Изменить сотрудника'}
                open = {showEmployeeDialog}
                onSave = {() => {}}
                onCancel={closeEmployeeDialogHandler}
            >
                {userDialogContentRender()}
            </Dialog>


            <div className="dep-page">
                <div className="dep-page__users-list-container">
                    <DropDown items={departmentsData.map(dd => {
                        return {
                            text: dd.name,
                            value: dd.id.toString(),
                        } as DropDownItem;
                    })} 
                        label = "Отделы:"
                        selectedChanged = {(val) => departmentChangedHandler(val)}
                    />
                    <EmployeesList employeesList={employeesData}
                        onItemClick={(id) => onEmployeeSelectedHandler(id)}
                        onItemDelete={(id) => console.log("delete", id)}
                        onItemEdit={editEmployeeHandler}
                    />
                    <Button text = "Добавить сотрудника" onClick={createEmployeeHandler}  className="dep-page__add-user-btn" />
                </div>
                <div>

                    <Dialog title = {UserActionMode !== 'edit' ? 'Добавить сотрудника' : 'Изменить сотрудника'}
                        open = {showEmployeeDialog}
                        onSave = {() => {}}
                        onCancel= {closeEmployeeDialogHandler}
                    >
                        {userDialogContentRender()}
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