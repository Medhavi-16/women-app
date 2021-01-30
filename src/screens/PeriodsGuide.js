import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity, Dimensions,Modal,Image,ScrollView,Linking } from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import Carousel from 'react-native-snap-carousel';
import { colors } from '../constants/theme';
import {Ionicons} from '@expo/vector-icons';



const PeriodsGuide=props=>{

    const getColor=()=>{
        return (
            'hsl(' +
            360 * Math.random() +
            ',' +
            (25 + 70 * Math.random()) +
            '%,' +
            (85 + 10 * Math.random()) +
            '%)'
          );
    }
    return(
        <View style={styles.container}>
            
            <TouchableOpacity style={[styles.card,{backgroundColor:getColor(), marginTop:50}]} onPress={()=>{
            props.navigation.navigate('PadStats');
          }}>
            <Image
                source={{uri:'https://image.freepik.com/free-vector/modern-question-mark-help-support-page_1017-27395.jpg'}}
                style={{ width: 60, height: 60, borderRadius:30 }}
              />
                <Text style={{alignSelf:'center', marginStart:10}}>Which pad should I use?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card,{backgroundColor:getColor(), marginTop:50}]}>
            <Image
                source={{uri:'https://media.istockphoto.com/vectors/dos-and-dont-or-like-unlike-icons-with-thumbs-up-and-thumbs-down-vector-id1136598259'}}
                style={{ width: 60, height: 60, borderRadius:30 }}
              />
                <Text style={{alignSelf:'center', marginStart:10}}>Dos and Don'ts during Periods</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card,{backgroundColor:getColor(), marginTop:50}]}>
            <Image
                source={{uri:'https://image.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148692632.jpg'}}
                style={{ width: 60, height: 60, borderRadius:30 }}
              />
                <Text style={{alignSelf:'center', marginStart:10}}>Foods and methods to relief period pain</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card,{backgroundColor:getColor(), marginTop:50}]}>
            <Image
                source={{uri:'https://image.freepik.com/free-vector/background-lifestyle-healthy-food-poster-banner-with-hand-drawn-fruits-lettering-text-healthy-lifestyle-green-backdrop_83277-5079.jpg'}}
                style={{ width: 60, height: 60, borderRadius:30 }}
              />
                <Text style={{alignSelf:'center', marginStart:10}}>Period friendly Yoga and Exercises</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card,{backgroundColor:getColor(), marginTop:50}]} onPress={()=> Linking.openURL('https://madhhuurrii.github.io/Period-Kit/index.html#/home')}>
            <Image
                source={{uri:'https://image.winudf.com/v2/image/Y29tLmZsb3dlci5wZXJpb2R0cmFja2VyX3NjcmVlbl8wXzE1MTc1ODU1NzFfMDk3/screen-0.jpg?fakeurl=1&type=.jpg'}}
                style={{ width: 60, height: 60, borderRadius:30 }}
              />
                <Text style={{alignSelf:'center', marginStart:10}}>Track my periods</Text>
            </TouchableOpacity>
            
        </View>
    )}

    export default PeriodsGuide


const styles = StyleSheet.create({
container: {
        flex: 1,
        backgroundColor: '#ffff',
    
      },

card:{
        marginStart:10,
        elevation:10,
        width:Dimensions.get('window').width-15,
        height:80,
        borderRadius:40,
        flexDirection:'row',
        padding:10
    
}


})