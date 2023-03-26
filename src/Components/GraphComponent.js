import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import colors from '../Utils/color';
const GraphComponent = ({ graphData }) => {


    return (


        <View>



            <Text style={styles.boldText}>Last 5 Transactions</Text>
            {/* <CircularProgress
                value={60}
                radius={120}
                duration={2000}
                progressValueColor={'#ecf0f1'}
                maxValue={200}
                title={'KM/H'}
                titleColor={'white'}
                titleStyle={{ fontWeight: 'bold' }}
            /> */}

            {graphData.length > 0 ?

               

                graphData.map(tractions => (
                    <View style={styles.transactions} key={tractions._id} >
                        <View style={[styles.status, { backgroundColor: tractions.color }]}>
                        </View>


                        <Text style={[styles.bookieCode, { color: colors.gray }]}>{tractions.code}</Text>
                        <Text style={styles.bookieCode}>{tractions.trans_date}</Text>
                        <Text style={[styles.bookieCode, { color: colors.gray }]}>{tractions.amount}</Text>
                    </View>
                )) :
                <Text style={{ color: colors.gray }}>No Transaction Available Yet</Text>

            }




        </View>
    )
}

export default GraphComponent;

const styles = StyleSheet.create({
    boldText: {
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 8,
        color: 'gray'
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

    }
})