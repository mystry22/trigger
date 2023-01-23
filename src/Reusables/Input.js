import { TextInput,StyleSheet } from 'react-native';
import React from 'react';

const Input = ({placeholder,password,onChangeText}) => {
    
  return (
    
      <TextInput placeholder={placeholder} placeholderTextColor="#fff"
      
      style={styles.textInput} 
        secureTextEntry={password}
        onChangeText={onChangeText}
         /> 

  )
}

const styles = StyleSheet.create({
    textInput:{
        width: '90%',
        height:45,
        borderColor: '#fff',
        alignSelf: 'center',
        borderRadius: 20,
        padding:10,
        color: '#fff',
        marginBottom:20,
        backgroundColor: '#301934'
      }
})

export default Input;