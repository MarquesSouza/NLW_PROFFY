import React, { InputHTMLAttributes,  FormEvent,HtmlHTMLAttributes, useState } from 'react';
import warningIcon from '../../assets/images/icons/warning.svg';
   
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name:string;
    password?:boolean;
}

const Input: React.FC<InputProps>= ({name,password, ...rest})=>{
    const [isVisiblePassword,setIsVisiblePassword]=useState(password)
    
    function handleToggleVisiblePassword(){
        setIsVisiblePassword(!isVisiblePassword)
    }
    return(
        <div className="input-block">
           <input type={isVisiblePassword?"password":"text"} id={name} {...rest} />
           
        </div>
    )
}
export default Input;