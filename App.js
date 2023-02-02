import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Nav from './src/Navigation/Navigation';
import {GlobalAuthContext} from './src/Context/AuthLoginContext'
import CodePush from 'react-native-code-push';
const codePushOptions = {checkFrequency: CodePush.CheckFrequency.ON_APP_START}




const App = () => {

  useEffect(()=>{
    CodePush.sync({
      updateDialog:true,
      installMode: CodePush.InstallMode.IMMEDIATE
    });
  })
  
  return (
    <GlobalAuthContext>

      <Nav />
    </GlobalAuthContext>

  );
};



export default CodePush(codePushOptions)(App);
