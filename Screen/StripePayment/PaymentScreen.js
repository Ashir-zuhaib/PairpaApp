import React, {useState, useEffect} from 'react'
import { View,Dimensions } from 'react-native';
import { CardField, useStripe,  } from '@stripe/stripe-react-native';
import {useNavigation} from '@react-navigation/core';
export default function PaymentScreen() {
  const navigation = useNavigation()
    const { confirmPayment } = useStripe();
    
  
    return (
      <View style={{flex:1,alignItems :'center'}}>
      <CardField
        postalCodeEnabled={false}
        placeholders={{
          number: '4242 4242 4242 4242',
          cvc:'333',
          expiration: "04/23"
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '80%',
          height: 100,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails) => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log('focusField', focusedField);
        }}
      />
      </View>
    );
  }