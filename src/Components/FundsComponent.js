import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Menu from '../Screens/Menu';
import colors from '../Utils/color';
import { useNavigation } from '@react-navigation/native';

const FundsComponent = () => {
    const navigation = useNavigation();

    const goToAdd = ()=>{
        navigation.navigate('Add');
    }

    const goToRemove = ()=>{
        navigation.navigate('Deduct');
    }
    return (
        <View style={styles.wrap}>
            <View style={styles.container}>

                <Text style={styles.boldText}>Funding</Text>

                {/* Horizontal Line*/}

                <View style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: StyleSheet.hairlineWidth,

                }}>
                </View>
                <TouchableOpacity style={styles.button} onPress={goToAdd} >
                    <Text style={styles.buttonText}>Add Funds</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={goToRemove}>
                    <Text style={styles.buttonText}>Widthdraw</Text>
                </TouchableOpacity>
            </View>
            <Menu />

        </View>
    )
}

export default FundsComponent;

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
        color:'#fff'
    },

    button:{
        marginTop:20,
        backgroundColor: colors.purple,
        height:65,
        width:'100%',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'

    },
    buttonText:{
        color:colors.gray,
        fontSize:20,
        fontWeight: '700'
    }
})