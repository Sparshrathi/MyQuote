import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Header =(props)=> {
    return (
  <View style={styles.screen}>
        <Text style={{...styles.title,...props.style}}>{props.title}</Text>
  </View>
    )
};

const styles=StyleSheet.create({
  title:{
    fontSize:16,
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
  }
})


export default Header
