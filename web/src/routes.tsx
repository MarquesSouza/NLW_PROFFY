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
            <Route path="/register" component={CadastroForm} />
            <Route path="/recover-sucess" render={(props)=>(
                <SucessPage 
                title="Redefinição Enviada!"
                text="Boa, agora é só verificar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos."
                link="/login"
                linktext="Voltar ao login"
                {...props}
                />
                )
            } />
            <Route path="/register-sucess" render={(props)=>(
                <SucessPage 
                title="Cadastro Concluido"
                text="Agora você faz parte da plataforma da Proffy. 
                Tenha uma ótima experiência."
                link="/login"
                linktext="Fazer login"
                {...props}
                />
                )
            } />
        </BrowserRouter>
    )
}
export default Routes;