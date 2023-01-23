import React from 'react';
import OnboardComponent from '../Components/OnboardComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Onboard = () => {
  const navigation = useNavigation();
  const setBoarded = async()=>{
    await AsyncStorage.setItem('boarded','boarded');
    navigation.navigate('Login');
}
  return (
    <OnboardComponent onpress={setBoarded} />
  )
}

export default Onboard