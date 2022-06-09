import React from 'react';
import { Text,View, ScrollView } from 'react-native';
import Header  from "../../../../Components/MenuComponent/MenuIconComponents/MenuHeader";
// import FootStepCard  from "../../../Components/MenuComponent/MenuIconComponents/FootStepsComponent/FootCard";
import Search from '../../../../Components/MenuComponent/MenuIconComponents/MenuSearch';
import MissionComponent from '../../../../Components/MenuComponent/MenuIconComponents/MissonStackComponent/MissionComponent';

export default function Misson() {
  return (
    <ScrollView>
      <Header value='Misson' />
      <Search />
      <MissionComponent />
    </ScrollView>
  );
}
