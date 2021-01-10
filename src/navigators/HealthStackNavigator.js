import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import HealthScreen from '../screens/HealthScreen'
import Diseases from '../screens/Diseases'
import BreastCancer from '../screens/BreastCancer'
import PeriodsGuide from '../screens/PeriodsGuide'
import PadStats from '../screens/PadStats'

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

          <Stack.Screen
          name='BreastCancer'
          component={BreastCancer}
          options={{headerShown:false}}/>

          <Stack.Screen
          name='PeriodsGuide'
          component={PeriodsGuide}
          options={{headerShown:false}}/>

          <Stack.Screen
          name='PadStats'
          component={PadStats}
          options={{headerShown:false}}/>
  
        
      </Stack.Navigator>
    );
  };
  
  export default HealthStackNavigator;