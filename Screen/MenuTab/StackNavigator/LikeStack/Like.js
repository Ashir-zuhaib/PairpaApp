import React from 'react';
import { Text,View,ScrollView, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FromMyPage from './LikeTopTabs/FromMySelf';
import FromOtherPage from './LikeTopTabs/FromOther';
import Header from '../../../../Components/MenuComponent/MenuIconComponents/MenuHeader';
import Search from '../../../../Components/MenuComponent/MenuIconComponents/MenuSearch';
import LikeTopStack from './LikeTopTabs/TopTabsBoth'
import {Color} from '../../../../Utils/colorfile'
    const Tab = createMaterialTopTabNavigator();

export default function LikeStack() {
      return (
       <>
       <Header value="Like" />
       <View style={{ 
    backgroundColor:'#fff',
   height:30
}}></View>
       <Search />
       <LikeTopStack />
       </>
    
  );
}
const styles= StyleSheet.create()
