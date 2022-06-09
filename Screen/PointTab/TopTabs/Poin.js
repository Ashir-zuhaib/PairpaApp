import {Dimensions, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import PointComp from '../../../Components/PointComponent/PointComp';
import { Color } from '../../../Utils/colorfile';
const WIDTH =Dimensions.get("window").width;
const HEIGHT=Dimensions.get("window").height;
  export default function FootPrint(){
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Current earned reward</Text> 
   <Text style={styles.number}>$00</Text>
        <TouchableOpacity style={styles.exchangebtn}><Text style={styles.exchangecolor}>Exchange</Text></TouchableOpacity>
   < TouchableOpacity style={styles.depositbtn}><Text style={styles.depositcolor}>Deposit Destination</Text></TouchableOpacity>
   <View style={styles.divider}></View>
            <PointComp />
      </ScrollView>
    )
}    


const styles=StyleSheet.create({
    container:{
    flex:1, 
    backgroundColor:Color.BACKGROUND_COLOR
  },
  text:{
  marginTop:20,
    marginBottom: 10,
    alignSelf:'center',
    fontSize:13,
    color:Color.CARDNAME,
  },
  number:{
    fontSize:96,
  fontWeight:'800',
  alignSelf:'center',
  marginVertical:10,
  color:Color.CARDNAME
  }, 
  exchangebtn:{ 
  backgroundColor:Color.PRIMARY_COLOR,
  width:WIDTH*0.8, 
  alignSelf:'center',
  alignItems:'center',
  height:WIDTH/6.5 ,
  borderRadius:10, 
  marginTop:20,
  marginBottom:20, 
  },
  depositbtn:{
  backgroundColor:'#fff',
  color:'#EE2A7B',
  width:WIDTH*0.8, 
  alignSelf:'center',
  alignItems:'center',
  height:WIDTH/6.5 ,
  borderRadius:10,
  // shadowColor: "#A6A6A6",
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,
  },
  exchangecolor :{
  color:Color.SECONDARY_COLOR,
  fontWeight:'800',
  alignSelf:'center',
  paddingTop:15,
  fontSize:18 ,
  },     
  depositcolor: {
  color:Color.PRIMARY_COLOR,
  fontWeight:'bold',
  alignSelf:'center',
  paddingTop:15,
  fontSize:18,
  }, 
  divider:{
      width:WIDTH*0.8,
      height:2,
      backgroundColor:'#E9E9E9',
      marginTop:50,
      marginBottom:40,
      alignSelf:'center'

  }
  })