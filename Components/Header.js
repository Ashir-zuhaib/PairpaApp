import React from 'react';
import Notification from '../assets/notification21.svg';
import Logo from '../assets/whitelogo.svg'
import { View, Image,StyleSheet, Text } from 'react-native';
import { Color } from '../Utils/colorfile';
import Search from './Search';
function Header(props) {
  return( 
    <>
  <View style={styles.heads}>   
     <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:15,paddingVertical:15,marginHorizontal:15, alignItems:'center'}}>
     {/* <Image source ={air} height={9} width={8}/> */}
     <Logo height={34} />
      <Text style={styles.text}>{props.value}</Text>
      {/* <Image source={notification} height={199} width={188} /> */}
      <Notification height={34}/>
     </View>
  </View>
     <View style={{backgroundColor:Color.SECONDARY_COLOR, height:30, }}></View>
     <Search />
    </>
  )
}
const styles = StyleSheet.create({
    heads: {
      flex:0.20222,
     width:'100%',
//  height:130,
 backgroundColor:Color.PRIMARY_COLOR,
 position:"relative",
    },
    text:{
        color:Color.SECONDARY_COLOR,
        fontSize:20,
    }
    
  });
export default Header;
