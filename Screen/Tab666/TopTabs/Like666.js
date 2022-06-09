import { Text, View, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import LikeCard from '../../../Components/HomeComponents/LikeComponent/LikeCard'

export default function NoReply(){
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Message from the operator</Text>
        <LikeCard />
      </ScrollView>
    );
}
const styles=StyleSheet.create({
  container:{
    flex:1,

    // backgroundColor:"red",
    // justifyContent:"center"
},
text:{
  marginTop:20,
  marginBottom:10,
  marginLeft:40,
  fontSize:13,
  color:'#333D41'
}
})