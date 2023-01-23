import React,{useContext,useState,useEffect} from "react";
import {AuthLoginContext} from '../Context/AuthLoginContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StackMenu from "./StackMenu";
import Onboard from "../Screens/Onboard";
import Loader from '../Utils/Loader';
import { useNavigation } from "@react-navigation/native";

const ReturnOption = ()=>{
    const navigation = useNavigation();
    const {switched,setWitched} = useContext(AuthLoginContext);

    
    return(
        <>
        
        {switched === 'init' ? <Loader /> : <StackMenu /> }
        {/* {switched === 'notAvail' ? <NotSignInStack /> : <StackMenue /> } */}
        </>
    );
}

export default ReturnOption
