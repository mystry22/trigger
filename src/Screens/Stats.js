import { View, Text } from 'react-native';
import React,{useEffect,useState} from 'react';
import StatsComponent from '../Components/StatsComponent';
import {admincount,allplays,transactions} from '../Utils/requests';


const Stats = () => {
  const [adminnumber,setAllAdminNumber] = useState('');
  const [wins,setWins] = useState('');
  const [pendings,setPendings] = useState('');
  const [loss,setLoss] = useState('');
  const [tract,setTract] = useState([]);
  

  useEffect(()=>{
    alladmins();
    piaculate();
    getAllTransactions();
  },[])

  const alladmins = async()=>{
    const adminnum = await admincount();
    setAllAdminNumber(adminnum);
    
  }

  const getAllTransactions = async()=>{
    const trans = await transactions();
    setTract(trans);
  }

  const piaculate =async()=>{
    const plays = await allplays();

    const wins = parseInt(plays.wins);
    const loss = parseInt(plays.loss);
    const pendings = parseInt(plays.pendings);

    

    const total = wins + loss + pendings;
    

    const perWins = (wins/total)*100;
    const perLoss = (loss/total)*100;
    const perPend = (pendings/total)*100;

    if(isNaN(perWins) || isNaN(perLoss)){
      setWins(0);
      setLoss(0)
    }else{

    setWins(perWins);
    setPendings(perPend);
    setLoss(perLoss);
    }
  }

  return (
    <StatsComponent 
    admincount={adminnumber}
    wins={wins}
    pendings={pendings}
    loss={loss}
    tract={tract}
     />
  )
}

export default Stats