import React from 'react';
import { Dimensions,View, Image, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { Color } from '../../../Utils/colorfile';
import { MenuData } from './MenuIconData';
import { useNavigation } from "@react-navigation/core"
const WIDTH =Dimensions.get("window").width;
function MenuIcons() {
  const navigation = useNavigation();
  return (
      <View style={styles.iconsComp}>
          {
              MenuData.map((micon, index)=>(
                      <TouchableOpacity onPress={()=>navigation.navigate(micon.navi)}key={index} style={styles.iconBox}>
                      <View style={styles.circle}><Image  source={micon.icon} /></View>
                      <Text style={styles.textIcon}>{micon.text}</Text>
                      </TouchableOpacity>
              ))
          }
    </View>
)
}
const styles= StyleSheet.create({
    iconsComp:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        alignSelf:'center',
        width:WIDTH*0.9,
        marginTop:35
    },
    iconBox:{
      marginBottom:10,
        backgroundColor:Color.SECONDARY_COLOR,
        justifyContent:'center',
        alignItems:'center',
        height:WIDTH/3.69,
        width:WIDTH*0.25,
        borderRadius:5,
        shadowColor: Color.BLACK,
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,
  },

    textIcon:{
        textAlign:'center',
         width:80,
         color:'#000',
         marginTop:10
    },
  circle:{
    backgroundColor:'#F1F1F1' , 
  width:53, 
  height:53,
   borderRadius:50,
   alignItems:'center',
   justifyContent: 'center'
}
})

export default MenuIcons;
