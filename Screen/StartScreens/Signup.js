import { View,StyleSheet, Text,TextInput,Dimensions,TouchableOpacity } from 'react-native'
import React,{useState, useRef} from 'react'
import Logo from '../../assets/pairpa.svg'
import { Color } from '../../Utils/colorfile';
import PhoneInput from 'react-native-phone-number-input';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
const WIDTH = Dimensions.get('window').width;
const Signup = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const phoneInput = useRef(null);
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    
    const get = ()=>{
      firestore().collection('Users').where("phoneNumber","==",phoneNumber).get()
      .then((querySnapshot) => {
        if(querySnapshot.size==0){
          auth()
          .createUserWithEmailAndPassword(email,password)
          .then(async(e) => {
            console.log('User account created & signed in!');
            const jsonValue = JSON.stringify(e.user.uid)
            await AsyncStorage.setItem('@userId', jsonValue)
            console.log('async', jsonValue)
            firestore().collection('Users').doc().set(
                {
                    phoneNumber:phoneNumber,
                    email:email,
                    password:password,
                    userId: e.user.uid,
                    status:firestore.FieldValue.serverTimestamp
                }
            ).then(()=>{console.log('data added')});
          })
          .catch(error => {
              console.log(error)
            })
        }
        else{
          alert('User Already Exist')
        }
      })
       
        
    }
  return (
    <View style={styles.container}>
        <View style={styles.logo}>
     <Logo width={120} height={80} fill={Color.PRIMARY_COLOR} />
      </View>
      <View style={{flex:1, width:'80%'}}>
          <View >
              <Text style={styles.text}>Phone Number</Text>
              <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="PK"
          layout="first"
          autoFocus
          containerStyle={styles.phoneNumberView}
          textContainerStyle={{paddingVertical: 0}}
          onChangeFormattedText={text => {
            setPhoneNumber(text);
          }}
        />
          </View>
          <View>
              <Text style={styles.text}>Email</Text>
              <TextInput 
              placeholder='Email'
              keyboardType='email-address'
              style={styles.input}
              onChangeText={text=>setEmail(text)}/>
          </View>
          <View>
              <Text style={styles.text}>Password</Text>
              <TextInput 
              placeholder='Password'
              secureTextEntry={true}
              style={styles.input}
              onChangeText={text =>setPassword(text)}/>
          </View>
      <TouchableOpacity onPress={get} style={styles.btn}>
          <Text style={styles.signtext}>Sign Up</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
         alignItems:'center'
},
    input: {
        height:WIDTH /7,
        alignItems: 'center',
        backgroundColor:Color.SECONDARY_COLOR
      },
      text:{
        fontSize:22,
        fontWeight:'bold'
      },
      phoneNumberView: {
        width: WIDTH * 0.8,
        height: WIDTH / 8,
        backgroundColor: 'white',
      },
      btn:{
          width:WIDTH/2.7,
          height:WIDTH/7,
          backgroundColor:Color.PRIMARY_COLOR,
          borderRadius:15,
        //   marginHorizontal:78,
          marginTop:16,
          borderWidth:2,
          alignSelf:'center',
          justifyContent:'center',
          alignItems:'center',
          borderColor:Color.SECONDARY_COLOR,
          backgroundColor:Color.PRIMARY_COLOR
      },
      logo:{
          justifyContent:'center',
      alignItems:'center',
       flex:0.7
    },
    signtext:{
        color:Color.SECONDARY_COLOR,
         fontWeight:'bold', 
    fontSize:18
}
})

export default Signup