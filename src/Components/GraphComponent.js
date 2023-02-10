import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import PieChart from 'react-native-pie-chart';
import colors from '../Utils/color';
const GraphComponent = ({ series, color }) => {
    const widthAndHeight = 250;

    return (


        <View>

           

            <Text style={styles.boldText}>Visualization</Text>

            {series.length > 0 ?

            <View style={styles.div}>

                <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={color}
              />

              <View>
                <Text style={{color:'#fff',fontSize:18}}>Legend</Text>

                <View style={styles.div}>
                    <View style={[styles.indicators,{backgroundColor:'orange'}]}></View> 
                    <Text style={{color:'gray', lineHeight:13}}>% {series[1]} loss </Text>
                </View>
                <View style={styles.div}>
                    <View style={[styles.indicators,{backgroundColor:'green'}]}></View> 
                    <Text style={{color:'gray', lineHeight:13}}>% {series[1]} Win </Text>
                </View>
                <View style={styles.div}>
                    <View style={[styles.indicators,{backgroundColor:'white'}]}></View> 
                    <Text style={{color:'gray', lineHeight:13}}>% {series[2]} pendings </Text>
                </View>
              </View>
            </View>
                :
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

    },
    div:{
        flexDirection:'row',
        marginBottom:5
    },
    indicators:{
        width:50,
        height:10
    },
    
})