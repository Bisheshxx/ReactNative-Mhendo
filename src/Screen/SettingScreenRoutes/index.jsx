import {View, Text, Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from '../SettingScreen';
import ExpenseCalculator from '../ExpenseCalculator';

export default function SettingsScreenRoutes() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Calculator" component={ExpenseCalculator} />
    </Stack.Navigator>
  );
}
