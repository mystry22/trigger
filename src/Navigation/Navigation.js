import  React from "react";
import { NavigationContainer } from '@react-navigation/native';
import ReturnOption from "./ReturnEval";
//import AsyncStorage from '@react-native-async-storage/async-storage';


const Nav =()=>{
    

    return (
             <NavigationContainer>
               
               <ReturnOption />
                
            </NavigationContainer>
        
      );
}

export default Nav;