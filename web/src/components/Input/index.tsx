import React, { InputHTMLAttributes, HtmlHTMLAttributes, useState } from 'react';
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
            {password?(<input type="password" id={name} {...rest}/>
            ):(
            <input type="text" id={name} {...rest}/>
            )}
            
        </div>
    )
}
export default Input;