import React,{useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import './styles.css';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import InputForm from '../../components/InputForm';


function TeacherForm(){
    const history= useHistory();
    const [name,setName]=useState('');
    const [avatar,setAvatar]=useState('');
    const [whatsapp,setWhatsapp]=useState('');
    const [bio,setBio]=useState('');
    const [subject,setSubject]=useState('');
    const [cost,setCost]=useState('');
    
    const [scheduleItems,setScheduleItems]=useState([
        { week_day:0, from:'', to:''}
    ]);
    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            { week_day:0, from:'', to:''}
        ])
    }
    function setScheduleItemValue(position:number,field:string,value:string){
       const updateScheduleItems = scheduleItems.map((scheduleItems,index)=>{
           if(position==index){
               return{...scheduleItems,[field]:value};
           }else{
               return scheduleItems
           }
       }) 
       setScheduleItems(updateScheduleItems);
    }
    function handleCreateClass(e:FormEvent){
        e.preventDefault();
        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule:scheduleItems
        }).then(()=>{
            alert('Cadastro realizado com Sucesso')
            history.push('/');
        }).catch(()=>{
            alert('Erro no cadastro!')
        })
       
        
    }
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrivel que você qier dar aulas."
                description="O primerio passo é preencher esse formulário de inscrição"
            />
            <main>
                <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Seus Dados</legend>
                    <InputForm
                        name="name"
                        label="Nome Completo"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                        />
                    <InputForm 
                        name="avatar" 
                        label="Avatar"
                        value={avatar}
                        onChange={(e)=>{setAvatar(e.target.value)}}
                        />
                    <InputForm
                        name="whatsapp" 
                        label="Whatsapp"
                        value={whatsapp}
                        onChange={(e)=>{setWhatsapp(e.target.value)}}
                        />
                    <Textarea 
                        name="bio" 
                        label="Biografia"
                        value={bio}
                        onChange={(e)=>{setBio(e.target.value)}}
                        />
                </fieldset>
                <fieldset>
                    <legend>Seus Aula</legend>
                    <Select name="subject" label="Matéria"
                        value={subject}
                        onChange={(e)=>{setSubject(e.target.value)}}
                        options={[
                            {value:'Artes',label:'Artes'},
                            {value:'Programação',label:'Programação'},
                            {value:'Portugues',label:'Portugues'},
                            {value:'Quimica',label:'Quimica'}
                        ]}
                    />
                    <InputForm 
                        name="cost" 
                        label="Custo da sua hora por aula"
                        value={cost}
                        onChange={(e)=>{setCost(e.target.value)}}/>
                    
                </fieldset>
                <fieldset>
                    <legend>Horários disponivies
                    <button type="button" onClick={addNewScheduleItem}>
                        + Novo Horário
                    </button>
                    </legend>
                    {scheduleItems.map((scheduleItem,index)=>{
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                            <Select 
                                name="week_day" 
                                label="Dia da semana"
                                value={scheduleItem.week_day}
                                onChange={e=>setScheduleItemValue(index,'week_day',e.target.value)}
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
                            <InputForm 
                                name="from" 
                                label="Das" 
                                type="time"
                                value={scheduleItem.from}
                                onChange={e=>setScheduleItemValue(index,'from',e.target.value)}
                                />
                            <InputForm 
                                name="to" 
                                label="Até" 
                                type="time"
                                value={scheduleItem.to}
                                onChange={e=>setScheduleItemValue(index,'to',e.target.value)}
                                />
                            </div>
                        )
                    })}
                </fieldset>
                
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante ! <br/>
                    </p>
                    <button type="submit">
                        Salvar Cadastro
                    </button>
                </footer>
                </form>
            </main>
        </div>
        )
}
export default TeacherForm;