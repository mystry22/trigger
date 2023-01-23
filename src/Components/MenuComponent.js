import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../Utils/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const MenuComponent = () => {
    const navigation = useNavigation();
    const goToHome =()=>{
        navigation.navigate('Home')
    }
    const goToStats =()=>{
        navigation.navigate('Stats')
    }

    const goToPlay =()=>{
        navigation.navigate('Play')
    }
    const goToUpdate =()=>{
      navigation.navigate('Update')
  }
    const goFunds =()=>{
      navigation.navigate('Funds')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={goToHome}>
        <AntDesign name='home' size={25} color='#fff' />
        <Text style={{color:'#fff'}}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton} onPress={goFunds}>
        <FontAwesome name='first-order' size={25} color='#fff' />
        <Text style={{color:'#fff'}}> Funds</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.menuButton,{}]} onPress={goToStats}>
        <AntDesign name='barschart' size={35} color='#fff' />
      
      </TouchableOpacity>

      <TouchableOpacity onPress={goToPlay} style={styles.menuButton} >
        <FontAwesome5 name='play' size={25} color='#fff' />
        <Text style={{color:'#fff'}}>Play</Text>
      </TouchableOpacity >

      


      <TouchableOpacity style={styles.menuButton} onPress={goToUpdate}>
        <MaterialCommunityIcons name='update' size={25} color='#fff' />
        <Text style={{color:'#fff'}}>Update</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.dark,
        height:'20%',
        flexDirection:'row',
        justifyContent: 'space-evenly'
    },
    menuButton:{
        alignItems:'center'
    }
})