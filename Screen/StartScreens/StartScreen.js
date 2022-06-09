import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from '../../assets/pairpa.svg'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/core"
import { Color } from '../../Utils/colorfile';
export default function StartScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{justifyContent:'center',alignItems:'center', flex:1}}>
     <Logo width={140} height={100} fill={Color.PRIMARY_COLOR} />
      </View>
     <View style={{height:300, alignItems:'center'}}>
     <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('StartScreen2')}>
          <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={styles.button1}>
          <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
     </View>
    </View>
    )}
    const styles = StyleSheet.create({
      container:{
        flex:1,
        justifyContent:'center'

      },
        text: {
          fontSize: 20,
          color:'#ffffff'
        },
        button:{
            width:228,
            height:56,
            borderRadius:20,
            marginHorizontal:78,
            justifyContent:'center',
            alignItems:'center',
            marginTop:26,
            backgroundColor:Color.PRIMARY_COLOR,
        },
        button1:{
            width:228,
            height:56,
            borderRadius:20,
            marginHorizontal:78,
            marginTop:16,
            borderWidth:2,
            justifyContent:'center',
            alignItems:'center',
            borderColor:'#ffffff',
            backgroundColor:Color.PRIMARY_COLOR
        }
      })