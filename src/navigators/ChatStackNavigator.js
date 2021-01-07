import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import ChatScreen from '../screens/ChatScreen'
import Chatbot from '../screens/ChatBot'


const ChatStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Chat'
          component={ChatScreen}
          options={{ headerShown: false }}
        />   
        <Stack.Screen
          name='Chatbot'
          component={Chatbot}
          options={{ headerShown: false }}
        />   
      </Stack.Navigator>
    );
  };
  
  export default ChatStackNavigator;