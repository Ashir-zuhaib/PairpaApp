import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  ImageBackground,
  Touchable,
  ActivityIndicator,
} from 'react-native';
import WebView from 'react-native-webview';
import {CreditCardInput} from 'react-native-credit-card-input';
import KEY from '../../Utils/Key';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Color} from '../../Utils/colorfile';
import {ScrollView} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import useAuth from '../../Hooks/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../Components/Header';
// import {strings} from '../Utils/Localization';
// import {useDispatch, useSelector} from 'react-redux';
// create a component
const CURRENCY = 'USD';
var CARD_TOKEN = null;

function getCreditCardToken(creditCardData) {
  // alert()
  const card = {
    'card[number]': creditCardData.values.number.replace(/ /g, ''),
    'card[exp_month]': creditCardData.values.expiry.split('/')[0],
    'card[exp_year]': creditCardData.values.expiry.split('/')[1],
    'card[cvc]': creditCardData.values.cvc,
  };
  return fetch('https://api.stripe.com/v1/tokens', {
    headers: {
      // Use the correct MIME type for your server
      Accept: 'application/json',
      // Use the correct Content Type to send data to Stripe
      'Content-Type': 'application/x-www-form-urlencoded',
      // Use the Stripe publishable key as Bearer
      Authorization: `Bearer ${KEY.Stripe_Publishable_key}`,
    },
    // Use a proper HTTP method
    method: 'post',
    // Format the credit card data to a string of key-value pairs
    // divided by &
    body: Object.keys(card)
      .map(key => key + '=' + card[key])
      .join('&'),
  })
    .then(response => response.json())
    .catch(error => console.log(error));
}
/**
 * The method imitates a request to our server.
 *
 * @param creditCardToken
 * @return {Promise<Response>}
 */
function subscribeUser(creditCardToken) {
  return new Promise(resolve => {
    console.log('Credit card token\n', creditCardToken);
    CARD_TOKEN = creditCardToken.id;
    setTimeout(() => {
      resolve({status: true});
    }, 1000);
  });
}

