import React from 'react';
import checkIcon from '../../assets/images/icons/success-check-icon.svg';
import Button from '../../components/Button';
import './styles.css';
import { Link, Redirect } from 'react-router-dom';
interface SuccessProps {
    title:string;
    text:string;
    linktext:string;
    link:string;
}
const SucessPage:React.FC<SuccessProps> = ({title,text,link,linktext})=>{
   
    return(
        <div id="sucess-container" className="container">
            
            <div className="sucess-context">
         
            <img src={checkIcon} className="check-icon-image"/>
            <h1>{title}</h1>
            <p>{text}</p>
            <Link to={link}>
                <Button >{linktext}</Button>
            </Link>

            </div>
            
        </div>
    )   
}   
export default SucessPage;