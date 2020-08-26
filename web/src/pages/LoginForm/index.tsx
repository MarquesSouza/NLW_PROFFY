import React, { FormEvent, useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom'
import './styles.css';
import Banner from '../../components/Banner';
import Input from '../../components/Input';
import Button from '../../components/Button';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function LoginForm(){
    //const history=useHistory();
    const [email,setEmail]=useState('');
    const [senha,setSenha]=useState('');
    const [buttonDisabled,setButtonDisabled]=useState(true)
    useEffect(()=>{
        if((email!=="")&&(senha!=="")){
            if(email!==""||senha!==""){
                setButtonDisabled(false);
            }else{
                setButtonDisabled(true);
            }
        }else{
            setButtonDisabled(true);
        }   
        console.log(email,senha,buttonDisabled)    
    },[email,senha])
    function handleLogin(e:FormEvent){
        e.preventDefault();
        console.log({email,senha});
    }
    
    return (
        <div id="page-login-container" className="container">
            <Banner />
            <div className="form-container">
                <form onSubmit={handleLogin}>
                    <h2>Fazer login</h2>
                    <fieldset className="login-block">
                        <Input 
                            name="email" 
                            label="E-mail"
                            value={email}
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                            />
                        <Input 
                            name="senha" 
                            label="Senha" 
                            password={true} 
                            onChange={(e)=>{
                                setSenha(e.target.value)}}
                            />
                    </fieldset>
                    <div className="option-container">
                            <div className="checkbox-block">
                                <input type="checkbox" className="checkbox"/>
                                <span className="checkmark"></span>
                               <label className="label-checkbox">Lembrar-me</label>
                            </div>
                             <Link to="/recover-password" className="RecoverPassword"> Esqueci minha senha </Link>
                                
                    </div>
                                                  
                        <Button type="submit" disabled>Entrar</Button>
                        
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