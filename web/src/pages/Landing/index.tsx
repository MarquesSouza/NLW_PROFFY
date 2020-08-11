import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import landingImg from '../../assets/images/landing.svg';
import stydyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

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
                <Logo />
                <img 
                    src={landingImg} 
                    alt="Platamaforma de estudos" 
                    className="hero-image"/>
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
                    <span className="total-connections">
                        Total de {totalConnections} conexões ja realizadas 
                        <img src={purpleHeartIcon} alt="Coração Roxo"/>
                    </span>
            </div>
            
        </div>
    )
}
export default Landing;