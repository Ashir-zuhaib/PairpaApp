import React from 'react';
import { Dimensions,Image, View, StyleSheet, Text, ScrollView,TouchableOpacity } from 'react-native';
// import { LikeData } from './LikeData';
import rep from '../../../assets/typingIcon.png'
import { Button } from 'react-native';
import { Color } from '../../../Utils/colorfile';
import { useEffect,useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import useAuth from '../../../Hooks/useAuth';
const WIDTH =Dimensions.get("window").width;
const HEIGHT=Dimensions.get("window").height;
export default function NoRep() {
    const [list, setList] = useState([])
    const [likeList, setLikeList] = useState([])
    
    const[li,setli] = useState([])
    const [myUid, setUid] = useState(null)
    const{user}= useAuth()
    useEffect(()=>{
        getData();        
        // LikedUser();
    },[])
    
    const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@userData')
        setUid(jsonValue)
        await firestore().collection('Users').where( "userId" ,'!=', jsonValue)
        .onSnapshot(snap =>{
        const data1 = snap.docs.map(doc =>doc.data())
        
        console.log('like Data', data1)
        setList(data1)
        // data1.map((data)=>(
        

//     //     data1.map( async(data)=> {
//     //         try{
//     //            const docId = jsonValue > data.userId ?
//     //            jsonValue + '-' + data.userId:
//     //            data.userId + '-' + jsonValue
//     //         // const jsonValue = await AsyncStorage.getItem('@userData')
//     //         await firestore().collection('Likes')
//     // // .where("likeTo", "!=", data.userId)
//     // .where("docId", "!=", docId)
//     //     .onSnapshot(snap =>{
//     //        if(snap.size==0){
//     //        console.log('not available') 
//     //        }
//     //        else{
//     //            const dataByLikedto = snap.docs.map(doc =>doc.data())
//     //            // console.log('liked user', snap.docs.map(doc =>doc.data()))
//     //            console.log(dataByLikedto)
//     //            setLikeList(dataByLikedto)
//     //        }
        
            
//     //   })
//     // }   
//     //  catch(e) {
//     //   // error reading value
//     //   console.log(e)
//     // }

// })

})}
catch(e){console.log(e.code)}
        }
//   const LikedUser = async ()=>{
//     list.map( async(data)=> {
//     try{
//     // const jsonValue = await AsyncStorage.getItem('@userData')
//     await firestore().collection('Likes')
//     // .where("likeTo", "!=", data.userId)
//     .where("likeTo", "!=", data.userId)
//         .onSnapshot(snap =>{
//             // console.log(snap)
//         const dataByLikedto = snap.docs.map(doc =>doc.data())
//         console.log('liked user', snap.docs.map(doc =>doc.data()))
//         setLikeList(dataByLikedto)
        
//         // const LikedTo = dataByLikedto.map((doc)=>  doc.likeTo)
//         // console.log('dd', LikedTo)
        
// //         const docId = data.map((doc)=>  doc.docId)
// //           LikedTo.map((liketo)=>{
// //             console.log('check', docId)
// //             const docmd = user +'-'+liketo
// //          firestore().collection('Likes').where("docId", "==", docmd ).where("likeTo", "!=", liketo ). onSnapshot
// //             // get()
// //             ((querySnapshot) => {
// //                 if(querySnapshot== null)
// //                 {
// //                   console.log('failed', querySnapshot)

// //                   const removeLiked = list.pop(liketo)
// //                   console.log(removeLiked)
// //                   removeLiked == undefined ? 'no user': setList(lim)
// //                  }
// //                  else{
// //                     querySnapshot.forEach(async(doc) => {            
// //                       console.log(doc.id, "=>", doc.data().likeTo);
// //                     //   setPoint(doc.data().point)
// //                     //   console.log('oipnt', doc.data().likeTo)
                      
// //                   })}
//                 // })
// //             // .catch((e)=>{console.log('error',e)})
//     })
//     // .then(()=>console.log('no likes'))
//     // .catch((e)=>console.log(e.code))
           
// //         setli(data)
//     // })
// }
// catch(e){console.log(e.code)}
//   })
// }
// const RemoveLiked= async() =>{
    // console.log('remov', li)
    // if(list.forEach((doc)=>doc.)){
    //   const recId =  list.map((doc)=>  doc.userId)
    //   const LikedBy = li.map((doc)=>  doc.likeBy)
      
  const UpdateLike = async (RId,like)=>{
    
    const jsonValue = await AsyncStorage.getItem('@userData')
    const docId = jsonValue > RId
    ? jsonValue + '-' + RId
    : RId + '-' + jsonValue
    await firestore().collection('Users').doc(RId).update({
        // likeTo: RId,
        // likeBy: jsonValue,
        // Since: firestore.FieldValue.serverTimestamp(),
        // docId: docId,
        likeBy: jsonValue

    })
    .then(async()=>{
        await firestore().collection('Users').doc(RId).update({
            like: likeBy.length
    })
    .catch(e=>{
        console.log(e.code)
    })
    
    })
    
    
    .catch((e)=>console.log('err',e))
    // console.log(li)
   
  }
  return (
    // likeList != []?
    // <ScrollView>
    //   {likeList.map((data, index)=>(
    //     data.docId != user+'-'+ data.likeTo ?
    //   <View style={styles.card} key={index}>
    //       <View style={styles.border}>

    //       {/* <Image source={data.image} style={styles.image} /> */}
    //       </View>
    //           <View style={styles.text}>    
    //           <Text style={styles.nameColor}>{data.likeTo.slice(0,15)}</Text>
    //           <Text style={styles.messColor}>21Years , jakarta</Text>
    //           <Text style={{color:'#D3D3D3', fontSize:12}} >here is message</Text>
    //          { firestore().collection('Likes').doc(user+ '-'+data.likeTo)?
    //         //   data.userId == user?  
    //         <TouchableOpacity
    //         onPress={()=>UpdateLike(data.likeTo,)}
    //         style={styles.buttonStyle}><Text style={styles.btnText}>Like! do</Text></TouchableOpacity>:
    //     <TouchableOpacity
    //     disabled={true}
    //     style={styles.buttonStyle}><Text style={styles.btnText}>Liked</Text></TouchableOpacity>
    // }
    //       </View>
    //       <TouchableOpacity style={styles.repicon}><Image source={rep} /></TouchableOpacity>              
    //   </View>: null
    //       )) } 
    //           </ScrollView>
    //           :
              <ScrollView>
      {list.map((data, index)=>(
        data.userId != user+'-'+ data.userId ?
      <View style={styles.card} key={index}>
          <View style={styles.border}>

          {/* <Image source={data.image} style={styles.image} /> */}
          </View>
              <View style={styles.text}>    
              <Text style={styles.nameColor}>{data.userId.slice(0,15)}</Text>
              <Text style={styles.messColor}>21Years , jakarta</Text>
              <Text style={{color:'#D3D3D3', fontSize:12}} >here is message</Text>
             { firestore().collection('Likes').doc(user+ '-'+data.userId)?
            //   data.userId == user?  
            <TouchableOpacity
            onPress={()=>UpdateLike(data.userId,)}
            style={styles.buttonStyle}><Text style={styles.btnText}>Like! do</Text></TouchableOpacity>:
        <TouchableOpacity
        disabled={true}
        style={styles.buttonStyle}><Text style={styles.btnText}>Liked</Text></TouchableOpacity>
    }
          </View>
          <TouchableOpacity style={styles.repicon}><Image source={rep} /></TouchableOpacity>              
      </View>: null
          )) } 
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