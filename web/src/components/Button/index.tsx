import React, { InputHTMLAttributes, Children } from 'react';

import './styles.css';
interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement>{
  
}

const Button:React.FC<ButtonProps>=(...rest)=>{
    const children=rest.map(props=>{return props.children})
    return (
        
        <button className="button-component" {...rest}>
         {children}
        </button>
        
    );
}
export default Button;