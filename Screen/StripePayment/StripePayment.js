import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { StripeProvider } from '@stripe/stripe-react-native'
import PaymentScreen from './PaymentScreen';
import {useNavigation} from '@react-navigation/core';

const Main = () => {
  // const navigation = useNavigation();
    const [publishableKey, setPublishableKey] = useState('');

    const fetchPublishableKey = async () => {
        const key = await fetchKey(); // fetch key from your server here
        setPublishableKey(key);
      };
    
      useEffect(() => {
        fetchPublishableKey();
      }, []);
    
  return (
    <StripeProvider
    publishableKey={publishableKey}
    merchantIdentifier="merchant.identifier"
  >
      <PaymentScreen />
    </StripeProvider >
  )
}

export default Main