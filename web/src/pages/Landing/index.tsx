import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import landingImg from '../../assets/images/landing.svg';
import stydyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import api from '../../services/api';
import Logo from '../../components/Logo';

function Landing(){
    const [totalConnections, setTotalConnections]= useState(0);
    useEffect(()=>{
        api.get('connections').then(response=>{
            const {total}= response.data;
            setTotalConnections(total);
        })
    },[])
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="page-header">
                <Logo />
                <div className="hero-image">
                <img 
                    src={landingImg} 
                    alt="Platamaforma de estudos" 
                    />
                </div>
                
                </div>
                <footer>
                <div className="buttons-container">
                        <Link to="/study" className="study">
                            <img src={stydyIcon} alt="Estudar"/>
                            Estudar
                        </Link>
                        <Link to="/give-classes" className="give-classes">
                            <img src={giveClassesIcon} alt="Dar Aulas"/>
                            Dar Aulas
                        </Link>
                </div>
                    <div className="message-container">
                    <h2 className="message-styles-light">
                        Seja bem-vindo 
                    </h2>
                    <h2 className="message-styles-dark">
                        O que deseja fazer?
                    </h2>
                    </div>
                    <span className="total-connections">
                        Total de {totalConnections} conexões ja realizadas 
                        <img src={purpleHeartIcon} alt="Coração Roxo"/>
                    </span>
                </footer>
            </div>
            
        </div>
    )
}
export default Landing;