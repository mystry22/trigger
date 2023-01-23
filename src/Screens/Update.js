import React, {useContext} from 'react';
import UpdateComponent from '../Components/UpdateComponent';
import {AuthLoginContext} from '../Context/AuthLoginContext';


const Update = () => {
  

  const {transaction,setChanges} = useContext(AuthLoginContext);

  
  const updateTransList = ()=>{
    const rand = Math.random();
    setChanges(rand);
    //navigation.navigate('Update')
  }

  return (
    <UpdateComponent
      transactions={transaction}
      updateTransList={updateTransList}
    
    />
  )
}

export default Update;