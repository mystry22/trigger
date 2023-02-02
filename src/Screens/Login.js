import React,{useContext, useState} from 'react';
import { Alert } from 'react-native';
import LoginComponent from '../Components/LoginComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {checkPass,checkMail} from '../Utils/validation';
import {signIn} from '../Utils/requests';
import { AuthLoginContext } from '../Context/AuthLoginContext';

const Login = () => {
  const {setWitched} = useContext(AuthLoginContext);
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const [indicate,setIndicator] = useState('no');


  const updateEmail = (val)=>{
    setEmail(val)
  }

  const updatePass = (val)=>{
    setPass(val)
  }

  const valid = ()=>{
    const emailErr = checkMail(email);
    const passErr = checkPass(pass);
    console.log(emailErr + ' ' + passErr)
    if(emailErr || passErr){
      return 'err';
    }else{
      return 'ok';
    }
  }


  const login = async()=>{
    const isValid = valid();
    setIndicator('yes');
    if(isValid == 'err'){
      setIndicator('no');
      Alert.alert('OOPS', 'Email or Password failed validation, please note password must not be less than 6 Chars', [
        {
          text: 'Ok',
          onPress: console.log('pressed ok'),
        
        },
        
      ]);
    }else{
      
      const data = {
        email:email,
        pass:pass
      }

      const res = await signIn(data);
      if(res.msg == 'login success'){
        setIndicator('no');
        const rand  = Math.random();
        await AsyncStorage.setItem('userToken',res.token);
        setWitched(rand);
      }else{
        setIndicator('no');
        Alert.alert('OOPS', 'Wrong login information, please check user details and try again', [
          {
            text: 'Ok',
            onPress: console.log('pressed ok'),
          
          },
          
        ]);
      }
    }
  }
  return (
    <LoginComponent
      onpress={login}
      updateEmail={updateEmail}
      updatePass={updatePass}
      indicate={indicate}
    />
  )
}

export default Login;