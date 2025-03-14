import {FC, useState} from 'react';
import { TextField } from '../../components';
import { Button } from '../../components';
import { WidgetLayout } from '../../components/layots';
import './loginPageSyle.scss';
import { Route, useNavigate } from 'react-router-dom';
import { RoutesPaths } from '../../constants/commonConstants';


export const LoginPage: FC = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const LoginChangedHandler = (value:string)=>{
            setLogin(value);
    }
    const PasswordChangedHandler = (value:string)=>{
        setPassword(value);
    }
    const loginHandler = ()=>{
        console.log({
            login,
            password
        });
    }
    const toRegistrationHandler = ()=>{
        navigate(RoutesPaths.Registration);
    }
    return (
        <WidgetLayout>
            <div className='login-page__form'>
                <h3 className='login-page__title'>Вход</h3>
                <div className='login-page__fields'>
                    <TextField lableText = "Логин" value = {login} type='text' onChange={LoginChangedHandler}/>
                    <TextField lableText ="Пароль" value = {password} type = "password" onChange={PasswordChangedHandler}/>
                </div>
                <div className='login-page__actions'>
                    <Button text = 'Войти' onClick={loginHandler} type='primary' />
                    <Button text = 'Зарегистрироваться' onClick={toRegistrationHandler} type='secondary' />
                </div>
                
            </div>
        </WidgetLayout>
    );
};