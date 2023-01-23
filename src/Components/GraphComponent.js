import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { LineChart } from "react-native-chart-kit";

const GraphComponent = ({ graphData }) => {
   

    return (


        <View>

            {
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
                </View>

                : 

                <Text style={{color:'gray', fontSize:18}}>
                    No Data
                </Text>
            }

            


        </View>
    )
}

export default GraphComponent;

const styles = StyleSheet.create({
    boldText: {
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 20,
        color: 'gray'
    },
})