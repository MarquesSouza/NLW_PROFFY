import React, { InputHTMLAttributes, Children } from 'react';

import './styles.css';
interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement>{
    
}

const Button:React.FC<ButtonProps>=(props,...rest)=>{
    return (
        <button className="button-component" {...rest} >
            {props.children}
        </button>
    );
}
export default Button;