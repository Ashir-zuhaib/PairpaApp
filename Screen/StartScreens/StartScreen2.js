import React from 'react'
import { StyleSheet, Text,Dimensions, View, Image } from 'react-native'
// import Background from '../Components/Background'
import Logo from '../../assets/pairpa.svg';
import StartImage from '../../assets/start.svg'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/core"
import { Color } from '../../Utils/colorfile';
import Phone from '../../assets/phone.svg'
const WIDTH =Dimensions.get("window").width;
export default function StartScreen2() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <Logo width={WIDTH*0.25} fill={Color.PRIMARY_COLOR} />
     <StartImage   />
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.text}>
            {/* <Phone height={20} width={20}/> */}
            Continue with Phone</Text>
      </TouchableOpacity>
     <Text style={{justifyContent:'center', alignItems:'center'}} > Don't have Acount? <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={styles.button1}>
          <Text style={styles.text1}>Sign Up</Text>
      </TouchableOpacity>
      </Text>
    </View>
    )}
    const styles = StyleSheet.create({
        text: {
          fontSize: 20,
        fontWeight:'700',
          color:Color.SECONDARY_COLOR
        },
        text1: {
          fontSize: 16,
          // lineHeight: 21,
        //   textAlign: 'center',
        //   marginTop:5,
          color:Color.PRIMARY_COLOR
        },
        button:{
            width:WIDTH*0.8,
            height:WIDTH/6  ,
            borderRadius:20,
            justifyContent:'center',
            alignItems:'center',
            marginTop:26,
            backgroundColor:Color.PRIMARY_COLOR,
        },
        container:{
          flex:1,
          backgroundColor:Color.SECONDARY_COLOR,
          justifyContent:'space-around',
         alignItems:'center',
       },
      })