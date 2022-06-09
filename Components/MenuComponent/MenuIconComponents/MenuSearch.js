import React from 'react';
import {Dimensions, View, Image, TextInput,StyleSheet } from 'react-native';
import Sicon from '../../../assets/se.svg';
import { Color } from '../../../Utils/colorfile';
const WIDTH =Dimensions.get("window").width;

function Search() {
  return (
          // <View>
          <View style={styles.container}>
      <TextInput
      placeholder='Search...' style={styles.imageStyle}/>
      <Sicon width={20} height={20} fill={Color.SECONDARY_COLOR} />
          {/* < source={Sicon}  /> */}
      </View>
      // </View>
  
  );
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.SECONDARY_COLOR,
         position:'absolute',
        top:70,
        left:10,
        // right:20,
        height: WIDTH/7.5,
        marginTop:10,
        borderRadius:10,
        shadowColor: Color.BLACK,
        width:WIDTH*0.94,
        // elevation: 3,
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
    },
    imageStyle: {
        width: '80%',
        alignItems: 'center',
        backgroundColor:Color.SECONDARY_COLOR
      },
})
export default Search;
