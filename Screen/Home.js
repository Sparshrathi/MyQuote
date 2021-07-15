import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import Header from '../Components/Header';
import { Ionicons } from '@expo/vector-icons';

const Home =(props)=> {
    return (
  <View style={styles.screen}>
      <View style={styles.header}>
        <Header style={styles.headerTitle} title="Home" />
      </View>

      <View style={styles.pageText}>
      <Text style={styles.text}>Get Create New Quote</Text>
      </View>
      
      <TouchableOpacity onPress={props.createPost} >
      <View style={styles.addIcon}>
      <Ionicons name="add-circle" size={56} color="black" />       
      </View>
      </TouchableOpacity>
  </View>
    )
};

const styles=StyleSheet.create({
  screen:{
    flex:1,
    // flexDirection:'column',
    justifyContent:'space-between'
    },
  header:{
    width:'100%',
    height:140,
    // flex:0.2,
    backgroundColor:'#F84726',
    alignItems:'center',
    borderBottomLeftRadius:14,
    borderBottomRightRadius:14,
  },
  headerTitle:{
    color:'white',
    paddingTop:50,
  },
  addIcon:{
    alignItems:'flex-end',
    justifyContent:'flex-end',
    marginRight:20,
    marginBottom:20
  },
  pageText:{
    alignItems:'center',
    justifyContent:'center',
    flex:0.9,

    fontFamily:'',
   
  },
  text:{
    fontWeight:'bold',
    fontSize:20
  }

})


export default Home
