import React, { InputHTMLAttributes,  FormEvent,HtmlHTMLAttributes, useState } from 'react';
import warningIcon from '../../assets/images/icons/warning.svg';
   
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string;
    name:string;
    password?:boolean;
}

const Input: React.FC<InputProps>= ({label,name,password, ...rest})=>{
    const [isVisiblePassword,setIsVisiblePassword]=useState(password)
    
    function handleToggleVisiblePassword(){
        setIsVisiblePassword(!isVisiblePassword)
    }
    return(
        <div className="input-block">
            <label htmlFor="subject">{label}</label>
            <input type={password?"password":"text"} id={name} {...rest} />
           
        </div>
    )
}
export default Input;