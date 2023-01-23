import { View, StyleSheet, Text,  } from 'react-native';
import React from 'react';
import colors from '../Utils/color';
import OnboardButton from '../Reusables/OnboardButton';


const OnboardComponent = ({onpress}) => {
  return (
    <View style={styles.container} >
        <Text style={styles.boldText}>Simple way to invest your money for the future</Text>
        <Text style={styles.smallText}>The best way to invest & get returns for the future by using just your phone</Text>
        <OnboardButton  title ='Start' onpress={onpress}/>
    </View>
  )
}

export default OnboardComponent;

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.dark,
        padding: 20,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    boldText:{
        color: '#fff',
        fontSize:40,
        textAlign:'center'
    },
    smallText:{
        fontSize: 18,
        color:colors.gray,
        textAlign: 'center',
        marginTop: 20,
        marginBottom:50
    }
})