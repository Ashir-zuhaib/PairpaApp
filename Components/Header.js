import React from 'react';
import Notification from '../assets/notification21.svg';
import Logo from '../assets/whitelogo.svg'
// import logo from '../assets/pairpa.png'
import { View, Image,StyleSheet, Text, Dimensions } from 'react-native';
import { Color } from '../Utils/colorfile';
import Search from './Search';
const WIDTH =Dimensions.get("window").width;
function Header(props) {
  return( 
    <View style={{      flex:0.20222,
      width:WIDTH,
 //  height:130,
  backgroundColor:Color.PRIMARY_COLOR,
  position:"relative",}}>
  <View style={styles.heads}>     
     <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:15,paddingVertical:15,marginHorizontal:15, alignItems:'center'}}>
     <View>

     {/* <Image source ={logo} style={{height:50, width:80}}/> */}
     <Logo height={34} />
     </View>
      <Text style={styles.text}>{props.value}</Text>
      {/* <Image source={notification} height={199} width={188} /> */}
      <Notification height={34}/>
     </View>
  </View>
     {/* <View style={{backgroundColor:Color.SECONDARY_COLOR, height:30, }}></View> */}
     <Search />
    </View>
  )
}
const styles = StyleSheet.create({
    heads: {
     width:WIDTH*0.9,
     height:30
    },
    text:{
        color:Color.SECONDARY_COLOR,
        fontSize:20,
    }
    
  });
export default Header;
