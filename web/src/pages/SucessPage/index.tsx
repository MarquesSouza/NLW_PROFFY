import React from 'react';
import checkIcon from '../../assets/images/icons/success-check-icon.svg';
import background from '../../assets/images/success-background.svg';
import Button from '../../components/Button';
import './styles.css';

function SucessPage(){
    function handleButtonRedirect(){
        
    }
    return(
        <div id="sucess-container" className="container">
            <img src={background} className="background-image"/>
            
            <div className="sucess-context">
         
            <img src={checkIcon} className="check-icon-image"/>
            <h1>Cadastro Concluido</h1>
            <span>Texto fonte 2</span>
            <Button onClick={handleButtonRedirect}>Fazer Login</Button>
            </div>
        </div>
    )   
}   
export default SucessPage;