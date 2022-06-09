import React from 'react';
import { Text,View } from 'react-native';
import MenuHeader  from "../../Components/MenuComponent/MenuHeader";
import MenuIcons  from "../../Components/MenuComponent/MenuIconComponents/MenuIcons";

export default function Menu() {
  return (
    <View>
      <MenuHeader value='BBS' />
      <MenuIcons />
    </View>
  );
}
