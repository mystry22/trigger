import { Alert } from 'react-native';
import React, { useState,useContext } from 'react';
import PlayComponent from '../Components/PlayComponent';
import { checkString, checkNumber } from '../Utils/validation';
import {play} from '../Utils/requests';
import {AuthLoginContext} from '../Context/AuthLoginContext';

const Play = () => {
  const [code, setCode] = useState('');
  const [amount, setAmount] = useState('');
  const [odd, setOdd] = useState('');
  const [pot_win, setPot_win] = useState('');

  const {setChanges} = useContext(AuthLoginContext);

  const updateCode = (val) => {
    setCode(val)
  }
  const updateAmount = (val) => {
    setAmount(val)
  }
  const updateOdd = (val) => {
    setOdd(val)
  }

  const updatePotWin = (val) => {
    setPot_win(val)
  }

  const valid = () => {
    const book_codeErr = checkString(code);
    const amtErr = checkNumber(amount);
    const oddErr = checkNumber(odd);
    const potWinErr = checkNumber(pot_win);

    if (book_codeErr || amtErr || oddErr || potWinErr) {
      return 'err';
    } else {
      return 'ok';
    }
  }

  const Play = async()=>{
    const isValid = valid();
  
    if(isValid == 'err'){
      Alert.alert('OOPS', 'One or more field validations failed, please reconfirm input', [
        {
          text: 'Ok',
          onPress: () => console.log('Cancel Pressed'),
          
        },
        
      ]);
    
    }else{
      const minAmt = odd * amount;
      if(minAmt > pot_win){
        Alert.alert('OOPS', 'Kindly reconfirm total win', [
          {
            text: 'Ok',
            onPress: () => console.log('Cancel Pressed'),
          
          },
          
        ]);
      }else{
        const data = {
          booking_code:code,
          amount:amount,
          odd:odd,
          potential_win: pot_win
        }

        const res = await play(data);
        if(res.msg == 'Bookie placed successfuly'){
          Alert.alert('Success', 'Bookie placed successful', [
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

  }

  return (

    <PlayComponent
      updateCode={updateCode}
      updateAmount={updateAmount}
      updateOdd={updateOdd}
      updatePotWin={updatePotWin}
      onpress={Play}
    />

  )
}

export default Play;