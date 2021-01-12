import React from 'react';
import { StyleSheet, Text, View,Dimensions,TouchableOpacity,Image } from 'react-native';
import {colors} from '../constants/theme'
import BrickList from 'react-native-masonry-brick-list';
import { useNavigation } from '@react-navigation/native';





const JobsCard=({item, user})=>{
  const navigation = useNavigation();
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
        <TouchableOpacity style={[styles.container,{backgroundColor:getColor(), paddingHorizontal:5}]} onPress={() => {
            navigation.navigate('PersonalChat', {
              item: user,
            });
          }}>
            <View style={styles.profile}>
              <TouchableOpacity onPress={() => {
          navigation.navigate('Profile', {
            item: user,
          });
        }}>
            <Image
            source={{uri:item.img_uri.toString()}}
            style={styles.img}/>
            </TouchableOpacity>
            <Text style={{marginStart:5}}>{item.name}</Text>
            </View>
            <Text style={{marginBottom:5,marginStart:5}}>{item.title}</Text>
            <BrickList
              data={item.interests}
              renderItem={prop => {
                return (
                    <View
                      key={prop.name}
                      style={styles.preferencesItem} >
                      <Text style={styles.preferenceText}>{prop.name}</Text>
                    </View>
                );
              }}
              columns={3}
              rowHeight={45}
              />
        </TouchableOpacity>
    )
}
export default JobsCard;

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginVertical:5,
        marginHorizontal:10,
        borderRadius:10
        
    },
    img:{
        height:60,
        width:60,
        borderRadius:30
    },
    profile:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 7,
        marginTop:5,
        marginStart:7
        
        
    },
    preferencesItem: {
        marginHorizontal: 2,
        borderRadius: 20,
        borderColor: colors.secondary,
        borderWidth: 1,
        backgroundColor: colors.white,
        
      },
      preferenceText: {
        color: colors.secondary,
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 3,
        fontSize:12
      },
})