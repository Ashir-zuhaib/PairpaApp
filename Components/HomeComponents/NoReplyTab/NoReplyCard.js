import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import { NoRepData } from './NoreplyData';
import { useNavigation } from '@react-navigation/core';
import rep from '../../../assets/typingIcon.png';
import { Color } from '../../../Utils/colorfile';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import useAuth from '../../../Hooks/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WIDTH = Dimensions.get('window').width;
export default function NoRep() {
  const [point, setPoint] = useState(null);
  const [list, setList] = useState([]);
  const [userId, setuserId] = useState();
  const navigation = useNavigation();
  const { user } = useAuth();
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@userData');
      const points = await AsyncStorage.getItem('@userPoint');
      console.log('ff', jsonValue);
      setuserId(jsonValue);
      console.log('ffpoi', points);
      setPoint(parseInt(points));
      firestore()
        .collection('Users')
        .where('userId', '!=', jsonValue)
        .onSnapshot(snap => {
          //   console.log("users: ", snap.docs.map(do=>do.dat))
          const data = snap.docs.map(doc => doc.data());
          setList(data);
        });
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
      {list.map((data, index) => (
        <View style={styles.card} key={index}>
          <TouchableOpacity style={styles.border}>
            {/* <Image source={} style={styles.image} /> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ChatScreen', { recieverId: data.userId })
            }
            style={styles.text}>
            <Text style={styles.nameColor}>{data.userId.slice(0, 15)}</Text>
            {/* <Text style={styles.messColor}>{data.date}</Text> */}
            {/* <Text style={styles.msgText} >{data.text}</Text> */}
          </TouchableOpacity>
          {point <= 5 ? (
            <TouchableOpacity
              onPress={() => console.log('please get point !!', typeof point)}
              style={styles.reply}>
              <Image source={rep} height={21} width={22.83} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ChatScreen', { recieverId: data.userId })
              }
              style={styles.reply}>
              <Image source={rep} height={21} width={22.83} />
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
    flex: 1,
    flexDirection: 'row',
    width: WIDTH * 0.9,
    height: WIDTH / 4.5,
    alignSelf: 'center',
    justifyContent: 'space-around',
    // marginRight:2,
    borderRadius: 15,
    // paddingLeft:10,
    backgroundColor: Color.SECONDARY_COLOR,
    shadowColor: Color.BLACK,
    shadowOffset: {
      width: 10,
      height: 5,
    },
    elevation: 3,
  },
  border: {
    borderColor: Color.PRIMARY_COLOR,
    borderWidth: 2,
    height: 49,
    width: 49,
    borderRadius: 50,
    marginTop: 15,
  },
  image: {
    width: 41,
    height: 41,
    borderRadius: 50,
    margin: 2,
  },
  text: {
    marginLeft: -25,
    marginTop: 15,
    // backgroundColor:Color.PRIMARY_COLOR,
  },
  messColor: {
    color: Color.CARD_TEXT,
    fontSize: 13,
    fontWeight: '400',
  },
  nameColor: {
    color: Color.CARDNAME,
    fontWeight: '600',
    fontSize: 16,
    width: WIDTH * 0.45,
  },
  dateColor: {
    color: Color.CARD_DATE,
    fontWeight: '400',
    fontSize: 13,
  },
  reply: {
    marginTop: 15,
    // marginLeft:35,
  },
  msgText: {
    color: Color.CARD_TEXT,
    fontSize: 12,
  },
});
