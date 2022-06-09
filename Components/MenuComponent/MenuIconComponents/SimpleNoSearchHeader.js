import React from 'react'
import { StyleSheet, View,Text, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Color } from '../../../Utils/colorfile'
import BackButton from '../../BackButton/BackButton'
const WIDTH =Dimensions.get("window").width;
function SimpleNoSearchHeader(props) {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-between', marginHorizontal:15,marginTop:30 }}>
   <View style={{alignSelf:'flex-start'}}>
    <BackButton goBack={navigation.goBack} />
</View>
<View >
    <Text style={{fontSize:16, fontWeight:'500', color:Color.SECONDARY_COLOR}}>{props.value}</Text>
</View>
<View></View>
    </View>
    </View>
  )
}

export default SimpleNoSearchHeader
const styles= StyleSheet.create({
    container:{
        width:WIDTH,
        height:WIDTH/3.6,
        backgroundColor:Color.PRIMARY_COLOR,

    }
})