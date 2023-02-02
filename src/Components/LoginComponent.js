import { View, StyleSheet, Image, Text,TouchableOpacity } from 'react-native';
import React from 'react';
import Input from '../Reusables/Input';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OnboardButton from '../Reusables/OnboardButton';
import { useNavigation } from '@react-navigation/native';

const LoginComponent = ({onpress,updateEmail,updatePass}) => {
    const navigation = useNavigation();
    const gotoSignup =()=>{
        navigation.navigate('Signup');
      }
    return (
        <View style={styles.container}>
            {/* Loggo Section */}
            
            <Image source={require('../Assets/logo.png')} style={styles.logoImage} />
            {/* Text Section */}
            <Text style={styles.boldText}>Login</Text>
            <Text style={styles.smallText}>Please login to continue</Text>

            <View style={{ flexDirection: 'row' }}>
                <FontAwesome name='envelope' size={28} color={'#fff'} style={{ marginRight: 10, marginTop: 8 }} />
                <Input placeholder='Email' password={false} onChangeText={(val)=>updateEmail(val)}  />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <AntDesign name='eye' size={28} color={'#fff'} style={{ marginRight: 10, marginTop: 8 }} />
                <Input placeholder='Password' password={true} onChangeText={(val)=>updatePass(val)} />
            </View>

            <OnboardButton title={'LOGIN'} onpress={onpress} />

            <View style={styles.sideThem}>

                <Text style={styles.leftAccount}> Don't have an Account </Text>
                <TouchableOpacity onPress={gotoSignup}><Text style={styles.rightAccount}>SignUp</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginComponent;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: 20,
        height: '100%'
    },
    logoImage: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        borderRadius: 20,
        marginBottom: 20
    },
    boldText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 30,
        marginBottom: 20
    },
    smallText: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: '500'
    },
    sideThem: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
      },
      leftAccount: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '400'
      },
      rightAccount: {
        color: 'red',
        fontSize: 14,
        fontWeight: '400'
      }
});