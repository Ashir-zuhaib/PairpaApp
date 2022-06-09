import React from 'react';
import { View, ScrollView, StyleSheet,} from 'react-native';
import Header  from '../../Components/Header';
import TopTab from './TopTabs/TopTabsPoint'
function Point() {
  return(
 <ScrollView contentContainerStyle={{flex:1}}>
   <Header value='Points'/>
   {/* <Poin /> */}
   <TopTab/>
 </ScrollView>
  
  )
}

export default Point;