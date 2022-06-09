// import React, {useState, useEffect, useCallback, useLayoutEffect} from 'react';
// import {View, Text, LogBox} from 'react-native';
// import {GiftedChat, Bubble, InputToolbar} from 'react-native-gifted-chat';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import COLOR from '../../Utils/Color';

// LogBox.ignoreLogs(['EventEmitter.removeListener']);
// const ChatScreen = ({route, navigation}) => {
//   const rID = 'LU9Rp0Ax2Ac6YmngaMf1BN3pRxH2';
//   const Status = 'Online';
//   const [messages, setMessages] = useState([]);
//   const getAllMessages = async () => {
//     const docid =
//       rID > auth().currentUser.uid
//         ? auth().currentUser.uid + '-' + rID
//         : rID + '-' + auth().currentUser.uid;
//     const querySanp = await firestore()
//       .collection('chats')
//       .doc(docid)
//       .collection('messages')
//       .orderBy('createdAt', 'desc')
//       .get();
//     const allmsg = querySanp.docs.map(docSanp => {
//       return {
//         ...docSanp.data(),
//         createdAt: docSanp.data().createdAt.toDate(),
//       };
//     });
//     setMessages(allmsg);
//   };
//   useEffect(() => {
//     // getAllMessages()
//     navigation.setOptions({
//       title: (
//         <View>
//           <Text style={{color: 'white', fontFamily: 'Arciform', fontSize: 20}}>
//             Hassan
//           </Text>
//           <Text
//             style={{
//               color: COLOR.SECONDARY,
//               fontFamily: 'Arciform',
//               fontSize: 15,
//             }}>
//             {Status}
//           </Text>
//         </View>
//       ),
//     });

//     const docid =
//       rID > auth().currentUser.uid
//         ? auth().currentUser.uid + '-' + rID
//         : rID + '-' + auth().currentUser.uid;
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
//   }, []);

//   const onSend = messageArray => {
//     const msg = messageArray[0];
//     const mymsg = {
//       ...msg,
//       sentBy: auth().currentUser.uid,
//       sentTo: rID,
//       createdAt: new Date(),
//     };
//     setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg));
//     const docid =
//       rID > auth().currentUser.uid
//         ? auth().currentUser.uid + '-' + rID
//         : rID + '-' + auth().currentUser.uid;

//     firestore()
//       .collection('chats')
//       .doc(docid)
//       .collection('messages')
//       .add({...mymsg, createdAt: firestore.FieldValue.serverTimestamp()});
//   };
//   return (
//     <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
//       <GiftedChat
//         messages={messages}
//         onSend={text => onSend(text)}
//         user={{
//           _id: auth().currentUser.uid,
//         }}
//         renderBubble={props => {
//           return (
//             <Bubble
//               {...props}
//               wrapperStyle={{
//                 right: {
//                   backgroundColor: COLOR.PRIMARY,
//                 },
//                 left: {
//                   backgroundColor: COLOR.SECONDARY,
//                 },
//               }}
//             />
//           );
//         }}
//         renderInputToolbar={props => {
//           return (
//             <InputToolbar
//               {...props}
//               containerStyle={{
//                 borderTopWidth: 1,
//                 borderTopColor: COLOR.PRIMARY,
//               }}
//               textInputStyle={{color: 'black'}}
//             />
//           );
//         }}
//       />
//     </View>
//   );
// };

// export default ChatScreen;