import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity, Dimensions } from 'react-native';
import ImageOverlay from "react-native-image-overlay";

const data=[
    {
        id:'BreastCancer',
        category:'Breast Cancer',
        img_uri:'https://thumbs.dreamstime.com/z/breast-cancer-awareness-ribbon-flowers-woman-health-stop-cancer-breast-cancer-awareness-ribbon-flowers-woman-health-stop-129550904.jpg'
    },
    {
        id:'PCOD',
        category:'Polycystic Ovarian Disease(PCOS/PCOD)',
        img_uri:'https://images.ctfassets.net/juauvlea4rbf/1dg2dQd9qOQYyMSUkYUk2A/385fd7e38fbb9158a0999c28b5573554/PCOS_101_fb_2x.png'
    },
    {
        id:'Ovarian',
        category:'Ovarian & Cervical Cancer',
        img_uri:'https://img.freepik.com/free-vector/uterine-cancer-diagnostic-idea-health-medical-treatment-doctor-check-uterus-female-reproductive-system-disease-illustration_277904-4606.jpg?size=626&ext=jpg&ga=GA1.2.1443375132.1609027200'
    },
    {
        id:'Vaginitis',
        category:'Vaginal Infection(Vaginitis)',
        img_uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwWL_P5cICOJ6Dje9Jz6wMWf_xKDXYz9E1Q&usqp=CAU'
    }
]

const Diseases=props=>{


    const renderItem=({item})=>{
        return(
            <TouchableOpacity onPress={() => {
                props.navigation.navigate(item.id);
              }}>
                <ImageOverlay containerStyle={styles.img} overlayAlpha={0.35} source={{uri: item.img_uri.toString()}} contentPosition={'bottom'} title={item.category} titleStyle={styles.category} />
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
           style={{flexDirection:'column',marginStart:8}}
           contentContainerStyle={{justifyContent:'space-between', marginTop:40}}
           numColumns={2}
           />

       </View> 
    )
}
export default Diseases


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
      },
      category:{
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingHorizontal:2,
        width:'100%',
       
    
    },
    img:{
        borderRadius: 10,
        marginVertical: 10,
        aspectRatio: 0.6,
        marginStart:5
    },
    
})