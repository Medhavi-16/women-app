import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import HomeScreen from '../screens/HomeScreen'
import Shows from '../screens/Shows'
import Episodes from '../screens/Episodes'


const HomeStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Shows'
          component={Shows}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Episode'
          component={Episodes}
          options={{ headerShown: false }}
        />
  
        
      </Stack.Navigator>
    );
  };
  
  export default HomeStackNavigator;