import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import Menu from '../Screens/Menu';
import colors from '../Utils/color';
import OnboardButton from '../Reusables/OnboardButton';

const PlayComponent = ({
    updateCode,
    updateAmount,
    updateOdd,
    updatePotWin,
    onpress,
    indicate
}) => {

    return (
        <View style={styles.wrap}>
            <View style={styles.container}>

                <Text style={styles.boldText}>Play</Text>

                {/* Horizontal Line*/}

                <View style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginBottom:30
                }}>
                    </View>

                <Text style={styles.headerText} >Let's make history together</Text>

                <View>

                  <TextInput placeholder='Booking Code' placeholderTextColor={colors.gray} style={styles.input} onChangeText={(val)=>updateCode(val)} />

                  <TextInput placeholder='Amount' placeholderTextColor={colors.gray} style={styles.input} onChangeText={(val)=>updateAmount(val)} keyboardType='numeric' />

                  <TextInput placeholder='Odd' placeholderTextColor={colors.gray} style={styles.input} onChangeText={(val)=>updateOdd(val)} keyboardType='numeric' />

                  <TextInput placeholder='Potential Win' placeholderTextColor={colors.gray} style={styles.input} onChangeText={(val)=>updatePotWin(val)} keyboardType='numeric' />
                  
                </View>

                <OnboardButton title={'Play'} onpress={onpress} indicate={indicate}/>

                

                

            </View>
            <Menu />

        </View>
    )
}

export default PlayComponent;

const styles = StyleSheet.create({
    wrap: {
        justifyContent: 'space-between',
        backgroundColor: '#000000',
    },
    container: {

        padding: 20,
        height: '87%'

    },
    boldText: {
        fontWeight: '700',
        fontSize: 30,
        marginBottom: 20,
        color: '#fff'
    },

    button: {
        marginTop: 20,
        backgroundColor: colors.purple,
        height: 65,
        width: '100%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        color: colors.gray,
        fontSize: 20,
        fontWeight: '700'
    },
    input:{
        marginLeft:10,
        backgroundColor: colors.purple,
        height:60,
        width:'100%',
        borderRadius:10,
        marginBottom:25,
        alignSelf:'center',
        color: colors.gray
    },
    headerText:{
        color: colors.gray,
        fontSize:18,
        fontWeight:'800',
        marginBottom:20
    }
})