import React from 'react';
import './styles.css';
import Banner from '../../components/Banner';
import Input from '../../components/Input';
function LoginForm(){
    return (
        <div id="page-login-container" className="container">
            <Banner />
            <main>
                <form>
                   
                    <fieldset>
                        <legend>Fazer Login</legend>
                        <Input name="email" label="E-mail"/>
                        <Input name="senha" label="Senha" password={true} />
                    </fieldset>
                </form>
            </main>
        </div>
    );
}

export default LoginForm;