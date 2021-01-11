import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { GiftedChat,Bubble } from 'react-native-gifted-chat'
import { colors } from '../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';


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