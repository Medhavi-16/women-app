import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import HealthScreen from '../screens/HealthScreen'
import Diseases from '../screens/Diseases'

const HealthStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Health'
          component={HealthScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Diseases'
          component={Diseases}
          options={{headerShown:false}}/>
  
        
      </Stack.Navigator>
    );
  };
  
  export default HealthStackNavigator;