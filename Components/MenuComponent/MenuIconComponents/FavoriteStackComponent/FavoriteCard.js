import React from 'react';
import { Dimensions,Image, View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import more from '../../../../assets/morefav.png';
import {FavoriteCardData} from './FavoriteData'
import Mpin from '../../../../assets/pinmap.png'
import {Color} from '../../../../Utils/colorfile'
const WIDTH =Dimensions.get("window").width;
const HEIGHT=Dimensions.get("window").height;
export default function FavoritesCard() {
  return (
    <View style={styles.iconsComp}>
    {
        FavoriteCardData.map((micon, index)=>(
                <TouchableOpacity key={index} style={styles.iconBox}>
                    <View style={{flexDirection:'row', marginTop:5}}>
                <View style={styles.circle}><Image style={styles.img} source={micon.image} /></View><Image source={more} style={{marginLeft:10}}  /></View>
                <Text style={styles.textIcon}>{micon.name}</Text>
                <Text style={styles.textAge}>{micon.age}</Text>
                <Text style={styles.textLoc} ><Image source={Mpin} />{micon.location}</Text>
                </TouchableOpacity>
        ))
    }
</View>
  );
}
const styles= StyleSheet.create({
    iconsComp:{
        
        // flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        alignSelf:'center',
        alignItems:'center',
        backgroundColor:Color.BACKGROUND_COLOR,
        width:WIDTH*0.9,
        // height:WIDTH/5,
        marginTop:40
    },
    iconBox:{
        padding:10,
      marginBottom:15,
        backgroundColor:Color.SECONDARY_COLOR,
        justifyContent:'center',
        alignItems:'center',
        // height:100,
        width:'40%',
        borderRadius:5,
        shadowColor: '#C5C5C536',
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
         fontWeight:'600',
         fontSize:16,
         color:'#000',
         marginTop:10
    },
    textAge:{
        textAlign:'center',
         fontWeight:'400',
         fontSize:13,
         color:Color.PRIMARY_COLOR,
         marginTop:5
    },
    textLoc:{
        textAlign:'center',
         fontWeight:'400',
         fontSize:13,
         color:'#C4C4C4',
        //  backgroundColor:,
         marginTop:5
    },
  circle:{
    // backgroundColor:'#F1F1F1' , 
  width:83, 
  height:83,
   borderRadius:50,
   alignItems:'center',
   justifyContent: 'center',
   borderColor:Color.PRIMARY_COLOR,
   borderWidth:1,
},
img:{
    width:73,
    height:73,
    borderRadius:50
}

})