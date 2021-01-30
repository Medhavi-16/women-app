import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Fontisto,
  FontAwesome5,
  Entypo,
  Feather,
  Ionicons
} from '@expo/vector-icons';

import { colors } from '../constants/theme';
import HomeStackNavigator from './HomeStackNavigator';
import HealthStackNavigator from './HealthStackNavigator';
import ChatScreen from '../screens/ChatScreen';
import NetworkingStackNavigator from './NetworkingStackNavigator';
import TrackernAnalysisStackNavigator from './TrackernAnalysisStackNavigator'
import ChatStackNavigator from './ChatStackNavigator'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <Feather name='home' size={size} color={color} />;
          } else if (route.name === 'TrackernAnalysis') {
            return <Ionicons name='analytics-outline' size={size} color={color} />;
          } else if (route.name === 'Health') {
            return <Ionicons name='heart-half-outline' size={size} color={color} />;
          } else if (route.name === 'Chat') {
            return <Ionicons name='chatbubbles-outline' size={size} color={color} />;
          } else if (route.name === 'Network') {
            return <Ionicons name='git-network-outline' size={size} color={color} />;
          }
        }
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.accent,
        inactiveTintColor: colors.secondary,
        tabStyle: {
          padding: 8
        },
        style: {
          backgroundColor: colors.primary,
          marginTop: 0,
          borderTopWidth: 0,
          elevation: 10,
          height: 60
        },
        iconStyle: {
          margin: 8
        }
      }}
    >
      <Tab.Screen name='Home' component={HomeStackNavigator} />
      {/* <Tab.Screen name='TrackernAnalysis' component={TrackernAnalysisStackNavigator} /> */}
      <Tab.Screen name='Chat' component={ChatStackNavigator} />
      <Tab.Screen name='Network' component={NetworkingStackNavigator} />
      <Tab.Screen name='Health' component={HealthStackNavigator} />
      
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});