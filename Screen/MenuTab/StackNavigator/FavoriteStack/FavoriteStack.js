import React from 'react';
import { View, ScrollView } from 'react-native';
import FavoritesCard from '../../../../Components/MenuComponent/MenuIconComponents/FavoriteStackComponent/FavoriteCard';
import Header from '../../../../Components/MenuComponent/MenuIconComponents/MenuHeader';
import Search from '../../../../Components/MenuComponent/MenuIconComponents/MenuSearch';

function FavoriteStack() {
  return <ScrollView style={{flex:1, backgroundColor:'#fafafa'}}>
      <Header value='Favorite'/>
      <Search />
      <FavoritesCard />
  </ScrollView>;
}

export default FavoriteStack;
