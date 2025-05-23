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
    {id: 2, lastName: 'Петров', firstName: 'Сергей', middleName:  'Дмитриевич',  birthDate: new Date(). toISOString(), email: "ivan@mail.ru", phoneNumber: '8-800-888-88-88',
        educations: [{
            id: 1,
            description: "Системный администратор",
            title: "ВГПТТ №36",
        },{
            id: 2,
            description: "Информационные системы и технологии",
            title: "ФГОУ ВГТУ",
        },{
            id: 3,
            description: "Курсы повышения квалификации",
            title: "Яндекс практикум",
        }],
        workExpirience: [{
            id:1,
            workedYears: 3,
            description: "ООО ТЕХИНФОРМ сервис"
        },{
            id:2,
            workedYears: 2,
            description: "Data art"
        },{
            id:3,
            workedYears: 4,
            description: "Рексофт"
        }]
    }
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

    const [birthDate, setBirthDate] = useState ('');
    const [email, setEmail] = useState ('');
    const [phoneNumber, setphoneNumber] = useState ('');

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

            setBirthDate(employee?.birthDate ?? '');
            setphoneNumber(employee?.phoneNumber ?? '');
            setEmail(employee?.email ?? '');
        }
    },[employeesData, UserActionMode, UserToEdit]);

    const clearEmployeeDialogFields = () =>{
        setLastName ('');
        setFirstName('');
        setMidleName('');
        setBirthDate('');
        setEmail('');
        setphoneNumber('');
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

                <TextField lableText="Дата рождения" value={birthDate} onChange={(val) => setBirthDate(val)}/>
                <TextField lableText="Email" value={email} onChange={(val) => setEmail(val)}/>
                <TextField lableText="Телефон" value={phoneNumber} onChange={(val) => setphoneNumber(val)}/>
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