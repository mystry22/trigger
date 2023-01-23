import React,{useState,useContext} from 'react';
import AddComponent from '../Components/AddComponent';
import {checkNumber,checkFirstName} from '../Utils/validation';
import { Alert } from 'react-native';
import {addfunds} from '../Utils/requests';
import {AuthLoginContext} from '../Context/AuthLoginContext';
const Add = () => {
  const [name,setName] = useState('');
  const [amt,setAmt] = useState('');
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

  const addFunds = async()=>{
    const isValid = valid();

    if(isValid == 'err'){
      Alert.alert('OOPS', 'One or more field validations failed, please reconfirm input', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          
        },
        
      ]);
    }else{
      const data = {
        amount: amt,
        name: name
      }

      const res = await addfunds(data);

      if(res.msg == 'Addition successful, a notification mail will be sent to all Admins'){
        Alert.alert('Success', 'Funds Added Successfully', [
          {
            text: 'Ok',
            onPress: () => setChanges('changes'),
            
          },
          
        ]);
      }else{
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
    <AddComponent 
      updateAmt={updateAmt}
      updateName={updateName}
      onpress={addFunds}
    />
  )
}

export default Add