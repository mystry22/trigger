import React,{useEffect,useContext} from 'react';
import HomeComponent from '../Components/HomeComponent';
import {AuthLoginContext} from '../Context/AuthLoginContext';
import Loader from '../Utils/Loader';


const Home = () => {
  
  const {share,graphData,userDetail} = useContext(AuthLoginContext);
  

 

  
  return (
    // <HomeComponent 
    // share = {share}
    // graphData={graphData}
    // userDetail={userDetail}
    // />

    <>
    {userDetail && share  && graphData ? 

    <HomeComponent 
    share = {share}
    graphData={graphData}
    userDetail={userDetail}
    />

    :
      <Loader />
  }
    </>
  )
}

export default Home;