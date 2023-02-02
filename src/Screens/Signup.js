import React, { useState,useContext } from 'react';
import SignupComponent from '../Components/SignupComponent';
import {checkFirstName,checkPhone,checkMail,checkPass} from '../Utils/validation';
import {signUp} from '../Utils/requests';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthLoginContext } from '../Context/AuthLoginContext';
import { Alert } from 'react-native';

const Signup = () => {
  const {setWitched} = useContext(AuthLoginContext);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [indicate,setIndicator] = useState('no');

  const updateFirstName = (val)=>{
    setFirstName(val)
  }

  const updateLastName = (val)=>{
    setLastName(val)
  }

  const updatePhone = (val)=>{
    setPhone(val)
  }

  const updateEmail = (val)=>{
    setEmail(val)
  }

  const updatePass = (val)=>{
    setPass(val)
  }

  const valid = ()=>{
    const fnameErr = checkFirstName(first_name);
    const lnameErr = checkFirstName(last_name);
    const phoneErr = checkPhone(phone);
    const emailErr = checkMail(email);
    const passErr = checkPass(pass);

    if(fnameErr || lnameErr || phoneErr || emailErr || passErr){
      return 'err';
    }else{
      return 'ok';
    }
  }

  const SignUp = async()=>{
    const isValid = valid();
    setIndicator('yes');
    if(isValid == 'err'){
      setIndicator('no');
      Alert.alert('OOPS', 'One or more fields failed validation please reconfirm inputs', [
        {
          text: 'Ok',
          onPress: console.log('pressed ok'),
        
        },
        
      ]);
    }else{
      const data = {
        first_name:first_name,
        last_name:last_name,
        phone:phone,
        email:email,
        pass:pass,
        role: 'Admin'
      }

      const res = await signUp(data);
      if(res.msg == 'registration okay'){
        setIndicator('no');
        await AsyncStorage.setItem('userToken',res.token);
        const rand = Math.random();
        setWitched(rand);
      }else{
        setIndicator('no');
        Alert.alert('OOPS', 'Unable to complete operation at the moment please try again later', [
          {
            text: 'Ok',
            onPress: console.log('pressed ok'),
          
          },
          
        ]);
      }
    }
  }
  return (
    <SignupComponent 
      updateEmail={updateEmail}
      updateFirstName={updateFirstName}
      updateLastName={updateLastName}
      updatePass={updatePass}
      updatePhone={updatePhone}
      onpress={SignUp}
      indicate={indicate}
    />
  )
}

export default Signup;