import React, { InputHTMLAttributes, HtmlHTMLAttributes } from 'react';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string;
    name:string;

}

const InputForm: React.FC<InputProps>= ({label,name, ...rest})=>{
    return(
        <div className="input-block-form">
            <label htmlFor="subject">{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
    )
}
export default InputForm;