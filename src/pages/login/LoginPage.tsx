import {FC, useState} from 'react';
import { TextField } from '../../components';
import { Button } from '../../components';


export const LoginPage: FC = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

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
    return (
        <>
            <TextField lableText = "Логин" value = {login} onChange={LoginChangedHandler}/>
            <TextField lableText ="Пароль" value = {password} type = "password" onChange={PasswordChangedHandler}/>
            <Button text = 'Войти' onClick={loginHandler}/>
        </>
    );
};