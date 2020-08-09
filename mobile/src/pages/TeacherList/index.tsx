import React, { useState} from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList(){
    const [isFiltersVisible,setIsFiltersVisible]=useState(false);
    const [teachers,setTeachers]=useState([]);
    const [favorites,setFavorites]=useState<number[]>([]);
    const [subject,setSubject]=useState('');
    const [week_day,setWeekDay]=useState('');
    const [time,setTime]=useState('');
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response=>{
            if(response){
                const favoritedTeachers=JSON.parse(response)
                const favoritedTeachersIds= favoritedTeachers.map(
                    (teacher:Teacher) =>{
                        return teacher.id;
                    }
                )
                setFavorites(favoritedTeachersIds);
            }
        })
    }
    useFocusEffect(()=>{
        loadFavorites();
    })
    function handlerToggleFiltersVisible(){
        setIsFiltersVisible(!isFiltersVisible);
    }
    async function handleFiltersSubmit(){
        loadFavorites();
      const response = await api.get('classes',{
          params:{
            subject,
            week_day,
            time,
          }
      });
      setIsFiltersVisible(false);
      setTeachers(response.data);
    }
    return (
    <View style={styles.container}>
        <PageHeader 
            title="Proffys Disponiveis"
            headerRight={(
                <BorderlessButton>
                    <Feather 
                        name="filter" 
                        size={20} 
                        color="#fff"
                        onPress={handlerToggleFiltersVisible}
                        />
                </BorderlessButton>
            )}
        >
            { isFiltersVisible &&(
            <View style={styles.searchForm}>
                <Text style={styles.label}>Materia</Text>
                <TextInput
                    value={subject}
                    onChangeText={text=>setSubject(text)}
                    style={styles.input}
                    placeholder="Qual a materia?"
                    placeholderTextColor="#c1bccc"
                />
                <View style={styles.inputGroup}>
                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Dia da Semana</Text>
                        <TextInput
                            value={week_day}
                            onChangeText={text=>setWeekDay(text)} 
                            style={styles.input}
                            placeholder="Qual o dia?"
                            placeholderTextColor="#c1bccc"
                        />
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Horario</Text>
                        <TextInput
                            value={time}
                            onChangeText={text=>setTime(text)} 
                            style={styles.input}
                            placeholder="Qual Horario?"
                            placeholderTextColor="#c1bccc"
                        />
                    </View>
                </View>
                <RectButton 
                    onPress={handleFiltersSubmit}
                    style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Filtrar</Text>
                </RectButton>
            </View>
            )}
        </PageHeader>

        <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal:16,
                paddingBottom:16,
            }}
        >
           {teachers.map((teacher:Teacher)=>{
           return <TeacherItem 
           key={teacher.id} 
           teacher={teacher}
           favorited={favorites.includes(teacher.id)}
           />})} 
        </ScrollView>
    </View>)
}
export default TeacherList;