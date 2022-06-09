import React from 'react';
import { Text,View,ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import MenuHeader  from "../../Components/MenuComponent/MenuHeader";
// import FootStepCard  from "../../../Components/MenuComponent/MenuIconComponents/FootStepsComponent/FootCard";
import FromMyPage from './FromMySelf'
import FromOtherPage from './FromOther';
// import Header from '../../../../Components/MenuComponent/MenuIconComponents/MenuHeader';
// import Search from '../../../../Components/MenuComponent/MenuIconComponents/MenuSearch';
// import { Color } from '../../../../Utils/colorfile';

    const Tab = createMaterialTopTabNavigator();

    export default function LikeTopStack() {
      return (
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
          <Tab.Screen name='From the other party' component={FromOtherPage}
          options={{
            tabBarLabelStyle: { fontSize: 11, },
            
            
            }} 
            />
          <Tab.Screen name="From myself" component={FromMyPage}
          title={'Call waiting'}
          options={{
            tabBarLabelStyle: { fontSize: 10, },
            
            
            }} 
            />
        </Tab.Navigator>
    
  );
}
