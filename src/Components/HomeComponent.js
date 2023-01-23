import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React,{useContext} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Menu from '../Screens/Menu';
import GraphComponent from './GraphComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthLoginContext} from '../Context/AuthLoginContext';

const HomeComponent = ({share,graphData,userDetail}) => {
    const {setChanges} = useContext(AuthLoginContext);

    const logOut = async()=>{
        const rand = Math.random();
        await AsyncStorage.removeItem('userToken');
        setChanges(rand);
    }

    
    return (
        <View style={styles.wrap}>
            <View style={styles.container}>
                {/* Top Triger and logout */}
                <View style={styles.topNav}>
                    <View style={{ flexDirection: 'row' }} >
                        <Image source={require('../Assets/logo.png')} style={{ width: 20, height: 20, marginTop: 3, borderRadius: 20, marginRight: 2 }} />
                        <Text style={styles.smallText}>Trigger</Text>
                    </View>
                    <View >

                        <TouchableOpacity onPress={logOut}>
                            <MaterialIcons name='logout' size={28} color={'#fff'} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Name and Balance Section */}

                <View style={styles.nameBalance}>
                    <Text style={[styles.boldText, { color: '#fff', }]}>Hi, {userDetail.first_name}</Text>
                    <Text style={[styles.boldText, { color: 'gray' }]}>Here is your balance</Text>

                    <View >

                        <Text style={styles.tinyText}>Share Value</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.smallText, { lineHeight: 45, fontSize: 12, color: 'gray' }]}>NGN</Text>
                            <Text style={[styles.boldText, { color: '#fff', marginRight: 25, fontSize: 25 }]}>{parseInt(share)}</Text>

                        </View>
                    </View>

                    
                </View>

                {/*Graph Section */}

                <GraphComponent graphData={graphData} />
            </View>
            <Menu />
        </View>
    )
}

export default HomeComponent;

const styles = StyleSheet.create({
    wrap:{
        justifyContent: 'space-between'
    },
    container: {
        backgroundColor: '#000000',
        padding: 20,
        height:'87%'
        
    },
    topNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    smallText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: '500'
    },
    nameBalance: {

    },
    boldText: {
        fontWeight: '700',
        fontSize: 30,
        marginBottom: 20
    },
    divide: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    tinyText: {
        color: 'gray',
        fontSize: 14,
        

    }

})