import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Home from "../Screens/Home";
import Stats from "../Screens/Stats";
import Deduct from "../Screens/Deducts";
import Add from "../Screens/Add";
import Funds from "../Screens/Funds";
import Play from "../Screens/Play";
import Update from '../Screens/Update';


const Nav = createStackNavigator();
const MenuNav =()=>{
    return(
        <Nav.Navigator screenOptions={{
            headerShown:false
        }}
        initialRouteName='Home'
        >
            <Nav.Screen name="Home"  component={Home}/>
            <Nav.Screen name="Stats"  component={Stats}/>
            <Nav.Screen name="Deduct"  component={Deduct}/>
            <Nav.Screen name="Add"  component={Add}/>
            <Nav.Screen name="Funds"  component={Funds}/>
            <Nav.Screen name="Play"  component={Play}/>
            <Nav.Screen name="Update"  component={Update}/>
        </Nav.Navigator>
    )
}

export default MenuNav;