import React, { InputHTMLAttributes,  FormEvent,HtmlHTMLAttributes, useState, Children } from 'react';
import warningIcon from '../../assets/images/icons/warning.svg';
   
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string;
    name:string;
    password?:boolean;
}

const Input: React.FC<InputProps>= ({label,name,password,...rest})=>{
    const [isVisiblePassword,setIsVisiblePassword]=useState(password)
    
    function handleToggleVisiblePassword(){
        setIsVisiblePassword(!isVisiblePassword)
    }
    return(
        <div className="input-block">
            <input type={isVisiblePassword?"password":"text"} id={name} {...rest}/>
            <label>
                <span>{label}</span>
            </label>
           
        </div>
    )
}
export default Input;