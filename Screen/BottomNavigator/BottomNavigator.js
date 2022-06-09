import React from 'react';
import Home from '../Home/Home';
import MessageTab from '../MessageTab/MessageTab'
import PointTab from '../PointTab/PointsTab'
import Tab666 from '../Tab666/Tab666'
import Menu from '../MenuTab/Menu'
import point from '../../assets/point.png'
import calender from '../../assets/calender.png'
import MenuIcon  from '../../assets/menuIcon.png'
import HomeIcon from '../../assets/home.png'
import Card from '../../Components/HomeComponents/FootPrintComponent/Card'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import messageIcon from '../../assets/message.png'
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
const BottomNavigator= ()=> {
  // const {userData} = route.params;
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor: '#EE2B7A',
      tabBarInactiveTintColor: '#D6D6D6',
      headerShown: false
    }}
    >
      <Tab.Screen
       name="Home" 
       component={Home}
      //  initialParams={{userData}}
      options={{
        tabBarIcon: () => <Image source={HomeIcon} />,
      }}
      
      
       />
      <Tab.Screen name="MESSAGE" component={MessageTab} options={{
        tabBarIcon: ({focused}) => <Image source={messageIcon} color={focused ? 'white' : 'black'}  />,
      }} />
      <Tab.Screen name="POINT" component={PointTab} options={{
        tabBarIcon: () => <Image source={point}  />,
      }} />
      <Tab.Screen name="666" component={Tab666} options={{
        tabBarIcon: () => <Image source={calender}  />,
      }} />
      <Tab.Screen name="MENU" component={Menu} options={{
        tabBarIcon: () => <Image source={MenuIcon} /> ,
      }} />
    </Tab.Navigator>
  );
}
export default BottomNavigator