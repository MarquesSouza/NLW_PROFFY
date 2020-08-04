import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'
function TeacherItem(){
 return(
    <article className="teacher-item">
    <header>
        <img src="https://avatars0.githubusercontent.com/u/23464588?s=460&u=534e2e94a794fb95ac878915b8b1e267651c6021&v=4" alt="Marques de Souza"/>
        <div>
            <strong>Marques de Souza</strong>
            <span>Quimica</span>
        </div>
    </header>
    <p>
        Entusiasta das melhores tecnologias da Quimica avançada.
        <br /> <br />
        No mundo da Quimica
    </p>
    <footer>
        <p>
            Preço/Hora
            <strong> R$ 100,00</strong>
        </p>
        <button type="button"><img src={whatsappIcon} alt="WhatsAppp"/>
        Entrar em contato</button>
        
    </footer>
</article>
 )   
}
export default TeacherItem;