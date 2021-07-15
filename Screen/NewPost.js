import React,{useState} from 'react'
import { View,Text,StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import { TextInput , Button, List } from 'react-native-paper';
import Header from '../Components/Header';


const  NewPost=(props)=> {

    const [expanded, setExpanded] = React.useState(true);
    const [Name, setName] = useState('')
    const [Description, setDescription] = useState('Selcet Category')
    const handlePress = () => setExpanded(!expanded);

    return (
        <ScrollView>
            <View style={styles.screen}>       
                <View style={styles.header}>
                <Header style={styles.headerTitle} title="Create Quote" />
                </View>

                <View style={styles.inputBox}>
                    <TextInput
                    style={styles.input}
                    label="Name"
                    value={'Sparsh Rathi'}
                    underlineColor='#F84726'
                    outlineColor='#F84726'
                    selectionColor='#F84726'
                    theme={{ colors: { primary: "#F84726" } }}
                    // onFocus={()=> {underlineColor='#F84726'
                    // outlineColor='#F84726'
                    // selectionColor='#F84726'}}
                    />
    
                    <TextInput
                    style={styles.input}
                    label="Description:"
                    value={'Paper is a collection of customizable and production-ready components for React Native, following Google\'s Material Design guidelines.'}
                    underlineColor='#F84726'
                    outlineColor='#F84726'
                    selectionColor='#F84726'
                    multiline={true}
                    theme={{ colors: { primary: "#F84726" } }}

                    />

                    <View>       
                    <List.Section>
                    <Text style={styles.text}>Category</Text>
                    <List.Accordion
                    style={styles.dropdown}
                    title={Description}
                    expanded={!expanded}
                    onPress={handlePress}
                    >
                    <List.Item title="First item" onPress={()=>{setDescription('First item');handlePress()}} />
                    <List.Item title="Second item" onPress={()=>{setDescription('Second item');handlePress()}} />
                    </List.Accordion>
                    </List.Section>
                    </View>
                

                <View style={styles.lable}>
                    <Text>Availability</Text>
                    <View style={styles.boader}></View>
                </View>

 
                <TextInput
                style={styles.input}
                mode='outlined'
                label="Start Date"
                value={'10/11/1999 14:15'}
                underlineColor='#F84726'
                outlineColor='#F84726'
                selectionColor='#F84726'
                theme={{ colors: { primary: "#F84726" } }}
                />

                <TextInput
                style={styles.input}
                mode='outlined'
                label="End Date"
                value={'14/12/1999 14:15'}
                underlineColor='#F84726'
                outlineColor='#F84726'
                selectionColor='#F84726'
                theme={{ colors: { primary: "#F84726" } }}
                />

                <TouchableOpacity  style={styles.input}>
                    <Button style={styles.button} mode="contained" color='#F3F3F3' >
                        Add Images or Video
                    </Button>
                </TouchableOpacity>
             </View>
    
                <TouchableOpacity style={styles.input} >
                    <Button style={styles.buttonPost} mode="contained" color='#F84726' >
                        POST
                    </Button>
                </TouchableOpacity>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    header:{
      width:'100%',
      height:100,
      // flex:0.2,
      shadowColor:'black',
      shadowOffset:{width:0,height:2},
      shadowOpacity:0.6,
      shadowRadius:6,
      backgroundColor:'white',
      elevation:5,
      alignItems:'center',
      borderBottomLeftRadius:14,
      borderBottomRightRadius:14,
    },
    headerTitle:{
        color:'black',
        paddingTop:50,
        
      },
      inputBox:{
        marginHorizontal:25,
        justifyContent:'space-between'
      },
      input:{
        marginTop:20,
      },
      boader:{
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
        width:'80%',
        marginBottom:8,
        marginLeft:5
      },
      lable:{
          flexDirection:'row',
          marginTop:15
      },
      button:{
          padding:12,
          borderStyle:'dotted',
          borderWidth:2,
          borderColor:'#707070',
      },
      buttonPost:{
        padding:10,
        marginHorizontal:25,
        justifyContent:'flex-end'
      },
      text:{
          backgroundColor:'#0000000B',
          color:'#F84726',
          paddingLeft:10,
          fontSize:12,
          marginTop:5
      },
      dropdown:{
          borderBottomColor:'#F84726',
          borderBottomWidth:1,
      }

}) 

export default NewPost
