import React from 'react';
import { View, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Header  from '../../Components/Header';
import Search from '../../Components/Search'
// import Card from '../../Components/HomeComponents/FootPrintComponent/Card'
import TopTab from './TopTabs/TopTabs'
function Home() {
  return(
 <ScrollView contentContainerStyle={{flex:1}}>
   <Header value='Home'/>
   <TopTab/>
 </ScrollView>
  
  )
}


export default Home;