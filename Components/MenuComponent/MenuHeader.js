import React,{useState, useEffect} from 'react';
// import notification from '../assets/notification21.png';
// import air from '../../assets/pairpa.png'
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
import DialogInput from 'react-native-dialog-input';
import useAuth from '../../Hooks/useAuth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
const WIDTH =Dimensions.get("window").width;
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
function MenuHeader (props) {
  const [responseGallery, setResponseGallery] = useState(null);
  // const [selectImage, setSelectImage] = useState()
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState(null)
  const [user1, setuser] = useState(null)
  const {user} = useAuth()
  console.log('mee', user1)
  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleUpdate = async (inputText) => {
    firestore().collection('Users').doc(user1).update({
            Name:inputText
          })
    setName(inputText)
    setVisible(false);
    };


    
  //    if (name !== 'no-name'){
  //       firestore().collection('users').doc(user).update({
  //       Name:name
  //     }) 
  //   }
  const getName = async ()=>{
    try{
      console.log('ggh',user1)
      const valueId = await AsyncStorage.getItem('@userData')
     await firestore().collection("Users").doc(valueId)
     .onSnapshot((onSnapshot)=>{
       console.warn('dataName',onSnapshot.exists)
       console.log('na',onSnapshot.data().Name )
       setName(onSnapshot.data())

      })
    }
    catch(e){
      console.warn('error', e)
    }
  }
      
  useEffect(()=>{
    
    getImage()
    setuser(user)
    getName()
      },[])
const picker =()=>{
  launchImageLibrary({
           mediaType: 'photo',
           includeBase64: false,
           maxHeight: 200,
           maxWidth: 200,
         }, (response) => { // Use launchImageLibrary to open image gallery
    console.log('Response = ', response);
    
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = { uri: response.assets[0].uri };
      const reference = storage().ref(source.uri);
      const task = reference.putFile(source.uri);
      task.on('state_changed', taskSnapshot => {
        console.log(`${taskSnapshot.bytesTransferred} transferred 
        out of ${taskSnapshot.totalBytes}`);
      });
      task.then(() => {
        console.log('Image uploaded to the bucket!');
      });
      console.log(source)
    }
  });}
  const getImage = async()=>{
    // var storage = firebase.storage();
    const url = await storage().refFromURL('gs://pairpadashboard.appspot.com/file:/data/user/0/com.pairpa/cache/rn_image_picker_lib_temp_69f25e5b-ebfa-442a-bc21-4ec91519df68.jpg')
    .getDownloadURL();
    // reference.list({ pageToken }).then((result) => {
    //   result.items.forEach((ref) => {
    //     console.log("ref  ->>  ", JSON.stringify(ref));
    //   });
    setResponseGallery(url)
    console.log('imzgd', url)

  }
  return( 
    <>
  <View style={styles.heads}>   
     <View style={styles.profileitem}>
      <Logo />
      <Text style={styles.text}>{props.value}</Text>
      <Notification height={34} />
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
               responseGallery ? 
                  <Image
                   source={{uri: responseGallery}}
                    style={{width:100,height:100, borderRadius:50}} />:
                    <Image source={pic} style={{width:100,height:100, borderRadius:50}} />
             }
           </TouchableOpacity>
              <TouchableOpacity 
              onPress={showDialog}
              >
                <Text style={styles.nametext}>{name? name.Name : 'no-name'} <Image source={genderM} style={{position:'absolute',top:20}} width={11} height={11} /></Text>
                </TouchableOpacity>   
            <Text style={styles.text}> 
            <Image source={MapPin} />Cibatak, Sukanumi, Jawa Barat</Text>
</View>
<DialogInput isDialogVisible={visible}
            title={"Enter Name"}
            // message={"Message for DialogInput #1"}
            hintInput ={"Enter your name"}
            submitInput={ (inputText) => {handleUpdate(inputText)} }
            closeDialog={ handleCancel}>
</DialogInput>
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
