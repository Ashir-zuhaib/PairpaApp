import { Text, View, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import LikeCard from '../../../Components/HomeComponents/LikeComponent/LikeCard'
import { Color } from '../../../Utils/colorfile';

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

    backgroundColor:Color.BACKGROUND_COLOR,
    // justifyContent:"center"
},
text:{
  marginTop:20,
  marginBottom:20,
  marginLeft:20,
  fontSize:13,
  color:Color.CARDNAME
}
})