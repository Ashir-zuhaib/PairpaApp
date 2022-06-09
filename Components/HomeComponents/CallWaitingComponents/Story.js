import React from "react"
import { View, StyleSheet,ScrollView, Image, Text, Touchable, TouchableOpacity } from "react-native"
// import { TouchableOpacity } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { Color } from "../../../Utils/colorfile"

export default function Stories(){
    const USERS =[
        {
        name:'Amir',
        image:require('../../../assets/image6.png')
    },
        {
        name:'Jimmy',
        image:require('../../../assets/image11.png')
    },
        {
        name:'Devgan',
        image:require('../../../assets/image12.png')
    },
        {
        name:'Khan',
        image:require('../../../assets/image7.png')
    },
        {
        name:'Preity',
        image:require('../../../assets/image13.png')
    },
]
    return(
        // <SafeAreaView style={styles.container} >
        
            <ScrollView
             horizontal={true}
             showsHorizontalScrollIndicator={false} 
             style={styles.stor} >
                {USERS.map((story, index)=>(
                   <TouchableOpacity key={index}>
                       <Image source={story.image} style={styles.imagestyle}  />
                       <Text style={styles.storyText}>{story.name}</Text>
                   </TouchableOpacity>
                ))}

        </ScrollView>
        
        
    )
}
const styles = StyleSheet.create({
    
   
    stor:{
        flex:1,
        flexDirection:"row",
        backgroundColor:Color.BACKGROUND_COLOR,
        marginLeft:10,
        marginRight:10,
        height:110,
        marginBottom:10,
        // width:'100%'
    },
    imagestyle:{
        width:67,
        height:67,
        borderRadius:50,
        margin:5,
        marginHorizontal:10,   
    },
    storyText:{
        alignSelf:"center",
        fontSize:13,
        color:Color.CARDNAME,
        
    }
      
})