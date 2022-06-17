import { View, Text, Dimensions, Touchable, TouchableHighlight } from 'react-native'
import React from 'react'
import { Color } from '../../Utils/colorfile';
import {useNavigation} from '@react-navigation/core';
const WIDTH =Dimensions.get("window").width;
const PricingScreen = () => {
  const navigation = useNavigation()
  return (
    
      <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
      <View style={{height:200, width:WIDTH*0.9,borderWidth:2,borderRadius:10, borderColor:Color.PRIMARY_COLOR,flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
        <View style={{padding:10,flex:0.6, flexDirection:'row'}} >
        <Text style={{fontSize:22, fontWeight:'bold', }}>
          Get 25 Pairpa Points in Just 5$
        </Text>
      </View>
        <TouchableHighlight
         style={{height:50,flex:0.3,borderRadius:10,   backgroundColor:Color.PRIMARY_COLOR,borderWidth:2, alignItems:'center', justifyContent:'center', }}
         onPress={()=>navigation.navigate('PaymentScreen',{
          amount:5,
          points:25})}>
          <Text style={{fontWeight:'800',color:Color.SECONDARY_COLOR, fontSize:22,alignItems:'center', justifyContent:'center' }}>Get Offer
          </Text></TouchableHighlight>
        </View>
      <View style={{marginTop:10,height:200, width:WIDTH*0.9,borderWidth:2,borderRadius:10, borderColor:Color.PRIMARY_COLOR,flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
        <View style={{padding:10,flex:0.6, flexDirection:'row'}} >
        <Text style={{fontSize:22, fontWeight:'bold', }}>
          Get 100 Pairpa Points in Just 15$
        </Text>
      </View>
        <TouchableHighlight
         style={{height:50,flex:0.3,borderRadius:10,   backgroundColor:Color.PRIMARY_COLOR,borderWidth:2, alignItems:'center', justifyContent:'center', }}
         onPress={()=>navigation.navigate('PaymentScreen',{amount:15,points:100 })}>
          <Text style={{fontWeight:'800',color:Color.SECONDARY_COLOR, fontSize:22,alignItems:'center', justifyContent:'center' }}>Get Offer
          </Text></TouchableHighlight>
        </View>      
      </View>
    
  )
}

export default PricingScreen