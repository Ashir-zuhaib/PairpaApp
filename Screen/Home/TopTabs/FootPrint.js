import { Text, View, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import Card from '../../../Components/HomeComponents/FootPrintComponent/Card';
import { Color } from '../../../Utils/colorfile';

export default class FootPrint extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Message from the operator</Text>
        <Card />
      </ScrollView>
    );
  }
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
