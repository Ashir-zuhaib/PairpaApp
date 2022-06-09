import { Text, View, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import NoReplyCard from '../../../Components/HomeComponents/NoReplyTab/NoReplyCard'
import { Color } from '../../../Utils/colorfile';

export default function NoReply(){
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Message from the operator</Text>
        <NoReplyCard />
      </ScrollView>
    );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Color.BACKGROUND_COLOR
},
text:{
  marginTop:20,
  marginBottom:20,
  marginLeft:20,
  fontSize:14,
  fontWeight:'400',
  color:Color.CARDNAME
}
})