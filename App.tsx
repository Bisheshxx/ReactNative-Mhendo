import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from './src/Screen/HomeScreen';
import ExpenseCalculator from './src/Screen/ExpenseCalculator';
import KhataScreen from './src/Screen/khata';
import SinglePersonKhata from './src/Screen/PersonKhata';

export default function App() {
  return <SinglePersonKhata />;
  // return <ExpenseCalculator />;
}
