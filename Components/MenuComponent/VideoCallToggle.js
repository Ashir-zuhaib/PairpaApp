import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import { Color } from "../../Utils/colorfile";
import ToggleSwitch from 'toggle-switch-react-native'

const VideoBtn = () => {
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
      <Text style={styles.textColor}>Video Call</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.3,
    flexDirection:"row",
    alignItems: "center",
    // width:'30%',
    height:52,
    backgroundColor:Color.SECONDARY_COLOR,
    paddingHorizontal:25,
      justifyContent: "center",
    // padding:15,
    borderRadius:10
  },
  textColor:{
      fontSize:14,
      color:Color.CARDNAME,
       fontWeight: "600",
       marginLeft:10
  }
});

export default VideoBtn;