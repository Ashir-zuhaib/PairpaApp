
//phone Sign in page
import BackButton from '../../Components/BackButton/BackButton';
import React, {useState, useRef} from 'react';
import {
  Button,
  TextInput,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/core';
import PhoneInput from 'react-native-phone-number-input';
import {Color} from '../../Utils/colorfile';
import StartImage1 from '../../assets/phoncode.svg';
import firestore from '@react-native-firebase/firestore';
import Otp from '../../assets/otp.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';
const WIDTH = Dimensions.get('window').width;
function PhoneSignIn() {
  // If null, no SMS has been sent
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [verifyNum, setVerifyNum]= useState('')
  const phoneInput = useRef(null);
  // Handle the button press
 function signInWithPhoneNumber() {
   firestore().collection('Users').where("phoneNumber","==",phoneNumber).get()
    .then((querySnapshot) => {
      if(querySnapshot.size==0){
        alert('Please Sign up first')
      }
      else{
        
        querySnapshot.forEach(async(doc) => {            
              console.warn(doc.id, "=>", doc.data().phoneNumber);
              setVerifyNum(doc.data().phoneNumber)
              // const jsonValue = JSON.stringify(doc.data())
              await AsyncStorage.setItem('@userData', doc.data().userId)
              // console.log(jsonValue)
              //performing phone authentication
        const confirmation = await auth().signInWithPhoneNumber(doc.data().phoneNumber)
        
        console.log('cr', confirmation)
            setConfirm(confirmation)
      })}
    })
  .catch((e)=>alert("error",e.message)) 
      }
  const handleChange = e => {
    // getting otp code from input field
    setCode(e);
  };
  async function confirmCode() {
    try {
      //confirming otp
      await confirm.confirm(code);
      // const jsonValue  =  AsyncStorage.getItem('@userData')
      // const int = jsonValue != null ? JSON.parse(jsonValue) : null;

      getData()
      //if otp success user auth data save in async storage
    } catch (error) {
      // const int = jsonValue != null ? JSON.parse(jsonValue) : null;
      //if failed errpr willshow
      alert('Error', error)
    }
  }
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@userData')
      console.log('ff', jsonValue)
    } catch(e) {
      // error reading value
      console.log(e)
    }
  }
  if (!confirm) {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.back}>
          <BackButton
            colorText={Color.PRIMARY_COLOR}
            goBack={navigation.goBack}
          />
        </View>
        <View>
          <StartImage1
            height={WIDTH / 2.9}
            width={WIDTH * 0.8}
            style={styles.logo}
          />
        </View>
        <View style={styles.verifybox}>
          <Text style={styles.verifyphone}>Verify Phone</Text>
          <Text style={styles.verifytext}>
            Enter your phone number, We will send You a code to make sure it's
            you
          </Text>
        </View>
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="PK"
          layout="first"
          withShadow
          autoFocus
          containerStyle={styles.phoneNumberView}
          textContainerStyle={{paddingVertical: 0}}
          onChangeFormattedText={text => {
            setPhoneNumber(text);
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => signInWithPhoneNumber()}>
          <Text style={styles.buttonText}>Send Code</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.last}>
            We will send you ONE time SMS message Carrier rates may apply
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={OTPstyles.container}>
      <View style={OTPstyles.back}>
        <BackButton goBack={navigation.goBack} />
      </View>
      <View style={OTPstyles.logoBox}>
        <StartImage1
          height={WIDTH / 2.6}
          width={WIDTH * 0.8}
          style={OTPstyles.logo}
        />
      </View>
      <View style={OTPstyles.otpAboveBox}>
        <Text style={OTPstyles.otpAboveText}>Confirmation</Text>
        <View style={OTPstyles.verifybox}>
          <Text>
            <Otp />
          </Text>
          <Text style={OTPstyles.verifytext}>
            Please type the verification code sent to {phoneNumber}
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={OTPstyles.textInputStyle}
          type="number"
          keyboardType="numeric"
          onChangeText={e => {
            handleChange(e);
          }}
          value={code}
          maxLength={15}
          placeholder="-"
        />
      </View>

      <TouchableOpacity style={OTPstyles.button} onPress={() => confirmCode()}>
        <Text style={OTPstyles.text}>CONFIRM</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: Color.SECONDARY_COLOR,
  },
  text1: {
    fontSize: 16,
    color: Color.PRIMARY_COLOR,
  },
  logo: {
    alignSelf: 'center',
  },
  button: {
    width: WIDTH * 0.2,
    height: 56,
    borderRadius: 20,
    marginHorizontal: 78,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
    backgroundColor: Color.PRIMARY_COLOR,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Color.SECONDARY_COLOR,
    alignItems: 'center',
  },
  back: {
    flex: 0.1,
    width: WIDTH * 0.2,
    height: WIDTH / 2,
    marginTop: 10,
    marginLeft: 15,
    alignSelf: 'flex-start',
    paddingTop: 10,
    paddingBottom: 0,
  },
  verifybox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH * 0.7,
  },
  verifyphone: {
    color: Color.CARDNAME,
    fontSize: 19,
    fontWeight: '400',
    marginTop: 15,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 20,
    color: Color.BLACK,
  },
  phoneNumberView: {
    width: WIDTH * 0.8,
    height: WIDTH / 6,
    backgroundColor: 'white',
  },
  button: {
    width: 228,
    height: 56,
    borderRadius: 20,
    marginHorizontal: 78,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
    backgroundColor: Color.PRIMARY_COLOR,
  },

  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  last: {
    textAlign: 'center',
    fontSize: 16,
    color: Color.CARD_TEXT,
    marginTop: 15,
    marginHorizontal: 30,
  },
});
const OTPstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.SECONDARY_COLOR,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  back: {
    flex: 0.1,
    width: WIDTH * 0.2,
    height: WIDTH / 2,
    marginTop: 10,
    marginLeft: 15,
    alignSelf: 'flex-start',
    paddingTop: 10,
    paddingBottom: 0,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: Color.SECONDARY_COLOR,
  },
  text1: {
    fontSize: 16,
    color: Color.PRIMARY_COLOR,
  },
  button: {
    width: WIDTH * 0.7,
    height: WIDTH / 7,
    borderRadius: 20,
    marginHorizontal: 78,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
    backgroundColor: Color.PRIMARY_COLOR,
  },
  textInputStyle: {
    width: WIDTH * 0.7,
    height: WIDTH / 7,
    borderRadius: 5,
    borderColor: Color.BLACK,
    textAlign: 'center',
    marginHorizontal: 10,
    borderStyle: 'dotted',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: Color.PRIMARY_COLOR,
  },
  logoBox: {
    width: WIDTH,
  },
  logo: {
    alignSelf: 'center',
  },
  otpAboveBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  otpAboveText: {
    color: Color.CARDNAME,
    fontSize: 17,
    fontWeight: '400',
    marginTop: 10,
  },
  verifybox: {
    flexDirection: 'row',
  },
  verifytext: {
    textAlign: 'center',
    color: Color.CARD_TEXT,
  },
});
export default PhoneSignIn;
