import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css';
import Banner from '../../components/Banner';
import Input from '../../components/Input';
function LoginForm(){
    return (
        <div id="page-login-container" className="container">
            <Banner />
            <div className="form-container">
            <main>
                <form>
                    <h2>Fazer login</h2>
                    <fieldset>
                        <Input name="email" placeholder="E-mail"/>
                        <Input name="senha" placeholder="Senha" password={true} />
                    </fieldset>
                    <fieldset>
                        <div className="option-container">
                            <div className="checkbox-block">
                                <input type="checkbox" className="checkbox"/>
                                <label >Lembrar-me</label>
                            </div>
                             <Link to="/recoverpassword" className="RecoverPassword"> Esqueci minha senha </Link>
                             <button type="submit">Entrar</button>
                        </div>
                    </fieldset> 
                </form>
                <footer>
                    <div className="footer-block">
                        <div className="cadastro-block">
                            <label htmlFor="" className="cadastro-label">
                                Não tem cadastro?
                            </label>
                            <Link to="/cadastro"className="cadastro-link">Cadastre-se</Link>
                        </div>
                        <label  className="messagem">
                            E de graça
                            <img src="" alt=""/>
                        </label>
                    </div>
                </footer>
            </main>
            </div>
        </div>
    );
}

export default LoginForm;