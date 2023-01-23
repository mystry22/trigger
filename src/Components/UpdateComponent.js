import { View, Text, StyleSheet, TouchableOpacity, Modal,Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import Menu from '../Screens/Menu';
import colors from '../Utils/color';
import ModalPop from '../Utils/ModalPop';
import {updateOutcome} from '../Utils/requests';



const UpdateComponent = ({transactions,updateTransList}) => {
    
    const [isModal, setIsModal] = useState(false);
    const [bookie_code,setBookingCode] = useState('');
    const [pot_win,setPotWin] = useState('');

    const TriggerModal = (bool,code,potential_win) => {
        setIsModal(bool);
        setBookingCode(code);
        setPotWin(potential_win);
    };

    const updateEvent = async(bool,option)=>{
        setIsModal(bool);
        const data = {
            booking_code:bookie_code,
            potential_win:pot_win,
            determinant:option
        }
    
        

        const res = await updateOutcome(data);
        if(res.msg == 'Result updated'){
            Alert.alert('Success', 'Game outcome updated successfuly', [
                {
                  text: 'Ok',
                  onPress: () => {updateTransList()},
                  
                },
                
              ]);
        }else{
            Alert.alert('OOPS', 'Unable to complete operation at the moment', [
                {
                  text: 'Ok',
                  onPress: () => console.log('Cancel Pressed'),
                  
                },
                
              ]);
        }


    }


    

    return (
        <View style={styles.wrap}>
            <View style={styles.container}>

                <Text style={styles.boldText}>All Pending Bookies</Text>

                {/* Horizontal Line*/}

                <View style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginBottom: 30
                }}>
                </View>

                <Text style={styles.headerText} >Let's make history together</Text>

                <Modal
                    transparent={true}
                    animationType='fade'
                    visible={isModal}
                    onRequestClose={() => TriggerModal(false)}
                >

                    <ModalPop

                        trigerMode={updateEvent}
                        
                        
                    />

                </Modal>

                {transactions.length > 0 ?

                    transactions.map(trans => (
                        
                            <TouchableOpacity key={trans._id} onPress={() => TriggerModal(true,trans.code,trans.potential_win)} >
                                <View style={styles.transactions} >
                                    <View style={[styles.status, { backgroundColor: trans.color }]}>
                                    </View>


                                    <Text style={[styles.bookieCode, { color: colors.gray }]}>{trans.code}</Text>
                                    <Text style={styles.bookieCode}>{trans.trans_date}</Text>
                                    <Text style={[styles.bookieCode, { color: colors.gray }]}>{trans.potential_win}</Text>
                                </View>
                            </TouchableOpacity>
                            
                    ))

                    :

                    <Text style={styles.headerText}>No Active Bookie</Text>

                }





            </View>
            <Menu />

        </View>
    )
}

export default UpdateComponent;

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
    input: {
        marginLeft: 10,
        backgroundColor: colors.purple,
        height: 60,
        width: '100%',
        borderRadius: 10,
        marginBottom: 25,
        alignSelf: 'center'
    },
    headerText: {
        color: colors.gray,
        fontSize: 18,
        fontWeight: '800',
        marginBottom: 20
    },
    transactions: {
        backgroundColor: colors.purple,
        height: 50,
        borderRadius: 15,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    status: {
        height: 30,
        width: 30,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: colors.dark
    },
    bookieCode: {
        fontSize: 18,
        fontWeight: '700',

    },

})