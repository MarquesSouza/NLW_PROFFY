import React, { useEffect, useState } from 'react';
import { View,Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import {RectButton} from 'react-native-gesture-handler';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

function Landing(){
    const {navigate} = useNavigation();
    function handleNavigateToGiveClassesPage(){
        navigate('GiveClasses');
    }
    function handlerNavigateToStudyPages(){
        navigate('Study')
    }
    const [totalConnections, setTotalConnections]= useState(0);
    useEffect(()=>{
        api.get('connections').then(response=>{
            const {total}= response.data;
            setTotalConnections(total);
        })
    },[])
    return (
    <View style={styles.container}>
        <Image source={landingImg} style={styles.banner}/>
        <Text style={styles.title}>
            Seja bem-vindo, {'\n'}
            <Text style={styles.titleBold}>
                Oque deseja Fazer ?
            </Text>
        </Text>
        <View style={styles.buttonsContainer}>
           <RectButton 
                onPress={handlerNavigateToStudyPages}
                style={[styles.button,styles.buttonPrimary]}>
                <Image source={studyIcon}/>
                <Text style={styles.buttonText}>Estudar</Text>
            </RectButton> 
            <RectButton
                onPress={handleNavigateToGiveClassesPage} 
                style={[styles.button,styles.buttonSecondary]}>
                <Image source={giveClassesIcon}/>
                <Text style={styles.buttonText}>Dar Aulas</Text>
            </RectButton> 
        </View>
        <Text style={styles.totalConnections}>
            Total de {totalConnections} conexoes ja realizadas {' '}
            <Image source={heartIcon}/>
        </Text>
    </View>)
}
export default Landing;