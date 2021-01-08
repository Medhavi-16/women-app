import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { GiftedChat,Bubble } from 'react-native-gifted-chat'
import { colors } from '../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ChatScreen=props=>{

    const [messages,setMessages]=useState([]);

    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hola Ladies! Feel free to converse here. No one here knows or can know your identity, so don\'t be afraid of being judged. But we do request you to keep this as a positive space.',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://media.istockphoto.com/vectors/portrait-of-an-african-american-woman-in-profile-vector-id1188359424?k=6&m=1188359424&s=612x612&w=0&h=LJ2H-Ezu9tUUJ9QNpEs7dF6w-baAVN7nGIwRoRnoxus=',
            },
          },
        ])
      }, [])
      const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      }, [])

      
      return (
          <View style={styles.container}>

          <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: 'transparent', alignSelf:'flex-end',marginEnd:5,marginTop:30 }} onPress={() => {
               props.navigation.navigate('Chatbot');
               //console.log("bot")
          }}>
          <Image
        source={require('../../assets/chatbot.gif')}
        style={{ width: 50, height: 50 }}
      />
          </TouchableOpacity>
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
export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
      },
})