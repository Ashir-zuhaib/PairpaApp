import React from 'react';
import { Dimensions,Image, View, StyleSheet, Text, ScrollView } from 'react-native';
import LikeFromMyCard from '../../../../../Components/MenuComponent/MenuIconComponents/LikeStackComponents/FromMySelf/FromMyCard';
export default function FromMyPage(){
    return(
        <ScrollView style={{marginTop:15}}>
        <LikeFromMyCard />
        </ScrollView>
    )
}