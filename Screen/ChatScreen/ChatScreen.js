/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Platform, View, KeyboardAvoidingView } from 'react-native';
import {
  CometChatConversationListWithMessages,
  CometChatConversationList,
  CometChatUI,
  CometChatMessages,
} from '../../cometchat-pro-react-native-ui-kit-3/index.js';
import { CometChat } from '@cometchat-pro/react-native-chat';
import { COMETCHAT_CONSTANTS } from '../../config/COMMET_CONSTANT';
// import fire from '../../config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { set } from 'react-native-reanimated';

export default function HostMessages({ navigation, route }) {
  const { opdata } = route.params;
  // const CurrentUserId = '4564564564646546';
  // const [CurrentUserId, setCurrentUser] = useState(null) 
  // var receiverID = opdata.uid;
// var callType = CometChat.CALL_TYPE.VIDEO;
// var receiverType = CometChat.RECEIVER_TYPE.USER;
  const [isInitialized, setIsInitialized] = useState(false);
  const [user, setUser] = useState({
    hasBlockedMe: false,
    blockedByMe: false,
    uid: 'superhero3',
    name: 'Spiderman',
    avatar: 'https://data-us.cometchat.io/assets/images/avatars/spiderman.png', lastActiveAt: 1614597611,
    role: 'default',
    status: 'offline',


  });
  const [chatWithUser, setChatWithUser] = useState('');
  const [CurrentUserId, setCurrentUserId] = useState('');
  const [tId, setTID] = useState('');
  // console.log('user', userId)
  useEffect(()=>myIdfunc(),[])
  
const myIdfunc = async ()=>{
  const currentUser =await AsyncStorage.getItem('@userData')
// console.log(currentUser)
  // currentUser?
  setCurrentUserId(currentUser)
}
  useEffect(() => {
    // myIdfunc()
    if (CurrentUserId) {
      console.log('check if condition working?', CurrentUserId)
      var appSetting = new CometChat.AppSettingsBuilder()
        .subscribePresenceForAllUsers()
        .setRegion(COMETCHAT_CONSTANTS.REGION)
        .build();

      CometChat.init(COMETCHAT_CONSTANTS.APP_ID, appSetting).then(
        () => {
          if (CometChat.setSource) {
            console.log('check 2nd if  condition working?', CometChat)
            CometChat.setSource('ui-kit', 'Android', 'react-native');
            // console.log("OWN USER", userId)

            CometChat.login(CurrentUserId, COMETCHAT_CONSTANTS?.AUTH_KEY)
              .then(user => {
                
                setIsInitialized(true);
                let limit = 30;
                let conversationRequest =
                  new CometChat.ConversationsRequestBuilder()
                    .setLimit(limit)
                    .build();
                conversationRequest.fetchNext().then(conversationList => {
                  if (conversationList?.length > 0) {
                    
                    if (!CurrentUserId) {
                      setChatWithUser(
                        conversationList[0]?.getConversationWith?.uid,
                      );
                    }
                  }
                });
                var call = new CometChat.Call(params.uid,CometChat.CALL_TYPE.VIDEO, CometChat.RECEIVER_TYPE.USER);

                CometChat.initiateCall(call).then(
                outGoingCall => {
                console.log("Call initiated successfully:", outGoingCall);
                console.log('3rd cond', CometChat.CALL_TYPE.AUDIO)
    // perform action on success. Like show your calling screen.
                },
                error => {
                    console.log("Call initialization failed with exception:", error);
                    }
                );
              })
              .catch(error => {
                if (error.code === 'ERR_UID_NOT_FOUND') {
                  console.log('Error', error.code);
                  const uid = CurrentUserId;
                  // console.log("UID", uid)
                  let name = 'Hassan HOST';
                  // let image = data.data.user?.image;
                  var user = new CometChat.User(uid);
                  user.setName(name);
                  // if (image) {
                  //     user.setAvatar(image);
                  // }
                  CometChat.createUser(
                    user,
                    COMETCHAT_CONSTANTS?.AUTH_KEY,
                  ).then(
                    user => {
                      CometChat.login(
                        CurrentUserId,
                        COMETCHAT_CONSTANTS?.AUTH_KEY,
                      ).then(user_ => {
                        console.log('LOGIN', user_);
                      });
                    },
                    error => {
                      console.log('ERROR', error);
                    },
                  );
                }
              });
          }
        },
        error => { console.log('error', error)},
      );
    }
  });
  // useEffect(() => {
    
  //   if (CurrentUserId) {
  //     setCurrentUserId(CurrentUserId);
  //   }
    // if (location.state?.travelerID) {
    //   setTID(location.state?.travelerID);
    // }
  // }, [CurrentUserId]);

  console.log('Opposite USER', opdata.uid, 'OWN ID', CurrentUserId);
  
  return (
    CurrentUserId ?
    isInitialized && (
      <View style={{ flex: 1 }}>
        <CometChatMessages

          type={'user'}
          item={opdata}//The object will be of user or group depending on type
          loggedInUser={CurrentUserId}
          actionGenerated={(actionType) => {
            console.log(actionType);
          }}
          

        />
      </View>
    ):null
  );
}
