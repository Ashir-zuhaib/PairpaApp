import React from 'react';
import { TouchableOpacity, View, Text,Image, StyleSheet } from 'react-native';
import Profile from '../../../../../assets/likeprofile.svg';
import BackButton from '../../../../BackButton/BackButton';
import More from '../../../../../assets/likemore.svg'
import { Color } from '../../../../../Utils/colorfile';
import Typing from '../../../../../assets/whiterep.png'
import Call from   '../../../../../assets/whitecall.svg'
import Videocall from   '../../../../../assets/whitecallvideo.svg'
import OtherSelfdetails from './OtherSelfdetails';
function OtherLikeProfile() {
    
  return(
  <View style={styles.container}>
      <Profile style={{position:'absolute', }} />
      <View style={styles.imageTop}><BackButton /><More /></View>
      <View style={styles.details}>
          <OtherSelfdetails />
          <View style={styles.bottombtn}>
              <TouchableOpacity style={styles.msgbtn}>
                  <Text ><Image source={Typing} height={10} width={10} /></Text>
                  
                  <Text style={styles.msgtext}>Message</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.callbtn}>
                  <Text ><Call width={30} height={20} /></Text>
                  
                  <Text style={styles.callText}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.videobtn}>
                  <Text ><Videocall width={20} height={20} /></Text>
                  <Text style={styles.videotext}>Video Calll</Text>
              </TouchableOpacity>
          </View>
          </View>
  </View>
  )}

export default OtherLikeProfile;
const styles= StyleSheet.create({
    container:{
        backgroundColor:Color.PRIMARY_COLOR, 
        flex:1
    },
    imageTop:{
        flexDirection:'row', 
    marginTop:20,
    marginHorizontal:10, 
    position:'relative'
},
    details:{
        flex:1,
        top:380,
        backgroundColor:'#fff',
},
    bottombtn:{
        flexDirection:'row',
        justifyContent:'space-around', 
        marginTop:20
},
    msgbtn:{
        backgroundColor:Color.PRIMARY_COLOR, 
        width:100 ,
        height:40, 
        flexDirection:'row',
    borderRadius:10, 
    Color:Color.SECONDARY_COLOR,
     alignItems:'center',
    justifyContent:'center',
},
    msgtext:{
        marginLeft:10, 
        color:Color.SECONDARY_COLOR
    },
    callbtn:{
        backgroundColor:'#1EB687', 
    width:100 ,
    height:40, 
    flexDirection:'row',
    borderRadius:10, 
    Color:Color.SECONDARY_COLOR, 
    alignItems:'center',
    justifyContent:'center',
},
    callText:{
        marginLeft:10, 
        color:Color.SECONDARY_COLOR
    },
    videobtn:{
        backgroundColor:Color.SECONDARY_COLOR,
         width:100 ,
        height:40, 
        flexDirection:'row',
    borderRadius:10,
     Color:Color.SECONDARY_COLOR, 
    alignItems:'center',
    justifyContent:'center',
    shadowColor: Color.BLACK,
     shadowOffset: {
         width: 10,
         height: 5,
     },
     elevation: 5,
},
videotext:{
    marginLeft:10,
     color:Color.PRIMARY_COLOR,
     
}
})