import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../StartScreens/StartScreen';
import StartScreen2 from '../StartScreens/StartScreen2';
import Login from '../StartScreens/Login';
import BottomNavigator from '../BottomNavigator/BottomNavigator';
import FootStep from '../MenuTab/StackNavigator/FootSteps';
import FavoriteStack from '../MenuTab/StackNavigator/FavoriteStack/FavoriteStack';
import LikeStack from '../MenuTab/StackNavigator/LikeStack/Like';
import MySelfProfile from '../../Components/MenuComponent/MenuIconComponents/LikeStackComponents/FromMySelf/MySelfProfile';
import OtherLikeProfile from '../../Components/MenuComponent/MenuIconComponents/LikeStackComponents/FromOther/OtherLikeProfile';
import Misson from '../MenuTab/StackNavigator/MissonStack/MissonStack';
import DailyBonus from '../MenuTab/StackNavigator/DailyBonusStack.js/DailyBonus';
import ConfigScreen from '../MenuTab/ConfigStack/ConfigScreen';
import ChatScreen from '../ChatScreen/ChatScreen';
// import useAuth from '../../Hooks/useAuth';
import { Color } from '../../Utils/colorfile';
import useAuth from '../../Hooks/useAuth';
import Signup from '../StartScreens/Signup';
import PaymenScreen1 from '../StripePayment/PaymentScreen1';
import PricingScreen from '../StripePayment/PricingScreen';
// import PaymentScreen from '../StripePayment/PaymentScreen';
const StackNavigation =  () => {
  const Stack = createStackNavigator();
  // getting user data from useAuth page
  const {user} = useAuth()
  
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
      }}>
        
      {user ? ( //checking if user signed in or not 
        <> 
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={{ headerShown: false}} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerShown:false}}
        //  options={{
        //   title: 'Chat',
        //   headerStyle: {
        //     backgroundColor: Color.PRIMARY_COLOR,
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        // }}
          />
        <Stack.Screen name="PricingScreen" component={PricingScreen} options={{
          title: 'Select Pricing',
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: Color.PRIMARY_COLOR,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>      
        <Stack.Screen name="PaymentScreen" component={PaymenScreen1} options={{
          title: 'Enter Details',
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: Color.PRIMARY_COLOR,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf:'center'
          },
        }}/>      
        <Stack.Screen name="FootStep" component={FootStep} options={{ headerShown: false}} />
        <Stack.Screen name="FavoriteStack" component={FavoriteStack} options={{ headerShown: false}}/>
        <Stack.Screen name="LikeStack" component={LikeStack} options={{ headerShown: false}}/>
        <Stack.Screen name="MySelfProfile" component={MySelfProfile} options={{ headerShown: false}}/>
        <Stack.Screen name="OtherLikeProfile" component={OtherLikeProfile} options={{ headerShown: false}}/>
        <Stack.Screen name="Misson" component={Misson} options={{ headerShown: false}}/>
        <Stack.Screen name="DailyBonus" component={DailyBonus} options={{ headerShown: false}}/>
        <Stack.Screen name="Configuration" component={ConfigScreen} options={{ headerShown: false}}/>      
        </>
      ): (
        <>
      <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false}} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false}} />
      <Stack.Screen name="StartScreen2" component={StartScreen2} options={{ headerShown: false}} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={{ headerShown: false}} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
      <Stack.Screen name="PricingScreen" component={PricingScreen} options={{ headerShown: false}}/>      
        <Stack.Screen name="PaymentScreen" component={PaymenScreen1} options={{ headerShown: false}}/>      
        <Stack.Screen name="FootStep" component={FootStep} options={{ headerShown: false}} />
        <Stack.Screen name="FavoriteStack" component={FavoriteStack} options={{ headerShown: false}}/>
        <Stack.Screen name="LikeStack" component={LikeStack} options={{ headerShown: false}}/>
        <Stack.Screen name="MySelfProfile" component={MySelfProfile} options={{ headerShown: false}}/>
        <Stack.Screen name="OtherLikeProfile" component={OtherLikeProfile} options={{ headerShown: false}}/>
        <Stack.Screen name="Misson" component={Misson} options={{ headerShown: false}}/>
        <Stack.Screen name="DailyBonus" component={DailyBonus} options={{ headerShown: false}}/>
        <Stack.Screen name="Configuration" component={ConfigScreen} options={{ headerShown: false}}/>      
        
      </>
        )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
