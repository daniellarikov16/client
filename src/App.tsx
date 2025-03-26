import React from 'react';
import { LoginPage } from './pages';
import { RegistrationPage } from './pages/registration/registrationPage';
import { Route, Routes } from 'react-router-dom';
import { RoutesPaths } from './constants/commonConstants';
import { DepartmentsPage } from './pages/department';
import './styles/globalStyles.scss'

export const App : React.FC = ()=>{
  return (
    <Routes>
      <Route path={RoutesPaths.Login} element = {<LoginPage />} />
      <Route path = {RoutesPaths.Registration} element={<RegistrationPage />} />
      <Route path = {RoutesPaths.Departments} element = {<DepartmentsPage />} />
      <Route path = {'*'} element = {<LoginPage />} />
    </Routes>
    );
};

export default App;
