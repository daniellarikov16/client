import {FC, use, useState} from 'react';
import { TextField } from '../../components';
import { Button } from '../../components';
import { WidgetLayout } from '../../components/layots';
import './registrationPageStyles.scss';
import { useNavigate } from 'react-router-dom';
import { RoutesPaths } from '../../constants/commonConstants';


type FormFieldsNames = 'login' | 'password' | 'repeatePassword' | 'lastName' | 'firstName' | 'midName';

interface RegistrationPage{
    login: string;
    password: string;
    repeatePassword: string;
    lastName: string;
    firstName: string;
    midName?: string;
}


export const RegistrationPage : FC = () => {
    const[formFields, setFormFields] = useState<RegistrationPage>();
    const navigate = useNavigate();

    const changeFieldValue = (value: string | undefined, fieldName: FormFieldsNames) => {
        setFormFields(prev => {
            return {
                ...prev,
                [fieldName]: value,
            } as RegistrationPage;
        })
    };
    const toLoginHandler = ()=>{
            navigate(RoutesPaths.Login);
        }


    return (
        <WidgetLayout>
            <div className='reg-page__form'>
                <h3 className='reg-page__title'>Вход</h3>
                <div className='reg-page__fields'>
                    <TextField lableText = "Логин" value = {formFields?.login} type='text' onChange={(value) => changeFieldValue(value, 'login')}/>
                    <TextField lableText ="Пароль" value = {formFields?.password} type = "password" onChange={(value) => changeFieldValue(value, 'password')}/>
                    <TextField lableText ="Повторите пароль" value = {formFields?.repeatePassword} type = "password" onChange={(value) => changeFieldValue(value, 'repeatePassword')}/>
                    <TextField lableText ="Имя" value = {formFields?.firstName} type = "text" onChange={(value) => changeFieldValue(value, 'firstName')}/>
                    <TextField lableText ="Фамилия" value = {formFields?.lastName} type = "text" onChange={(value) => changeFieldValue(value, 'lastName')}/>
                    <TextField lableText ="Отчество" value = {formFields?.midName} type = "text" onChange={(value) => changeFieldValue(value, 'midName')}/>
                </div>
                <div className='reg-page__actions'>
                    <Button text = 'Зарегистрироваться' onClick={()=>{}} type='primary' />
                        <Button text = 'Войти' onClick={toLoginHandler} type='secondary' />
                    
                </div>
                
            </div>
        </WidgetLayout>
    );
}