import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingScreen from '../../Screen/SettingScreen';
import HomeScreen from '../../Screen/HomeScreen';

export default function BottomNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRoute="Settings">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}
