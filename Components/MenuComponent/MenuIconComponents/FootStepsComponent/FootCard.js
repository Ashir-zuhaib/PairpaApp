import React from 'react';
import { Dimensions,Image, View, StyleSheet, Text, ScrollView } from 'react-native';
import { FootData } from './FootstepsData';
import {Color} from '../../../../Utils/colorfile'
const WIDTH =Dimensions.get("window").width;
const HEIGHT=Dimensions.get("window").height;
export default function FootStepCard() {
  return (
    <View style={{marginTop:40}}>
      {FootData.map((data, index)=>(
      <View style={styles.card} key={index}>
          <View style={styles.border}>

          <Image source={data.image} style={styles.image} />
          </View>
              <View style={styles.text}>    
              <Text style={styles.messColor}>{data.date}</Text>
              <Text style={styles.nameColor}>{data.name}</Text>
              <Text style={{color:'#D3D3D3', fontSize:12}} >{data.text}</Text>
          </View>              
      </View>
          ))}
              </View>
  );
}
const styles= StyleSheet.create({
    card:{
        
        marginBottom:12,
        flex:1,
        flexDirection:'row',
        width:WIDTH*0.9,
        height:WIDTH/4.5,
        alignSelf:'center',
        borderRadius:15,
        paddingLeft:10,
        backgroundColor:Color.SECONDARY_COLOR,
        shadowColor: Color.BLACK,
        shadowOffset: {
            width: 10,
            height: 5,
        },
        elevation: 3,
    },
    border:{
        borderColor:'#EE2A7B',
        borderWidth:2,
        height:49,
        width:49,
        borderRadius:50,
        marginTop:15,
        // marginLeft:-0.2,
        // padding:0
    },
    image:{
        width:41,
         height:41,
         borderRadius:50,

        //  margin:0.5,
        //  marginLeft:1,
        margin:2,
        //  marginHorizontal:1,
        //  marginTop:1.2

         
    }
    ,
    text:{
        marginLeft:10,
        marginTop:15
    },
    messColor:{
    color:'#808080',
     fontSize:13,
    },
    nameColor:{
    color:'#333D41',
    fontWeight:'800', 
    fontSize:16,
},
    dateColor:{
    color:'#333D41D6',
    fontWeight:'bold', 
    fontSize:13,
},

})