import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import LoginForm from './pages/LoginForm';
import RecoverPassword from './pages/RecoverPassword';
import CadastroForm from './pages/CadastroForm';
import SucessPage from './pages/SucessPage';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/recover-password" component={RecoverPassword} />
            <Route path="/sucesso" component={SucessPage} />
        </BrowserRouter>
    )
}
export default Routes;