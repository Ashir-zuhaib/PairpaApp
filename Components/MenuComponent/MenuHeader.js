import React,{useState, useEffect} from 'react';
// import notification from '../assets/notification21.png';
// import air from '../../assets/maskgroup1.png'
import Logo from '../../assets/whitelogo.svg'
import edit from '../../assets/edit.png'
import setting from '../../assets/setting.png'
import pic from '../../assets/profile.png'
import Notification from '../../assets/notification21.svg'
import { View, Image,StyleSheet, Text,Dimensions, TouchableOpacity } from 'react-native';
import VideoBtn from './VideoCallToggle';
import AudioBtn from './VoiceCallToggle';
import { Color } from '../../Utils/colorfile';
import MapPin from '../../assets/pinmap.png'
import genderM from '../../assets/genderM.png'
// import DialogInput from 'react-native-dialog-input';
import useAuth from '../../Hooks/useAuth';
import firestore from '@react-native-firebase/firestore';
const WIDTH =Dimensions.get("window").width;
// import ImagePicker from '@react-native-image-picker';
function MenuHeader (props) {
  const [responseGallery, setResponseGallery] = useState({});
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('no-name')
  const {user} = useAuth()
  console.log('mee', user)
  // const showDialog = () => {
  //   setVisible(true);
  // };

  // const handleCancel = () => {
  //   setVisible(false);
  // };

  // const handleUpdate = async (inputText) => {
  //     setVisible(false);
  //     setName(inputText)
  //   };


    
  //    if (name !== 'no-name'){
  //       firestore().collection('users').doc(user).update({
  //       Name:name
  //     }) 
  //   }
  
      
  // useEffect(()=>{
  //   firestore().collection("users").doc(user).get()
  //   .then((onSnapshot)=>{
  //     console.log('dataName',onSnapshot.data().Name)
  //     setName(onSnapshot.data().Name)
  //   })
  //     },[name])
  //     if(name!=='no-name')
  
// const picker = ()=>{
//   ImagePicker.launchImageLibrary(
//     {
//       mediaType: 'photo',
//       includeBase64: false,
//       maxHeight: 200,
//       maxWidth: 200,
//     },
//     (response) => {
//       setResponseGallery(response);
//       // console.log('uri', responseGallery.assets[0].uri)
//     },
//   )
// }
  // console.log('kk', responseGallery)
  
  return( 
    <>
  <View style={styles.heads}>   
     <View style={styles.profileitem}>
      <Logo />
      <Text style={styles.text}>{props.value}</Text>
      <Notification height={34} />
      {/* <Image source={notification} height={199} width={188} /> */}
     </View>
     <View style={styles.edit}>
         <View>
            <TouchableOpacity  style={styles.imagebox}>
                 <Image source={edit} />
            </TouchableOpacity>
            <Text style={styles.editsetting}>edit</Text>
         </View>
         <View  style={styles.imageProfile}>
           <TouchableOpacity  onPress={picker} style={styles.changeImage}>
             {
               responseGallery.assets ?
                  <Image
                   source={{uri: responseGallery.assets[0].uri}}
                    style={{width:100,height:100, borderRadius:50}} />:
                    <Image source={pic} style={{width:100,height:100, borderRadius:50}} />
             }
           </TouchableOpacity>
              <TouchableOpacity 
              // onPress={showDialog}
              >
                <Text style={styles.nametext}>{name} <Image source={genderM} style={{position:'absolute',top:20}} width={11} height={11} /></Text>
                </TouchableOpacity>   
            <Text style={styles.text}> 
            <Image source={MapPin} />Cibatak, Sukanumi, Jawa Barat</Text>
</View>
{/* <DialogInput isDialogVisible={visible}
            title={"Enter Name"}
            // message={"Message for DialogInput #1"}
            hintInput ={"Enter your name"}
            submitInput={ (inputText) => {handleUpdate(inputText)} }
            closeDialog={ handleCancel}>
</DialogInput> */}
            <View>
            <View  style={styles.imagebox}>
                 <Image source={setting} />
            </View>
            <Text style={styles.editsetting}>setting</Text>
            </View>
         </View>
            <View style={styles.btn}>
           <AudioBtn />
           <VideoBtn />
            </View>
     </View>
    </>
  )
                }
const styles = StyleSheet.create({
    heads: {
     width:WIDTH,
 height:WIDTH/1.3,
 backgroundColor:"#EE2B7A",
 position:"relative",
    },
    text:{
        color:Color.SECONDARY_COLOR,
        fontSize:18,
    },
    nametext:{
      color:Color.SECONDARY_COLOR,
      fontSize:22,
      fontWeight:"600",
    },
    edit:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    imagebox:{
        backgroundColor:'#F15294',
        width:50, 
        height:50,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    imageProfile:{
        alignItems:'center',
        
        // height:200,
        backgroundColor:Color.PRIMARY_COLOR
    },
    btn:{
      // flex:1,
      flexDirection:'row',
      // backgroundColor:'#A6A6A6',
    width:WIDTH*0.9,
     justifyContent:'space-around',
     padding:0,
     alignSelf:'center',
     position:'absolute',
     bottom:-25
    },
    editsetting:{
      color:Color.SECONDARY_COLOR,
      alignSelf:'center',
      fontSize:14,
    },
    profileitem:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:15,
      paddingVertical:15,
     paddingHorizontal:22
    },
    changeImage:{
       width:100,
      height:100,
       borderRadius:50,
       backgroundColor:"#fff"
    }
    
  });
export default MenuHeader;
