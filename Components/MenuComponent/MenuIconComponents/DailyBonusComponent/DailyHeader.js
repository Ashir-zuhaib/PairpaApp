import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Point from '../../../../assets/point2.svg'
import { Color } from '../../../../Utils/colorfile'
import BackButton from '../../../BackButton/BackButton'
function DailyHeader(props) {
    const navigation = useNavigation()
  return (
        <View style={styles.heads}>
    <View style={{flexDirection:'row',justifyContent:'space-between', marginHorizontal:15,marginTop:20 }}>
   <View style={{alignSelf:'flex-start'}}>
    <BackButton goBack={navigation.goBack} />
</View>
<View >
    <Text style={{fontSize:16, fontWeight:'500', color:Color.CARDNAME}}>{props.value}</Text>
</View>
<View></View>
    </View>
    <View style={styles.icon}>
                  <Point width={90} height={90} />
                <Text style={styles.pointsText}>+5pts</Text>
                  <Text>Earn daily bonus</Text>
              </View>
        </View>
  )
}

export default DailyHeader
const styles = StyleSheet.create({
    heads: {
    //  width:"100%",
 height:300,
 backgroundColor:"#F8E0EB",
//  position:"relative",
    },
    icon:{
        backgroundColor:'#F8E0EB',
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        marginTop:60,
        marginHorizontal:'37%',
        borderRadius:10,
    },
    pointsText:{
        color:Color.PRIMARY_COLOR,
        fontSize:17,
        
    }
})