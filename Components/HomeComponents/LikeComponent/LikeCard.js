import React from 'react';
import { Dimensions,Image, View, StyleSheet, Text, ScrollView,TouchableOpacity } from 'react-native';
import { LikeData } from './LikeData';
import rep from '../../../assets/typingIcon.png'
import { Button } from 'react-native';
import { Color } from '../../../Utils/colorfile';

const WIDTH =Dimensions.get("window").width;
const HEIGHT=Dimensions.get("window").height;
export default function NoRep() {
  return (
    <ScrollView>
      {LikeData.map((data, index)=>(
      <View style={styles.card} key={index}>
          <View style={styles.border}>

          <Image source={data.image} style={styles.image} />
          </View>
              <View style={styles.text}>    
              <Text style={styles.nameColor}>{data.name}</Text>
              <Text style={styles.messColor}>{data.date}</Text>
              <Text style={{color:'#D3D3D3', fontSize:12}} >{data.text}</Text>

              <TouchableOpacity style={styles.buttonStyle}><Text style={styles.btnText}>Like! do</Text></TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.repicon}><Image source={rep} /></TouchableOpacity>              
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
        alignSelf:'center',
        height:WIDTH/2.9,
        borderRadius:15,
        paddingBottom:10,
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
     fontWeight:'400',
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
buttonStyle:{
    backgroundColor:Color.PRIMARY_COLOR,
    height:58,
    width:90,
    borderRadius:30,
    flex:1,
    justifyContent:'center',
    marginVertical:10
    
},
btnText:{
    color:'#fff',
    alignSelf:'center',
    fontWeight:'600',
    fontSize:14
},
repicon:{
    marginTop:15,
    marginLeft:35}
})