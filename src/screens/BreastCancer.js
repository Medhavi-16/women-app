import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity, Dimensions,Modal,Image } from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import Carousel from 'react-native-snap-carousel';
import { colors } from '../constants/theme';
import {Ionicons} from '@expo/vector-icons';

const entries = [
    {
      step: 1,
      image: require('../../assets/step1.png'),
      text:
        ' With your arms relaxed by your side, look for changes in shape an color or of the nipple has changed direction.'
    },
    {
      step: 1,
      image: require('../../assets/step2.png'),
      text:
        'Place your hands on your hips and press firmly. Bend forwards and backwards looking for any changes'
    },
    {
      step: 1,
      image: require('../../assets/step3.png'),
      text:
        'Standing and with one hand behind your head explore your entire breast, starting with the armpit and finishing with nipple'
    },
    {
      step: 1,
      image: require('../../assets/step4.png'),
      text:
        'With the tips of the fingers together, feel your breast up and downwards. Also in round movements, starting from the outer part and pull inward toward the nipple.'
    },
    {
      step: 1,
      image: require('../../assets/step5.png'),
      text:
        'Lying with a cushion under your back, repeat all previous movements.'
    },
    {
      step: 1,
      image: require('../../assets/step6.png'),
      text:
        'Place your thumb and forefinger on the tissue around the nipple and press. Look for any abnormal discharge.'
    }
  ];

const data=[
    {
        id:'Examine',
        category:'Examine yourself',
        img_uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdzpCuuGcC_US86pLcIUcgnRGo9MJ_HOTuw&usqp=CAU'
    },
    {
        id:'Food',
        category:'Foods',
        img_uri:'https://www.parashospitals.com/wp-content/uploads/2018/10/maxresdefault-2.jpg'
    },
    
]

const BreastCancer=props=>{
    const [index, setIndex] = useState(0);
    const [modalVisible,setModalVisible]=useState(false)
    const renderItem=({item})=>{
        return(
            <TouchableOpacity onPress={()=>onPressCard(item.id)}>
                <ImageOverlay containerStyle={styles.img} overlayAlpha={0.35} source={{uri: item.img_uri.toString()}} contentPosition={'bottom'} title={item.category} titleStyle={styles.category} />
            </TouchableOpacity>
        )
    }

    const onPressCard=(id)=>{
        if(id=='Examine')
        {
            setModalVisible(true)
        }
    }
    const renderCarousalItem = ({ item, index }) => {
        return (
          <View style={styles.selfExamCard}>
            <Image
              style={{ width: 150, height: 150, borderRadius: 120 }}
              source={item.image}
            />
            <View style={{ padding: 10 }}>
              <Text style={styles.cardText}>{item.text}</Text>
            </View>
          </View>
        );
      };


    return(
       <View style={styles.container}>
            <Modal animationType='slide' transparent={true} visible={modalVisible}>
                <View style={styles.centeredView}>
                    <TouchableOpacity onPress={()=>setModalVisible(false)}>
                        <Ionicons name='close-outline' size={45} color={colors.white} />
                    </TouchableOpacity>
                    <View style={styles.modalView}>
                        <Carousel
                            data={entries}
                            renderItem={renderCarousalItem}
                            sliderWidth={Dimensions.get('window').width}
                            itemWidth={300}
                            onSnapToItem={i => setIndex(i)}
                        />
                        <View style={styles.stepContainer}>
                            <View style={styles.stepText}>
                                <Text style={{ color: colors.tertiary }}>
                                    {index + 1}
                                </Text>
                            </View>
                         </View>
                    </View>
                </View>
          </Modal>
           <FlatList
           data={data}
           renderItem={renderItem}
           keyExtractor={(item)=>item.category}
           contentContainerStyle={{alignItems:'flex-start'}}
           style={{flexDirection:'column',marginHorizontal:8}}
           contentContainerStyle={{justifyContent:'center', marginTop:40}}
           numColumns={1}
           />

       </View> 
    )
}
export default BreastCancer


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
        width:Dimensions.get('window').width-20
        
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        flexDirection: 'column',
        width: Dimensions.get('window').width - 20
      },
      selfExamCard: {
        width: '100%',
        height: 350,
        backgroundColor: colors.primary,
        borderRadius: 15,
        overflow: 'visible',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'space-around'
      },
      stepContainer: {
        padding: 10,
        alignItems: 'center'
      },
      stepText: {
        width: 40,
        height: 40,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        justifyContent: 'center',
        borderColor: colors.tertiary,
        borderWidth: 2,
        elevation: 4
      }
    
})