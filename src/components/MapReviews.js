import React,{useState,useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,Image,TouchableHighlight,FlatList,TouchableOpacity, ScrollView } from 'react-native';
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import axios from 'axios';
import { colors } from '../constants/theme';
//import {  } from 'react-native-gesture-handler';

const reviews=[{id:'1',review:'Nice'}, {id:'2', review:'Excellent'}, {id:'3',review:'Very Clean'}]
const queries=[{q:'Does it have dustbins',review:'Yes'}, {q:'Does it have pad vending machine', review:'No'}, {q:'Does it have pad incinerator',review:'Yes'},{q:'Does it have handwash liquid',review:'Yes'}]
const MapReviews=(marker)=>{
    console.log('marker',marker)

    const renderReviews=({item})=>{
        return(
            <Text style={{marginStart:10,textAlign:'left', alignSelf:'flex-start',justifyContent:'flex-start', borderColor:colors.gray,borderWidth:1, borderRadius:20, padding:5, marginVertical:3}}>{item.review}</Text>
        ) }
    const renderQueries=({item})=>{
            return(
                <View style={{marginStart:10}}>
                    <Text style={{textAlign:'left', alignSelf:'flex-start',justifyContent:'flex-start', 
                    color:colors.accent, paddingHorizontal:5, marginTop:3}}>{item.q}</Text>
                    <Text style={{textAlign:'left', alignSelf:'flex-start',justifyContent:'flex-start', 
                    color:colors.secondary, paddingHorizontal:5, marginBottom:3}}>{item.review}</Text>
                </View>
            ) }
    return(
        <View style={styles.container}>
            <ScrollView>

            
            <Text style={{color:colors.secondary,fontWeight:'bold', textAlign:'center'}}>{marker['marker']['poi']['name']}</Text>
            <Text style={{color:colors.secondary, textAlign:'center'}}>{marker['marker']['address']['freeformAddress']}</Text>
            <View style={{flexDirection:'row', width:Dimensions.get('window').width-10, marginHorizontal:10, marginTop:10, justifyContent:'space-between'}}>
            <Text style={{textAlign:'left', alignSelf:'flex-start', fontSize:20}}>Rating: 3.8/5</Text>
            <TouchableOpacity style={{alignSelf:'flex-end', backgroundColor:colors.primary, borderRadius:10, padding:10, elevation:3}}><Text style={{color:colors.secondary}}>Add Review</Text></TouchableOpacity>
            </View>
            <View>
                <Text style={{marginStart:10, color:colors.accent, fontWeight:'bold',fontSize:16}}>General Information</Text>
            <FlatList
            data={queries}
            renderItem={renderQueries}
            keyExtractor={(item)=>item.q}
            contentContainerStyle={{alignItems:'flex-start'}}
            style={{flexDirection:'column'}}
            nestedScrollEnabled={true}/>
            </View>
            <View>
            <Text style={{marginTop:10,marginStart:10, color:colors.tertiary, fontWeight:'bold',fontSize:16}}>Reviews</Text>
            <FlatList
            data={reviews}
            renderItem={renderReviews}
            keyExtractor={(item)=>item.id}
            contentContainerStyle={{alignItems:'flex-start'}}
            style={{flexDirection:'column'}}
            nestedScrollEnabled={true}/>
            </View>
            </ScrollView>
        </View>
    )
}
export default MapReviews;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    
})