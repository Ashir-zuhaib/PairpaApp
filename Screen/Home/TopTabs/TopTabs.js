import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';
// import Card from '../../../Components/HomeComponents/FootPrintComponent/Card';
import FootPrint from './FootPrint';
import NoReply from './NoReply'
import Like from './Like'
import CallWaiting from './CallWaiting';
import { Color } from '../../../Utils/colorfile';
const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    // <View style={{paddingTop:10}}>
    <Tab.Navigator 
    screenOptions={{
      tabStyle: {
        width: 60,
        textAlign: 'right'
    },
        tabBarActiveTintColor: Color.PRIMARY_COLOR,
        tabBarInactiveTintColor: Color.INACTIVE_TOPBAR,
            style: {
              backgroundColor: Color.SECONDARY_COLOR,
              // paddingTop:50,
      
            },
            labelStyle: {
              // textAlign: 'center',
            },
            tabBarIndicatorStyle: {
              borderBottomColor: Color.PRIMARY_COLOR,
              borderBottomWidth: 3,
            },
            upperCaseLabel: false
          }}
            >
      <Tab.Screen name='No reply' component={NoReply}
      options={{
        tabBarLabelStyle: { fontSize:10, },
        
        
        }} 
        />
      <Tab.Screen name="Call waiting" component={CallWaiting}
      title={'Call waiting'}
      options={{
        tabBarLabelStyle: { fontSize: 9.7,},
        
        
        }} 
        />
      <Tab.Screen name="Foot prints" component={FootPrint} 
      options={{
        tabBarLabelStyle: { fontSize:10,},
        
        
        }}
        />
      <Tab.Screen name="Like!" component={Like}
      options={{
        tabBarLabelStyle: { fontSize:10,},
        
        
        }}
         />
    </Tab.Navigator>
    // </View>
  );
}