const PaymentScreen = ({route, navigation}) => {
  const {amount, points} = route.params;
  //console.warn(points);
  // const {user} = useAuth();
  const trancId = firestore().collection('transactions').doc().id;
  const [CardInput, setCardInput] = React.useState({});
  const [recipt, setRecipt] = React.useState('');
  const [modal, setModal] = React.useState(false);
  const [stripe, setStripe] = React.useState(true);
  const [paypal, setPaypal] = React.useState(false);
  const [pointServer, setPoints] = React.useState(0);
  const [loader, setLoader] = useState(false);
  // const [ point, setPoint] = useState('')
  // const dispatch = useDispatch();
  // const pointsRedux = useSelector(state => state.common.points);
  const _onChange = data => {
    setCardInput(data);
    // console.log(data)
  };
  const onSubmit = async () => {
    setLoader(true);
    if (CardInput.valid == false || typeof CardInput.valid == 'undefined') {
      alert('Invalid Credit Card');
      return false;
    }

    let creditCardToken;
    try {
      // Create a credit card token
      creditCardToken = await getCreditCardToken(CardInput);
      // console.log("creditCardToken", creditCardToken)
      if (creditCardToken.error) {
        alert('creditCardToken error');
        return;
      }
    } catch (e) {
      console.log('e', e);
      return;
    }
    // Send a request to your server with the received credit card token
    const {error} = await subscribeUser(creditCardToken);
    // Handle any errors from your server
    if (error) {
      alert(error);
    } else {
      let pament_data = await charges();
      console.log(pament_data);
      // console.log('pament_data', pament_data.receipt_url);
      // console.log("Transaction ID," ,pament_data.)
      setRecipt(pament_data.receipt_url);
      if (pament_data.status == 'succeeded') {
        //alert('Payment Successfully');
        // console.log('Actual Points', pointServer);

        const am = pointServer + parseInt(points);
        // dispatch({
        //   type: 'SET_POINTS',
        //   payload: {
        //     points: am,
        //   },
        // });

        console.log('Actual Points', am);
        await AsyncStorage.setItem('@userPoint',toString(am) )
        const use = await AsyncStorage.getItem('@userData')
        console.log('Actual Points', use);
       await firestore()
          .collection('Users')
          .doc(use)
          .update({
            point: parseInt(am),
          })
          .then(() => {
            setLoader(false);
            setModal(true);
            // console.warn('Redux Points', pointsRedux);
          })
          
          .then(() => {
            firestore()
            .collection('transactionHistory')
            .doc(trancId)
            .set({
              userId: use,
              amount: amount,
              // pointsId: id,
              transaction: trancId,
            })
            .catch((e)=>{
              console.log('erroreee', e)
              alert('Try Again',e)
          });
            
              
          });
      } else {
        alert('Payment failed');
      }
    }
  };
  const charges = async () => {
    const card = {
      amount: amount * 100,
      currency: CURRENCY,
      source: CARD_TOKEN,
      description: 'Card purchasing',
    };

    return fetch('https://api.stripe.com/v1/charges', {
      headers: {
        // Use the correct MIME type for your server
        Accept: 'application/json',
        // Use the correct Content Type to send data to Stripe
        'Content-Type': 'application/x-www-form-urlencoded',
        // Use the Stripe publishable key as Bearer
        Authorization: `Bearer ${KEY.Stripe_Secret_key}`,
      },
      // Use a proper HTTP method
      method: 'post',
      // Format the credit card data to a string of key-value pairs
      // divided by &
      body: Object.keys(card)
        .map(key => key + '=' + card[key])
        .join('&'),
    }).then(response => response.json());
  };

  // const handleResponse = data => {
  //   console.log('Response Change', data);
  //   setPaypal(false);
  // };
  const getDatause = async () => {
    try {
      const valueId = await AsyncStorage.getItem('@userData')
      firestore()
  .collection('Users')
  .doc(valueId)
  // .get()
  .onSnapshot(e => {
    setPoints(e.data().point);
    console.warn('User Points', e.data().point);
  })
    } catch(e) {
      console.log('errps', e)
      // error reading value
    }
  }
// const  getting = async ()=>{
//  await firestore()
//   .collection('Users')
//   .doc(user)
//   // .get()
//   .onSnapshot(e => {
//     setPoints(e.data().point);
//     console.warn('User Points', e.data().point);
//   })

  useEffect(() => {
  getDatause()
      // .catch((e)=>{console.log('ee',e)});
  }, []);
  return (
    <View 
    // source={require('../assets/bg.png')}
     style={{flex: 1}}
    >
      
      <ScrollView contentContainerStyle={{}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 50,
            justifyContent: 'space-between',
            marginLeft: 50,
            marginRight: 50,
          }}>
            
          {/* <TouchableOpacity
            style={{
              alignSelf: 'center',
              backgroundColor: '#008cdd',
              width: '40%',
              height: 50,
              justifyContent: 'center',
              borderRadius: 20,
            }}
            onPress={() => {
              setStripe(true);
              setPaypal(false);
            }}>
            <Text
              style={{
                alignSelf: 'center',
                color: 'purple',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              stringsstripe
            </Text>
          </TouchableOpacity> */}



          {/* <TouchableOpacity
            style={{
              alignSelf: 'center',
              backgroundColor: '#3b7bbf',
              width: '40%',
              height: 50,
              justifyContent: 'center',
              borderRadius: 20,
            }}
            onPress={() => {
              setPaypal(true);
              setStripe(false);
            }}>
            <Text
              style={{
                alignSelf: 'center',
                color: Color.SECONDARY_COLOR,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              stringspaypal
            </Text>
          </TouchableOpacity> */}
        </View>
        {/* {paypal ? (
          <Modal visible={paypal}>
            <View
              style={{
                height: 50,
                width: '100%',
                backgroundColor: Color.PRIMARY_COLORLOR,
                justifyContent: 'center',
                padding: 10,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => setPaypal(!paypal)}>
                  <Text
                    style={{
                      color: Color.SECONDARY_COLOR,
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>

                <Text
                  style={{
                    color: Color.SECONDARY_COLOR,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  Paypal Payment
                </Text>
                <Text></Text>
              </View>
            </View>
            <WebView
              source={{
                uri: 'https://gachapaypalapi.herokuapp.com/paypal/' + amount,
              }}
              style={{
                flex: 1,
              }}
              startInLoadingState={true}
              onMessage={data => handleResponse(data)}
            />
          </Modal>
        ) : null} */}
        {stripe ? (
          <>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Stripe_logo%2C_revised_2016.png/1200px-Stripe_logo%2C_revised_2016.png',
              }}
              style={styles.ImgStyle}
            />
            <CreditCardInput
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              validColor="#fff"
              placeholderColor="#000"
              onChange={_onChange}
            />

            <TouchableOpacity onPress={onSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Pay Now</Text>
            </TouchableOpacity>

            {loader ? (
              <ActivityIndicator size={'large'} color={Color.PRIMARY_COLOR} />
            ) : null}
            {modal ? (
              <Modal visible={modal} transparent={true} animationType="slide">
                <View
                  // source={require('../assets/bg.png')}
                  style={{
                    flex: 1,
                  }}>
                  <View
                    style={{
                      height: 50,
                      width: '100%',
                      backgroundColor: Color.PRIMARY_COLOR,
                      justifyContent: 'center',
                      padding: 12,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={{
                          justifyContent: 'center',
                          backgroundColor: Color.PRIMARY_COLOR,
                        }}
                        onPress={() => {
                          setModal(!modal);
                        navigation.navigate('BottomNavigator');
                        }}>
                        <Text
                          style={{
                            color: Color.SECONDARY_COLOR,
                            fontSize: 20,
                          }}>
                          Back
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontFamily: 'Quicksand',
                          fontSize: 20,
                          color: Color.SECONDARY_COLOR,
                          fontWeight: 'bold',
                        }}>
                        View Slip
                      </Text>
                      <Text></Text>
                    </View>
                  </View>

                  <WebView source={{uri: recipt}} />
                </View>
              </Modal>
            ) : null}
          </>
        ) : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ImgStyle: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    borderRadius: 8,
    marginTop: 15,
  },
  button: {
    backgroundColor: Color.PRIMARY_COLOR,
    width: 150,
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    color: '#f4f4f4',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  inputContainerStyle: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  inputStyle: {
    backgroundColor: Color.BACKGROUND_COLOR,
    paddingLeft: 15,
    borderRadius: 5,
    color: '#fff',
  },
  labelStyle: {
    marginBottom: 5,
    fontSize: 12,
  },
});
export default PaymentScreen;