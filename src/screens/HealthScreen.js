import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';
import ImageOverlay from "react-native-image-overlay";

const data=[
    {
        id:'PeriodsGuide',
        category:'Your Periods Guide',
        img_uri:'https://libresse-images.essity.com/images-c5/42/124042/optimized-AzurePNG2K/1500x600-hot-water-bottle.png?w=1500&h=600&imPolicy=dynamic'
    },
    {
        id:'Diseases',
        category:'Women Specific Diseases',
        img_uri:'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/09/1246-breastcancer_survivor_experience-732x549-thumbnail-732x549.jpg?w=756&h=567'
    },
    // {
    //     id:'Depression',
    //     category:'Depression and Anxiety',
    //     img_uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/shutterstock-437197648-falling-apart-sira-anamwong-1515709442.jpg?resize=480:*'
    // },
    // {
    //     id:'Fitness',
    //     category:'Exercises, Yoga & Food for daily life',
    //     img_uri:'https://i.pinimg.com/originals/f8/bf/09/f8bf09d4c57b22663123127f4f14e28d.png'
    // }
]

const HealthScreen=props=>{


    const renderItem=({item})=>{
        return(
            <TouchableOpacity onPress={() => {
                props.navigation.navigate(item.id);
              }}>
                <ImageOverlay  overlayAlpha={0.35} source={{uri: item.img_uri.toString()}} title={item.category} titleStyle={styles.category}/>
            </TouchableOpacity>
        )

    }


    return(
       <View style={styles.container}>
           <FlatList
           data={data}
           renderItem={renderItem}
           keyExtractor={(item)=>item.category}
           contentContainerStyle={{alignItems:'flex-start'}}
           style={{flexDirection:'column'}}/>

       </View> 
    )
}
export default HealthScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
      },
      category:{
        
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        
    }
    
})