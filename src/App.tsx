import React from 'react';
import { LoginPage } from './pages';
import { RegistrationPage } from './pages/registration/registrationPage';
import { Route, Routes } from 'react-router-dom';

export const App : React.FC = ()=>{
  return (
    <Routes>
      <Route path={'/'} element = {<LoginPage />} />
      <Route path = {'registration'} element={<RegistrationPage />} />
      <Route path = {'*'} element = {<LoginPage />} />
    </Routes>
    );
};

export default App;
