import React from 'react';
import { Dimensions,View, Image,StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Color } from '../../../Utils/colorfile';
import { useNavigation } from "@react-navigation/core"
import BackButton from '../../BackButton/BackButton';
const WIDTH =Dimensions.get("window").width;
function Header(props) {
    const navigation = useNavigation();
  return( 
    <>
  <View style={styles.heads}>   
     <View style={styles.tileImage}>
       <View>
          <BackButton goBack={navigation.goBack} />
         </View>
      <Text style={styles.text}>{props.value}</Text>
      {/* <Image source={notification} height={199} width={188} /> */}
      <View><Text></Text></View>
     </View>
  </View>
    </>
  )
}
export default Header;
const styles = StyleSheet.create({
    heads: {
    //   flex:1,
    //  width:'100%',
 height:WIDTH/3.5,
 backgroundColor:Color.PRIMARY_COLOR,
 position:"relative",
 width:WIDTH,
 justifyContent:'space-around',
paddingVertical:25,
 paddingHorizontal:10
    },
    tileImage:{
        flexDirection:"row",
    justifyContent:"space-between", 
    alignItems:'center'
},
    text:{
        color:Color.SECONDARY_COLOR,
        fontSize:18,
        alignSelf:'center'
    }
    
  });

