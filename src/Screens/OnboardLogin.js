import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from "../Utils/Loader";
import Onboard from '../Screens/Onboard';
import Signin from '../Screens/Login';

const OnboardLogin = () => {

    const [load,setLoad] = useState('init');

    useEffect(()=>{
        getBoard();
    },[])
    

    const getBoard =async()=>{
        const token = await AsyncStorage.getItem('boarded');
        if(token){
            setLoad('true');
        }else{
            setLoad('false');
        }
    }

    const evaluate =()=>{
        
        if(load === 'init'){
            return (<Loader />)
        }else{
            return <>{ load === 'false' ? <Onboard />:  <Signin /> }</>
        }
    }
  return (

    evaluate()

  )
}

export default OnboardLogin