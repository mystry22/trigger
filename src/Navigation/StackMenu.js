import React,{useEffect,useContext} from 'react';
import {AuthLoginContext} from '../Context/AuthLoginContext';
import NotLoggedIn from './NotLoggedIn';
import Loggedin from './LoggedIn';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StackMenu = () => {
    const {switched,setWitched} = useContext(AuthLoginContext);

    useEffect(()=>{
        checkLogin();
    },[])

    const checkLogin = async()=>{
        const token = await AsyncStorage.getItem('userToken');
        if(token){
            setWitched('avail');
        }else{
            setWitched('notavail');
        }
    }
  return (
    <>
        {switched === 'avail' ? <Loggedin /> : <NotLoggedIn /> }
    </>
  )
}

export default StackMenu