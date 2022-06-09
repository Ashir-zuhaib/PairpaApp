import React from 'react';
import { View, ScrollView, StyleSheet,} from 'react-native';
import Header  from '../../Components/Header';
// import Search from '../../Components/Search'
// import Card from '../../Components/HomeComponents/FootPrintComponent/Card'
import TopTab from './TopTabs/TopTabs'
function Tab666() {
  return(
 <ScrollView contentContainerStyle={{flex:1}}>
   <Header value='BBS'/>
   <TopTab/>
 </ScrollView>
  
  )
}

export default Tab666;