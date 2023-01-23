import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import Input from '../Reusables/Input';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SignupComponent = ({
  updateEmail,
  updateFirstName,
  updateLastName,
  updatePass,
  updatePhone,
  onpress

}) => {
  const navigation = useNavigation();
  const gotoSignin =()=>{
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>
        Create Account
      </Text>

      <Text style={styles.smallText}>
        Kindly fill the input below
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <AntDesign name='user' size={28} color={'#fff'} style={{ marginRight: 10, marginTop: 8 }} />
        <Input placeholder='First Name' password={false} onChangeText={(val)=>updateFirstName(val)} />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <AntDesign name='user' size={28} color={'#fff'} style={{ marginRight: 10, marginTop: 8 }} />
        <Input placeholder='Last Name' password={false} onChangeText={(val)=>updateLastName(val)} />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <AntDesign name='phone' size={28} color={'#fff'} style={{ marginRight: 10, marginTop: 8 }} />
        <Input placeholder='Phone' password={false} onChangeText={(val)=>updatePhone(val)} />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <FontAwesome name='envelope' size={28} color={'#fff'} style={{ marginRight: 10, marginTop: 8 }} />
        <Input placeholder='Email' password={false} onChangeText={(val)=>updateEmail(val)} />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <AntDesign name='eye' size={28} color={'#fff'} style={{ marginRight: 10, marginTop: 8 }} />
        <Input placeholder='Password' password={true} onChangeText={(val)=>updatePass(val)} />
      </View>




      <TouchableOpacity style={styles.submit} onPress={onpress}>
        <Text style={styles.signup}>SIGN UP</Text>
      </TouchableOpacity>


      <View style={styles.sideThem}>

        <Text style={styles.leftAccount}> Already have an Account </Text>
        <TouchableOpacity onPress={gotoSignin}><Text style={styles.rightAccount}>SignIn</Text></TouchableOpacity>
      </View>

    </View>
  )
}

export default SignupComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#000000',
    padding: 20,
    height: '100%'
  },
  boldText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 30
  },
  smallText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20
  },
  submit: {
    backgroundColor: 'red',
    width: '100%',
    padding: 10,
    height: 60,
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 30
  },
  signup: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    fontSize:18
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