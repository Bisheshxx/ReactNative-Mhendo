import {View, Text} from 'react-native';
import React from 'react';
import ExpenseCalculator from './src/Screen/ExpenseCalculator';
import KhataScreen from './src/Screen/khata';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingScreen from './src/Screen/SettingScreen';
import BottomNavigation from './src/components/BottomNavigationHome';

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          options={{headerShown: false}}
          component={BottomNavigation}
        />
        <Stack.Screen name="Khata" component={KhataScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen
          name="ExpenseCalculator"
          options={{headerShown: false}}
          component={ExpenseCalculator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
