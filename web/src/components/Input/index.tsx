import React, { InputHTMLAttributes,  FormEvent,HtmlHTMLAttributes, useState, Children } from 'react';
import eyesIcon from '../../assets/images/icons/eyes.svg';
import eyesBlockIcon from '../../assets/images/icons/eyes-block.svg';
   
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
            {password&&(
                isVisiblePassword
                ?
                <button className="Password-Container"onClick={handleToggleVisiblePassword} type="button">
                    <img src={eyesBlockIcon}/>
                </button>
                :
                <button className="Password-Container"onClick={handleToggleVisiblePassword} type="button">
                    <img src={eyesIcon}/>
                </button>
            )}
            
        </div>
    )
}
export default Input;