import React from 'react';
import { Dimensions,Image, View, StyleSheet, Text, ScrollView,TouchableOpacity } from 'react-native';
// import { LikeData } from './LikeData';
import rep from '../../../assets/typingIcon.png'
import { Button } from 'react-native';
import { Color } from '../../../Utils/colorfile';
import { useEffect,useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
// import { set } from 'react-native-reanimated';
const WIDTH =Dimensions.get("window").width;
const HEIGHT=Dimensions.get("window").height;
export default function NoRep() {
    const [list, setList] = useState([])
    const [count, setCount] = useState(0)
    // const[li,setli] = useState(count)
    const [myUid, setUid] = useState(null)
    useEffect(()=>{
        getData();
        CurrentUserData()
    },[CurrentUserData])
   
    const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@userData')
        setUid(jsonValue)
        await firestore().collection('Users').where( "userId" ,'!=', jsonValue)
        .onSnapshot(snap =>{
        const data = snap.docs.map(doc => doc.data())
        // console.log('like Data', data)
        setList(data)
      }) 
    } catch(e) {
      // error reading value
      console.log(e)
    }
    
  }
  const CurrentUserData = async ()=>{
    try{
    const jsonValue = await AsyncStorage.getItem('@userData')
        
   await firestore().collection('Users').doc(jsonValue)
    .onSnapshot((doc)=>{
        setCount(doc.data().like)
        console.log('like', doc.data().like)
    })
        
    }
    catch(e) {console.log(e)}
  }
//   const UpdateLike = async (RId)=>{
// console.log('userdata', RId)
// // setli()
//     const jsonValue = await AsyncStorage.getItem('@userData')
//     const docId = jsonValue>RId
//     ? jsonValue + '-' + RId
//     : RId + '-' + jsonValue
//     setli(count +1)
//     await firestore().collection('Likes').doc(docId).collection('like').add({
//         likeTo: RId,
//         likeBy: jsonValue,
//         Since: firestore.FieldValue.serverTimestamp(),
//     })
//     .then(async()=>{
//         console.log('ssd',li)
//         await firestore().collection('Users').doc(RId).update({
//             like: li
//     })
//     })
    
    
//     .catch((e)=>console.log('err',e))
//     console.log(li)
   
//   }
  return (
    <ScrollView>
      {list.map((data, index)=>(
      <View style={styles.card} key={index}>
          <View style={styles.border}>

          {/* <Image source={data.image} style={styles.image} /> */}
          </View>
              <View style={styles.text}>    
              <Text style={styles.nameColor}>{data.userId.slice(0,15)}</Text>
              <Text style={styles.messColor}>21Years , jakarta</Text>
              <Text style={{color:'#D3D3D3', fontSize:12}} >here is message</Text>

              <TouchableOpacity
              onPress={()=>UpdateLike(data.userId)}
              style={styles.buttonStyle}><Text style={styles.btnText}>Like! do</Text></TouchableOpacity>
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
        justifyContent:'space-around',
        alignSelf:'center',
        height:WIDTH/2.9,
        borderRadius:15,
        paddingBottom:10,
        // paddingLeft:10,
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
        height:69,
        width:69,
        borderRadius:50,
        marginTop:15,
    },
    image:{
        width:61,
         height:61,
         borderRadius:50,
        margin:2,
    }
    ,
    text:{
        // marginLeft:10,
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
    width:WIDTH*0.5,
    
    // backgroundColor:'#000'
},
    dateColor:{
    color:Color.CARD_DATE,
    fontWeight:'400', 
    fontSize:13,
},
buttonStyle:{
    backgroundColor:Color.PRIMARY_COLOR,
    height:WIDTH/12,
    width:WIDTH*0.3,
    borderRadius:30,
    // flex:1,

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
    // marginLeft:35
}
})