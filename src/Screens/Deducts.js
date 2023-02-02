import { View, Text } from 'react-native';
import React,{useState,useContext} from 'react';
import DeductComponent from '../Components/DeductComponent';
import { Alert } from 'react-native';
import {removefunds} from '../Utils/requests';
import {checkNumber,checkFirstName} from '../Utils/validation';
import {AuthLoginContext} from '../Context/AuthLoginContext';

const Deducts = () => {
  const [name,setName] = useState('');
  const [amt,setAmt] = useState('');
  const [indicate,setIndicator] = useState('no');
  const{setChanges} = useContext(AuthLoginContext);

  const updateName = (val)=>{
    setName(val);
  }

  const updateAmt = (val)=>{
    setAmt(val);
  }

  const valid = ()=>{
    const checkname = checkFirstName(name);
    const checkamt = checkNumber(amt);

    if(checkamt || checkname){
      return 'err';
    }else{
      return 'ok';
    }
  }

  const removeFunds = async()=>{
    const isValid = valid();
    setIndicator('yes');
    if(isValid == 'err'){
      setIndicator('no');
      Alert.alert('OOPS', 'One or more field validations failed, please reconfirm input', [
        {
          text: 'Ok',
          onPress: () => console.log('Cancel Pressed'),
          
        },
        
      ]);
    }else{
      const data = {
        amount: amt,
        name: name
      }

      const res = await removefunds(data);

      if(res.msg == 'Deduction successful, a notification mail will be sent to all Admins'){
        setIndicator('no');
        Alert.alert('Success', 'Funds Removed Successfully', [
          {
            text: 'Ok',
            onPress: () => setChanges('changes'),
            
          },
          
        ]);
      }else if(res.msg == 'You cannot withdraw more than your available balance'){
        setIndicator('no');
        Alert.alert('OOPS', 'You cannot withdraw more than your available balance', [
          {
            text: 'Ok',
            onPress: () => console.log('Cancel Pressed'),
            
          },
          
        ]);
      }else{
        setIndicator('no');
        Alert.alert('OOPS', 'Unable to complete request at the moment', [
          {
            text: 'Ok',
            onPress: () => console.log('Cancel Pressed'),
            
          },
          
        ]);
      }

    }
  }
  return (
        <DeductComponent 
          updateAmt={updateAmt}
          updateName={updateName}
          onpress={removeFunds}
          indicate={indicate}
        />
  )
}

export default Deducts;