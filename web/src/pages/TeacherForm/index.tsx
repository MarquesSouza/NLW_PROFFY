import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';

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
                    
                </fieldset>
                <fieldset>
                    <legend>Seus Dados</legend>
                    <Input name="name" label="Nome Completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="Whatsapp"/>
                    
                </fieldset>
            </main>
        </div>
        )
}
export default TeacherForm;