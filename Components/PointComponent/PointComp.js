import React from 'react';
import { Dimensions,View, Image, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { PointData } from './PointData';
const WIDTH =Dimensions.get("window").width;
function PointComp() {
  return (
      <View style={styles.iconsComp}>
          {
              PointData.map((micon, index)=>(
                      <TouchableOpacity key={index} style={styles.iconBox}>
                      <Image  source={micon.icon} />
                      <Text style={styles.textIcon}>{micon.text}</Text>
                      </TouchableOpacity>
              ))
          }
    </View>
)
}
const styles= StyleSheet.create({
    iconsComp:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignSelf:'center',
        // backgroundColor:'#fff',
        width:WIDTH*0.9,
        height:WIDTH/2
    },
    iconBox:{
        marginHorizontal:10,
        backgroundColor:'#fff',
        paddingTop:20,
        alignItems:'center',
        paddingHorizontal:15, 
        height:WIDTH/3.2,
        width:WIDTH*0.27,
        borderRadius:10,
        shadowColor: "#000",
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
    }
})

export default PointComp;
