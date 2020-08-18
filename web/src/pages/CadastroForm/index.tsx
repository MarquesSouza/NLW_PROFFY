import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css';
import Banner from '../../components/Banner';
import Input from '../../components/Input';
import Button from '../../components/Button';

import backIcon from '../../assets/images/icons/back.svg';

function CadastroForm(){
    return (
        <div id="page-cadastro-container" className="container">
            <Banner />
            <div className="form-container">
            <div className="header-container">
                     <Link to="/login">
                         <img src={backIcon} alt="Voltar"/>
                     </Link>
            </div>
                <form>
                    <h2>Cadastro</h2>
                    <label className="subtitulo">
                        Preencha os dados abaixo para começar.
                    </label>
                    <fieldset className="login-block">
                        <Input name="name" label="Nome"/>
                        <Input name="seconde-name" label="Sobrenome"/>
                        <Input name="email" label="E-mail"/>
                        <Input name="password" label="Senha" password={true} />
                    </fieldset>
                        <Button >Concluir cadastro</Button>
                </form>
                </div>
              
        
        </div>
         
    );
}

export default CadastroForm;