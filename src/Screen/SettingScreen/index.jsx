import {View, Text, Button} from 'react-native';
import React from 'react';

export default function SettingScreen({navigation}) {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.push('ExpenseCalculator')}
      />
    </View>
  );
}
