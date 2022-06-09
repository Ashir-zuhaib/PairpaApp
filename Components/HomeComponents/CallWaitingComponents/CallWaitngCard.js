import React from 'react';
import {Dimensions, Image, View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
// import { NoRepData } from './NoreplyData';
import {CallWaitData} from './CallCardData'
import video from '../../../assets/video.png'
import {Color} from '../../../Utils/colorfile'
import call from '../../../assets/Call.png'
const WIDTH =Dimensions.get("window").width;
const HEIGHT=Dimensions.get("window").height;
export default function CallCard() {
  return (
    <ScrollView>
      {CallWaitData.map((data, index)=>(
      <View style={styles.card} key={index}>
          <View style={styles.border}>

          <Image source={data.image} style={styles.image} />
          </View>
              <View style={styles.text}>    
              <Text style={styles.nameColor}>{data.name}</Text>
              <Text style={styles.messColor}>{data.date}</Text>
              <Text style={{color:'#D3D3D3', fontSize:12}} >{data.text}</Text>
          </View>
          <View style={styles.calls}>
              <TouchableOpacity><Image style={styles.callImage} source={call} height={15} width={15.83}/></TouchableOpacity>
          <TouchableOpacity style={styles.videogape}><Image  source={video} height={18} width={18.83}/></TouchableOpacity>
          </View>              
          {/* <View style={{marginTop:20}}></View>               */}
      </View>
          ))}
              </ScrollView>
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
        paddingBottom:15,
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
        borderColor:Color.PRIMARY_COLOR,
        borderWidth:2,
        height:49,
        width:49,
        borderRadius:50,
        marginTop:15,
    },
    image:{
        width:41,
         height:41,
         borderRadius:50,
        margin:2,
      
         
    }
    ,
    text:{
        marginLeft:10,
        marginTop:15
    },
    messColor:{
    color:Color.CARD_TEXT,
     fontSize:13,
    },
    nameColor:{
    color:Color.CARDNAME,
    fontWeight:'800', 
    fontSize:16,
},
    dateColor:{
    color:Color.CARD_DATE,
    fontWeight:'400', 
    fontSize:13,
},
calls:{
    marginTop:15,
     flexDirection:'row',
     justifyContent:'space-around',
     height:25,
},
videogape:{marginLeft:20}
})