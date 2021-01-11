import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import NetworkingScreen from '../screens/NetworkingScreen'
import Profile from '../screens/Profile'
import PersonalChat from '../screens/PersonalChat'


const NetworkingStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Network'
          component={NetworkingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='PersonalChat'
          component={PersonalChat}
          options={{ headerShown: false }}
        />
  
        
      </Stack.Navigator>
    );
  };
  
  export default NetworkingStackNavigator;