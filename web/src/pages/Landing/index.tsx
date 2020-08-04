import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import stydyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

function Landing(){
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div id="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua Plataforma de estudos online.</h2>
                    <img 
                    src={landingImg} 
                    alt="Platamaforma de estudos" 
                    className="hero-image"/>
                    <div id="buttons-container">
                        <a href="" className="study">
                            <img src={stydyIcon} alt="Estudar"/>
                            Estudar
                        </a>
                        <a href="" className="give-classes">
                            <img src={giveClassesIcon} alt="Estudar"/>
                            Estudar
                        </a>
                    </div>
                    <span className="total-connections">
                        Total de 200 conexões ja realizadas 
                        <img src={purpleHeartIcon} alt="Coração Roxo"/>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Landing;