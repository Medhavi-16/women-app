import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import NetworkingScreen from '../screens/NetworkingScreen'
import Profile from '../screens/Profile'


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
  
        
      </Stack.Navigator>
    );
  };
  
  export default NetworkingStackNavigator;