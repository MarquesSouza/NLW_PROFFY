import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css';
import Banner from '../../components/Banner';
import Input from '../../components/Input';
import Button from '../../components/Button';

import backIcon from '../../assets/images/icons/back.svg';

function RecoverPassword(){
    return (
        <div id="page-recover-container" className="container">
            <Banner />
            <div className="form-container">
            <div className="header-container">
                     <Link to="/login">
                         <img src={backIcon} alt="Voltar"/>
                     </Link>
            </div>
                <form>
                    <h2>Eita, esqueceu sua senha ?</h2>
                    <label className="subtitulo">
                        Não esquenta, vamos resolver esta situação (^.^)/
                    </label>
                    <fieldset className="login-block">
                        <Input name="email" placeholder="E-mail"/>
                    </fieldset>
                        <Button >Enviar</Button>
                </form>
                </div>
              
        
        </div>
         
    );
}

export default RecoverPassword;