import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';
import Card from '../../../Components/HomeComponents/FootPrintComponent/Card';
import FootPrint from './FootPrint666';
import NoReply from './NoReply666'
import Like from './Like666'
import CallWaiting from './CallWaiting666';
;

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    // <View style={{paddingTop:10}}>
    <Tab.Navigator 
    screenOptions={{
        tabBarActiveTintColor: '#EE2A7B',
        tabBarInactiveTintColor: '#00000054',
            style: {
              backgroundColor: '#ffffff',
              paddingTop:50,
      
            },
            labelStyle: {
              textAlign: 'center',
            },
            tabBarIndicatorStyle: {
              borderBottomColor: '#EE2B7A',
              borderBottomWidth: 2,
            },
            upperCaseLabel: false
          }}
            >
      <Tab.Screen name='No reply' component={NoReply}
      options={{
        tabBarLabelStyle: { fontSize: 11, },
        
        
        }} 
        />
      <Tab.Screen name="Call waiting" component={CallWaiting}
      title={'Call waiting'}
      options={{
        tabBarLabelStyle: { fontSize: 10, },
        
        
        }} 
        />
      <Tab.Screen name="Foot prints" component={FootPrint} 
      options={{
        tabBarLabelStyle: { fontSize: 11,  },
        
        
        }}
        />
      <Tab.Screen name="Like!" component={Like}
      options={{
        tabBarLabelStyle: { fontSize: 11,  },
        
        
        }}
         />
    </Tab.Navigator>
    // </View>
  );
}
