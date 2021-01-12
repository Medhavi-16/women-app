import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { GiftedChat,Bubble } from 'react-native-gifted-chat'
import { colors } from '../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const PersonalChat=props=>{

    const [messages,setMessages]=useState([]);

    useEffect(() => {
        setMessages([])
      }, [])
      const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      }, [])

      
      return (
          <View style={styles.container}>
            <LinearGradient
        // Button Linear Gradient
        colors={[Colors.green50, Colors.green100, Colors.greenA100]}>
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'flex-start',paddingTop:40,paddingStart:10,paddingBottom:5}} onPress={() => {
          props.navigation.navigate('Profile', {
            item: props.route.params.item,
          });
        }}>
              <Image
              source={{uri:props.route.params.item.img_uri.toString()}}
              style={{height:40, width:40, borderRadius:20}}/>
              <Text style={{marginStart:5, textAlignVertical:'center',fontWeight:'700'}}>{props.route.params.item.name}</Text>

            </TouchableOpacity>
            </LinearGradient>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)} 
          user={{
            _id: 1,
          }}
        />
        </View>
      )
    }
export default PersonalChat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
      },
})