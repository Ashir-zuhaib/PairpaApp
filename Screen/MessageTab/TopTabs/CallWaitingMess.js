import { Text, View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import NoReplyCard from '../../../Components/HomeComponents/NoReplyTab/NoReplyCard'
import Stories from '../../../Components/HomeComponents/CallWaitingComponents/Story';
import CallCard  from '../../../Components/HomeComponents/CallWaitingComponents/CallWaitngCard';
import { Color } from '../../../Utils/colorfile';
export default function Call() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Call Recruiment Started</Text>
        <Stories />
        <CallCard />
      </ScrollView>
    );
  
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Color.BACKGROUND_COLOR,
},
text:{
  marginTop:20,
  marginBottom:20,
  marginLeft:20,
  fontSize:13,
  color:Color.CARDNAME
}
})