import React from 'react';
import { Dimensions,Image, View, StyleSheet, Text, ScrollView } from 'react-native';
import LikeFromOtherCard from '../../../../../Components/MenuComponent/MenuIconComponents/LikeStackComponents/FromOther/FromOtherCard';
import Header from '../../../../../Components/MenuComponent/MenuIconComponents/MenuHeader';
import Search from '../../../../../Components/MenuComponent/MenuIconComponents/MenuSearch';
export default function FromOtherPage(){
    return(
        <ScrollView style={{marginTop:15}}>
        <LikeFromOtherCard />
        </ScrollView>
    )
}