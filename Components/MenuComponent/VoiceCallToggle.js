import React, { useState } from "react";
import { View, Switch, StyleSheet, Text, Togg } from "react-native";
import ToggleSwitch from 'toggle-switch-react-native'
import { Color } from "../../Utils/colorfile";
const AudioBtn = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
      <View style={styles.container}>
       <ToggleSwitch
    isOn={isEnabled}
    onColor={Color.PRIMARY_COLOR}
    offColor='#E4E4E4'
    size='small'
    onToggle={toggleSwitch}
  />
        <Text style={styles.textColor}>Voice Call</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
    //   flex: 0.3,
      flexDirection:"row",
      alignItems: "center",
    //   width:'30%',
      justifyContent: "center",
      backgroundColor:Color.SECONDARY_COLOR,
      height:52,
      paddingHorizontal:25,
      borderRadius:10
    },
    textColor:{
        fontSize:14,
        color:Color.CARDNAME,
         fontWeight: "600",
         marginLeft:10
    }
  });

export default AudioBtn;