import React,{useEffect,useContext} from 'react';
import HomeComponent from '../Components/HomeComponent';
import {AuthLoginContext} from '../Context/AuthLoginContext';


const Home = () => {
  
  const {share,graphData,userDetail} = useContext(AuthLoginContext);
  

 

  
  return (
    <HomeComponent 
    share = {share}
    graphData={graphData}
    userDetail={userDetail}
    />
  )
}

export default Home;