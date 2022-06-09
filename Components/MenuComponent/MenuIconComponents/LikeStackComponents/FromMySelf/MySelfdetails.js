import React from 'react';
import { View ,Text, StyleSheet} from 'react-native';

function MySelfdetails() {
  return( 
      <>
      <View style={styles.row} >
          <Text style={styles.text1}>Name</Text>
          <Text style={styles.text2}>Aamir  Khan</Text>
      </View>
      <View style={styles.row}>
          <Text style={styles.text1}>Date of birth</Text>
          <Text style={styles.text2}>09 Sept 1998</Text>
      </View>
      <View style={styles.row}>
          <Text style={styles.text1}>Location</Text>
          <Text style={styles.text2}>rachi</Text>
      </View>
      <View style={styles.row}>
          <Text style={styles.text1}>Height</Text>
          <Text style={styles.text2}>173cm</Text>
      </View>
      <View style={styles.row}>
          <Text style={styles.text1}>Weight</Text>
          <Text style={styles.text2}>67kg</Text>
      </View>
      </>
    )
}

export default MySelfdetails
const styles= StyleSheet.create({
    row:{
        flexDirection:'row',
        // flexWrap:'wrap',
        justifyContent:'space-between',
        // alignSelf:'center',
        // width:WIDTH*0.9,
        borderBottomWidth:1,
        borderBottomColor:'#F0F0F0',
        marginTop:10,
        marginHorizontal:20,
        alignItems:'center',
    },
    text1:{
        // color:'#333D41A3',
        fontSize:16,
        fontWeight:'300',
        marginVertical:5
    },
    text2:{
        color:'#000000BF',
        
        fontSize:16,
        fontWeight:'600',
        marginVertical:5
    }
})