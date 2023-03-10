import {TouchableOpacity, Text, StyleSheet,Dimensions, View, ActivityIndicator } from 'react-native';
import React from 'react';
import colors from '../Utils/color';
const Width = Dimensions.get('window').width;

const OnboardButton = ({title,onpress,indicate}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
      <View style={{flexDirection:'row'}}>

      {indicate == 'yes' ? <ActivityIndicator color={'#fff'} size='large' style={{marginRight:5}} />: null}<Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default OnboardButton;

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.red,
        width: Width - 50,
        marginTop:50,
        height: 60,
        borderRadius: 20,
        padding:10,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:colors.white,
        fontSize:25,
        fontWeight:'700',
        
      
    }
})