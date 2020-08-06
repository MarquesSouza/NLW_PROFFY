import React from 'react';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import './styles.css';


function TeacherForm(){

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrivel que você qier dar aulas."
                description="O primerio passo é preencher esse formulário de inscrição"
            />
            <main>
                <fieldset>
                    <legend>Seus Dados</legend>
                    <Input name="name" label="Nome Completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="Whatsapp"/>
                    <Textarea name="bio" label="Biografia"/>
                </fieldset>
                <fieldset>
                    <legend>Seus Aula</legend>
                    <Select name="subject" label="Matéria"
                        options={[
                            {value:'Artes',label:'Artes'},
                            {value:'Programação',label:'Programação'},
                            {value:'Portugues',label:'Portugues'},
                            {value:'Quimica',label:'Quimica'}
                        ]}
                    />
                    <Input name="cost" label="Custo da sua hora por aula"/>
                    
                </fieldset>
                <fieldset>
                    <legend>Horários disponivies
                    <button type="button">
                        + Novo Horário
                    </button>
                    </legend>
                    <div className="schedule-item">
                    <Select name="week_day" label="Dia da semana"
                        options={[
                            {value:'0',label:'Domingo'},
                            {value:'1',label:'Segunda'},
                            {value:'2',label:'Terça'},
                            {value:'3',label:'Quarta'},
                            {value:'4',label:'Quinta'},
                            {value:'5',label:'Sexta'},
                            {value:'6',label:'Sabado'}
                          
                        ]}
                    />
                    <Input name="from" label="Das" type="time"/>
                    <Input name="to" label="Até" type="time"/>
                    </div>
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante ! <br/>
                    </p>
                    <button type="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
        )
}
export default TeacherForm;