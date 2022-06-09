import React from 'react';
import { View, ScrollView, StyleSheet,} from 'react-native';
import Header  from '../../Components/Header';
// import Search from '../../Components/Search'
// import Card from '../../Components/HomeComponents/FootPrintComponent/Card'
import TopTab from './TopTabs/TopTabsMess'
function Message() {
  return(
 <ScrollView contentContainerStyle={{flex:1}}>
   <Header value='Message'/>
   <TopTab/>
 </ScrollView>
  
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor:'#FAFAFA',
    },
   
    
  });

export default Message;