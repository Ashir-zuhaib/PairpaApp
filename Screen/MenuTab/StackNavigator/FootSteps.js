import React from 'react';
import { Text,View, ScrollView } from 'react-native';
import Header  from "../../../Components/MenuComponent/MenuIconComponents/MenuHeader";
import FootStepCard  from "../../../Components/MenuComponent/MenuIconComponents/FootStepsComponent/FootCard";
import Search from '../../../Components/MenuComponent/MenuIconComponents/MenuSearch';

export default function FootStep() {
  return (
    <ScrollView>
      <Header value='Footprint' />
      <Search />
      <FootStepCard />
    </ScrollView>
  );
}
