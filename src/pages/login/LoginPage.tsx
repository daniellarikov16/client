import {FC, useState} from 'react';
import { TextField } from '../../components/textField';

export const LoginPage: FC = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const LoginChangedHandler = (value:string)=>{
            setLogin(value);
    }
    const PasswordChangedHandler = (value:string)=>{
        setPassword(value);
    }
    return (
        <>
            <TextField lableText = "Логин" value = {login} onChange={LoginChangedHandler}/>
            <TextField lableText ="Пароль" value = {password} type = "password" onChange={PasswordChangedHandler}/>
        </>
    );
};