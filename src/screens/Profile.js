import React, { useState,useRef } from 'react';
import { StyleSheet, Text, View,Dimensions,FlatList,Modal,ScrollView,TouchableOpacity,Linking,Image } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { colors } from '../constants/theme';
import PersonCard from '../components/PersonCard'
import {Ionicons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors} from 'react-native-paper';
import BrickList from 'react-native-masonry-brick-list';


const socialMedia={}

const Profile=props=>{
    const[insta,setInsta]=useState(props.route.params.item.socialMedia.insta)
    const[linked,setLinked]=useState(props.route.params.item.socialMedia.linked)
    const[twitter,setTwitter]=useState(props.route.params.item.socialMedia.twitter)
    const[email,setEmail]=useState(props.route.params.item.socialMedia.email)
    const[git,setGithub]=useState(props.route.params.item.socialMedia.git)

    return(
        <View style={styles.container}>
            <View>
            <LinearGradient
        // Button Linear Gradient
        colors={[Colors.amber100, Colors.amber300, Colors.amber500]}
        style={styles.button}>
            <Image
                source={{uri:props.route.params.item.img_uri.toString()}}
                style={{width: 100, height: 100, alignSelf:'center', marginTop:10, borderRadius:50 }}
              />
            <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', marginBottom:10}} >{props.route.params.item.name}</Text>
            <View style={{justifyContent:'flex-start', flexDirection:'row',marginStart:10, marginBottom:20}}>
                <Ionicons name='location-outline' size={20} color={colors.black}/>
                <Text style={{fontWeight:'700'}}>{props.route.params.item.location.city}, {props.route.params.item.location.country}</Text>
            </View>
            <Text style={{fontSize:15, fontWeight:'bold', marginBottom:10,marginStart:10}} >Interests</Text>
            <BrickList
              data={props.route.params.item.interests}
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
            </LinearGradient>
            </View>
            
            <Text style={{marginHorizontal:20, fontSize:20, color:colors.secondary, marginTop:20}}>Social Media Handles</Text>
            {insta && <View style={styles.links}>
                <Ionicons name='logo-instagram' size={30} color={colors.secondary}/>
                <Text style={styles.account} onPress={ ()=> Linking.openURL(`https://www.instagram.com/${insta}/?hl=en`) }>{insta}</Text>
            </View>}
            
           {linked && <View style={styles.links}>
                <Ionicons name='logo-linkedin' size={30} color={colors.secondary}/>
                <Text style={styles.account} onPress={ ()=> Linking.openURL(`${linked}`) }>{linked}</Text>
            </View>
            }
            
            {twitter && <View style={styles.links}>
                <Ionicons name='logo-twitter' size={30} color={colors.secondary}/>
                <Text style={styles.account} onPress={ ()=> Linking.openURL(`https://twitter.com/${twitter}`) }>{twitter}</Text>
            </View>
            }
            {email && <View style={styles.links}>
                <Ionicons name='mail' size={30} color={colors.secondary}/>
                <Text style={styles.account} onPress={ ()=> Linking.openURL(`mailto:${email}`) }>{email}</Text>
            </View>
            }
            {git && <View style={styles.links}>
                <Ionicons name='logo-github' size={30} color={colors.secondary}/>
                <Text style={styles.account} onPress={ ()=> Linking.openURL(`https://github.com/${git}`) }>{git}</Text>
            </View>
            }
            

        </View>

    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
            flex: 1,
            backgroundColor: '#ffff',
            justifyContent:'center'},
    links:{
        flexDirection:'row',
        justifyContent:'flex-start',
        marginHorizontal:20,
        marginVertical:5},
    account:{
        marginStart:10,
        textAlignVertical:'center',
        fontSize:17
    },preferencesItem: {
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