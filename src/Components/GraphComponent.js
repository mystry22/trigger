import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { LineChart } from "react-native-chart-kit";
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory-native';
import colors from '../Utils/color';
const GraphComponent = ({ graphData }) => {


    return (


        <View>

            {/* {
                graphData.length > 0 ? 
                <View>
                    <Text style={styles.boldText}>Last 5 Transactions</Text>
            <LineChart
                data={{
                    labels: graphData.map(trans => {return trans.trans_date.substr(0,6) }),
                    datasets: [
                        {
                            data: graphData.map(trans => {return trans.balance })
                        }
                    ]
                }}
                width={Dimensions.get("window").width - 20} // from react-native
                height={300}
                yAxisLabel="N"
                yAxisSuffix=""
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "green",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />

            <VictoryChart theme={VictoryTheme.grayscale}>

                <VictoryBar animate data={graphData} x="trans_date" y="balance">

                </VictoryBar>

            </VictoryChart>
                </View>

                : 

                <Text style={{color:'gray', fontSize:18}}>
                    No Data
                </Text>
            } */}

            <Text style={styles.boldText}>Last 5 Transactions</Text>

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