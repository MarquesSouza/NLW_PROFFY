import React from 'react';
import './styles.css';
import Banner from '../../components/Banner';
function LoginForm(){
    return (
        <div id="page-login-container" className="container">
            <Banner />
            <main>
                <form>
                   
                    <fieldset>
                        <legend>Fazer Login</legend>
                        
                    </fieldset>
                </form>
            </main>
        </div>
    );
}

export default LoginForm;