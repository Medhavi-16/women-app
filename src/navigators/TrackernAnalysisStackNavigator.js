import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import TrackernAnalysisScreen from '../screens/TrackernAnalysisScreen'

const TrackernAnalysisStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='TrackernAnalysis'
          component={TrackernAnalysisScreen}
          options={{ headerShown: false }}
        />
  
        
      </Stack.Navigator>
    );
  };
  
  export default TrackernAnalysisStackNavigator;