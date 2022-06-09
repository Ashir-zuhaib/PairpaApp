import React from 'react'
import { StyleSheet, View,Text, Dimensions } from 'react-native'
import YoutubeIcon from '../../../../assets/youtube.svg'
import { Color } from '../../../../Utils/colorfile';
const WIDTH =Dimensions.get("window").width;
function YoutubeComp() {
  return (
    <View style ={styles.container}>
        <View style={{backgroundColor:'#FFFFFF42',width:70, height:25, borderRadius:21, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:Color.SECONDARY_COLOR}}>France</Text>
        </View>
        <YoutubeIcon />
        <View>
          <Text style={{color:Color.SECONDARY_COLOR}}>Iam dummy text, Iam dummy text Iam dummy sdfsdtext</Text>
          </View>

    </View>
  )
}
export default YoutubeComp
const styles = StyleSheet.create({
    container:{
      alignSelf:'center',
        width:WIDTH*0.9,
        borderRadius:9,
        backgroundColor:'#FF6666',
        height:136,
        paddingLeft:15,
        paddingTop:15,
        paddingRight:40,
        position:'absolute',
        top:230,
        // justifyContent:'space-around'
    }
})