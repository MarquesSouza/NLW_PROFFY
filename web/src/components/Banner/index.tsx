import React from 'react';

import './styles.css';
import Logo from '../Logo';
import banner from '../../assets/images/success-background.svg'

function Banner(){
    return (
        <div className="banner-container">
            <img 
                className="banner-image"
                src={banner} 
                alt="Banner" 
                
            /> 
            <Logo />
            
        </div>
    );
}
export default Banner;