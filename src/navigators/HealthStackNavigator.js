import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import HealthScreen from '../screens/HealthScreen'

const HealthStackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Health'
          component={HealthScreen}
          options={{ headerShown: false }}
        />
  
        
      </Stack.Navigator>
    );
  };
  
  export default HealthStackNavigator;