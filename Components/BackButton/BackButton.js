import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Arrow from '../../assets/back.svg';
import {Color} from '../../Utils/colorfile';
function BackButton(props) {
  return (
    <TouchableOpacity onPress={props.goBack} style={styles.container}>
      <Arrow height={16} width={16} />
      <Text style={styles.text1}>Back</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text1: {
    fontSize: 14,
    fontWeight: '500',
  },
});
export default BackButton;
