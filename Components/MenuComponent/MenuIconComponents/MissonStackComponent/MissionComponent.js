import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Points from '../../../../assets/point.svg'
import { Color } from '../../../../Utils/colorfile';

function MissionComponent() {
    const msg =[{
        text:'Send a message to 500 people',
        achivement:'Acheivement rate (251/500)'
    },{
        text:'Lets make 5 people a favorite',
        achivement:'Acheivement rate (2/5)'
}]
  return(
      <ScrollView style={styles.scroll} >
      {msg.map((miss , index)=>(
          <TouchableOpacity style={styles.container} key={index}>
          <View>
              <View style={styles.icon}>
                  <Points />
                <Text>+5pts</Text>
              </View>
              </View>
          <View>
              <Text style={styles.text1}>{miss.text}</Text>
                <Text style={styles.text2}>{miss.achivement}</Text>
          </View>
      </TouchableOpacity>)
)}
</ScrollView>
) 
}
export default MissionComponent
const styles = StyleSheet.create({
    container:{
        backgroundColor:Color.SECONDARY_COLOR,
        // width:'90%',
        height:80,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15,
    },
    icon:{
        backgroundColor:'#F8E0EB',
        width:62,
        height:62,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20,
        borderRadius:10
    },
    text1:{
        color:Color.CARDNAME,
    },
    text2:{
        color:Color.PRIMARY_COLOR
    },
    scroll:{marginTop:40}
})
