import React, {createContext, useContext, useEffect, useState} from 'react';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext = createContext({});
export const AuthProvider = ({children}) => {
  const [fuser, setFuser] = useState(null);
  const [sd, setSd] = useState(null)
  useEffect(() => {
    // getData()
    getData()
    
  });
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@userData')
      setSd(jsonValue)
      console.log('sd', sd)
    //       firestore().collection('Users').where('userId','!=', jsonValue).onSnapshot
    // // get()
    // .then((querySnapshot) => {
    //   if(querySnapshot.size==0)
    //   {
    //     console.log('failed', querySnapshot.size)
    //    }
    // else{
    //   querySnapshot.forEach(async(doc) => {            
    //     console.warn(doc.id, "=>", doc.data().like);
    //     setFuser(doc.data().like)
    // })}
    // })
    // .catch((e)=>console.log('err', e))
      } catch(e) {
        // error reading value
        console.log(e)
      }
    }
  
  return (
    <AuthContext.Provider
      value={{
        user: sd, //storing user value in context api
        // like: fuser
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export default function useAuth() {
  return useContext(AuthContext);
}
