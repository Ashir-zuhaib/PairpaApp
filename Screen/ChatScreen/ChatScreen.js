import { View, Text } from 'react-native'
import React from 'react'

const ChatScreen = () => {
  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  )
}

export default ChatScreen
// import React, { useState, useCallback, useEffect } from 'react'
// import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat'
// import {View, Text, Image, LogBox} from 'react-native'
// import useAuth from '../../Hooks/useAuth';
// // import {auth} from '@react-native-firebase/auth'
// import firestore from '@react-native-firebase/firestore';
// import {Color} from '../../Utils/colorfile'
// import {useNavigation} from '@react-navigation/core';
// import tempImg from '../../assets/image6.png'

// // import FirebaseData from '../../Utils/FirebaseData'; 
// const ChatScreen = ({route})=>{
//   const [messages, setMessages] = useState([]);
//   const {user} = useAuth()
//   const {recieverId} = route.params;
//   const navigation = useNavigation();
//   console.log('reciever',JSON.stringify(recieverId))
//   // console.log('con', user)
//   const getAllMessages = async()=>{
//     const docid =
//     recieverId > user 
//     ? user + "-" + recieverId
//     : recieverId + "-" + user;
//     const querySanp = await firestore()
//     .collection('chats')
//     .doc(docid)
//     .collection('messages')
//     .orderBy('createdAt', 'desc')
//     .get();
//   const allmsg = querySanp.docs.map(docSanp => {
//     return {
//       ...docSanp.data(),
//       createdAt: docSanp.data().createdAt.toDate(),
//     };
//   });
//   setMessages(allmsg);
// // };
//   }
//   useEffect(() => {
//   LogBox.ignoreLogs(['EventEmitter.removeListener'])
//   getAllMessages()
//   navigation.setOptions({
//     title: (
//       <View style={{backgroundColor:Color.PRIMARY_COLOR, flexDirection:'row', }}>
//         <View style={{ marginLeft:-20}} >
//         <Image source ={tempImg} style={{width:40, height:40, borderRadius:50 }}  />
//         </View>
//         <View style={{marginLeft:5 ,backgroundColor:Color.PRIMARY_COLOR,}}>
//         <Text style={{color: '#fff', fontFamily: 'Arciform', fontSize: 16.5}}>
//           {recieverId}
//         </Text>
//         <Text
//           style={{
//             color: Color.BACKGROUND_COLOR,
//             fontFamily: 'Arciform',
//             fontSize: 15,
//           }}>
//           online
//         </Text>

//         </View>
//       </View>
//     ),})
//     const docid =
//       recieverId > user
//         ? user + '-' + recieverId
//         : recieverId + '-' + user
//     const messageRef = firestore()
//       .collection('chats')
//       .doc(docid)
//       .collection('messages')
//       .orderBy('createdAt', 'desc');

//     const unSubscribe = messageRef.onSnapshot(querySnap => {
//       const allmsg = querySnap.docs.map(docSanp => {
//         const data = docSanp.data();
//         if (data.createdAt) {
//           return {
//             ...docSanp.data(),
//             createdAt: docSanp.data().createdAt.toDate(),
//           };
//         } else {
//           return {
//             ...docSanp.data(),
//             createdAt: new Date(),
//           };
//         }
//       });
//       setMessages(allmsg);
//     });
//     return () => {
//       unSubscribe();
//     };
//   }, [])
 
//   // const onSend = useCallback((messages = []) => {
//   //   setMessages(previousMessages => GiftedChat.append(previousMessages, messages));  
//   // }, [])
//   const onSend = messageArray => {
//     const msg = messageArray[0];
//     const mymsg = {
//       ...msg,
//       sentBy: user,
//       sentTo: recieverId,
//       createdAt: new Date(),
//     };
//     setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg));
//     const docid =
//       recieverId > user
//         ? user + '-' + recieverId
//         : recieverId + '-' + user;

//     firestore()
//       .collection('Users')
//       .doc(docid)
//       .collection('messages')
//       .add({...mymsg, createdAt: firestore.FieldValue.serverTimestamp()});
//   };

//   return (
//     <View style={{flex: 1, backgroundColor: Color.BACKGROUND_COLOR}}>
    
//     <GiftedChat
//       messages={messages}
//       onSend={messages => onSend(messages)}
//       user={{
//         _id: user,
//       }}
//       renderBubble={props => {
//         return (
//           <Bubble
//             {...props}
//             wrapperStyle={{
//               right: {
//                 backgroundColor: Color.PRIMARY_COLOR,
//               },
//               left: {
//                 backgroundColor: Color.SECONDARY_COLOR,
//               },
//             }}
//           />
//         );
//       }}
//       renderInputToolbar={props => {
//         return (
//           <InputToolbar
//             {...props}
//             containerStyle={{
//               borderTopWidth: 1,
//               borderTopColor: Color.PRIMARY_COLOR,
//             }}
//             textIn-putStyle={{color: Color.BLACK}}
//           />
//         );
//       }}
//       />

//       </View>
//   )
// }
// export default ChatScreen