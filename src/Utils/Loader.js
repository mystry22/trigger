import React from 'react';
import { StyleSheet, ActivityIndicator,SafeAreaView,Image} from 'react-native';

const Loader =()=>{

    return <SafeAreaView style={style.loader}>
        <Image source={require('../Assets/logo.png' )} style={style.img} />
        <ActivityIndicator size={'large'} />
    </SafeAreaView>
}

export default Loader;

const style = StyleSheet.create({

    loader:{
       flex:1,
       alignItems: 'center',
       justifyContent: 'center',
       paddingTop: 50,
       backgroundColor: '#000000'
   },
   img:{
    width:200,
    height:200,
    marginBottom:20,
    borderRadius:10
   }
})