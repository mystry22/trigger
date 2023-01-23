import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Menu from '../Screens/Menu';
import colors from '../Utils/color';

const StatsComponent = ({admincount,wins,pendings,loss,tract}) => {
    console.log
    return (
        <View style={styles.wrap}>
            <View style={styles.container}>
                {/* Top Triger and logout */}
                <View style={styles.topNav}>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={styles.smallText}>Active Members: {admincount}</Text>
                    </View>
                    <View >

                        <TouchableOpacity>
                            <MaterialIcons name='logout' size={28} color={'#fff'} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Statistics */}
                <View style={styles.nameBalance}>
                    <Text style={[styles.boldText, { color: '#fff', alignSelf: 'center' }]}>Statistics</Text>

                    <View style={styles.divide}>

                        <Text style={styles.tinyText}>Winnings</Text>
                        <Text style={styles.tinyText}>Losses</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.smallText, { lineHeight: 45, fontSize: 12, color: 'gray' }]}>%</Text>
                            <Text style={[styles.boldText, { color: '#fff', marginRight: 25, fontSize: 25 }]}>{parseInt(wins)}</Text>

                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.smallText, { lineHeight: 45, fontSize: 12, color: 'gray' }]}>%</Text>
                            <Text style={[styles.boldText, { color: '#fff', fontSize: 25 }]}>{parseInt(loss)}</Text>
                        </View>
                    </View>
                </View>

                {/* Horizontal Line*/}

                <View style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: StyleSheet.hairlineWidth,

                }}>
                    {/* Transaction History*/}


                </View>

                <Text style={[styles.boldText, { color: '#fff', alignSelf: 'center', marginTop: 10, fontSize: 20 }]}>Transaction History</Text>
                <ScrollView>

                    {tract.length > 0 ?

                    tract.map(tractions => (
                        <View style={styles.transactions} key={tractions._id} >
                            <View style={[styles.status, { backgroundColor: tractions.color }]}>
                            </View>


                            <Text style={[styles.bookieCode, { color: colors.gray }]}>{tractions.code}</Text>
                            <Text style={styles.bookieCode}>{tractions.trans_date}</Text>
                            <Text style={[styles.bookieCode, { color: colors.gray }]}>{tractions.amount}</Text>
                        </View>
                    )) :
                    <Text style={{color:colors.gray}}>No Transaction Available</Text>
                
                }


                </ScrollView>
            </View>
            <Menu />
        </View>
    )
}

export default StatsComponent;

const styles = StyleSheet.create({

    wrap: {
        justifyContent: 'space-between',
        backgroundColor: '#000000',
    },
    container: {

        padding: 20,
        height: '87%'

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
    boldText: {
        fontWeight: '700',
        fontSize: 30,
        marginBottom: 20
    },
    nameBalance: {

    },
    divide: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    tinyText: {
        color: 'gray',
        fontSize: 14,
        marginLeft: 10,

    },
    transactions: {
        backgroundColor: colors.purple,
        height: 50,
        borderRadius: 15,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:20
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

    }
})