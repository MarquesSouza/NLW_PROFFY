import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css';
import Banner from '../../components/Banner';
import Input from '../../components/Input';
import Button from '../../components/Button';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function LoginForm(){
    return (
        <div id="page-login-container" className="container">
            <Banner />
            <div className="form-container">
                <form>
                    <h2>Fazer login</h2>
                    <fieldset className="login-block">
                        <Input name="email" label="E-mail"/>
                        <Input name="senha" label="Senha" password={true} />
                    </fieldset>
                    <div className="option-container">
                            <div className="checkbox-block">
                                <input type="checkbox" className="checkbox"/>
                                <label className="label-checkbox">Lembrar-me</label>
                            </div>
                             <Link to="/recover-password" className="RecoverPassword"> Esqueci minha senha </Link>
                                
                    </div>
                        <Button >Entrar</Button>
                </form>
                <div className="footer-block">
                        <div className="cadastro-block">
                            <label htmlFor="" className="cadastro-label">
                            Não tem cadastro?
                            <br/>
                            </label>
                        
                            <Link to="/cadastro"className="cadastro-link">Cadastre-se</Link>
                        </div>
                        <div className="messagem-block">
                        <label  className="messagem">
                            E de graça {'   '}
                            <img src={purpleHeartIcon} alt="Coração Roxo"/>
                        </label>
                        </div>
                    </div> 
               </div>
              
        
        </div>
         
    );
}

export default LoginForm;