import { View, Text, StyleSheet,TextInput } from 'react-native';
import React from 'react';
import colors from '../Utils/color';
import Menu from '../Screens/Menu';
import OnboardButton from '../Reusables/OnboardButton';


const DeductComponent = ({updateAmt,updateName,onpress,indicate}) => {
    return (
        <View style={styles.wrap}>
            <View style={styles.container}>
                <Text style={styles.largeText}>Widthdrawal Form</Text>
                <Text style={styles.formLabel}>First Name</Text>
                <TextInput style={styles.input} onChangeText={(val)=>updateName(val)} />
                <Text style={styles.formLabel}>Amount</Text>
                <TextInput style={styles.input} keyboardType='numeric' onChangeText={(val)=>updateAmt(val)} />
                <OnboardButton title={'Widthdraw'} onpress={onpress} indicate={indicate} />
            </View>
            <Menu  />
        </View>
    )
}

export default DeductComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: '87%',
        padding: 20,
        backgroundColor: colors.dark,
        justifyContent:'center',
        alignContent:'center'
    },
    wrap: {
        justifyContent: 'space-between'
    },
    largeText:{
        color:colors.white,
        fontSize:30,
        textAlign:'center',
        marginBottom:40
    },
    formLabel:{
        color:colors.gray,
        fontSize:18,
        fontWeight:'600',
        marginLeft:18
    },
    input:{
        height:55,
        width: '90%',
        color : colors.white,
        backgroundColor: colors.purple,
        borderRadius:10,
        alignSelf: 'center',
        marginBottom:20

    }
})