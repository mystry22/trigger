import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import Onboard from "../Screens/OnboardLogin";

const Nav = createStackNavigator();
const NotLoggedIn = () => {
  return (
    <Nav.Navigator screenOptions={{
        headerShown:false
    }}
    initialRouteName='Onboard'
    >
      <Nav.Screen name="Onboard"  component={Onboard}/>
        <Nav.Screen name="Login"  component={Login}/>
        <Nav.Screen name="Signup"  component={Signup}/>
    </Nav.Navigator>
  )
}

export default NotLoggedIn;