import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import style from './style';
import {Image} from 'react-native';

const ExpensesCarousel = () => {
  return (
    <View style={style.ExpenseView}>
      <Text style={style.ExpenseTitle}>Expenses</Text>
      <ScrollView horizontal={true} style={style.scrollViewStyle}>
        <View style={style.addExpenses}>
          <Text>+Add</Text>
        </View>
        <View>
          <Text>Hello</Text>
          <Image
            source={{
              uri: 'https://reactjs.org/logo-og.png',
            }}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ExpensesCarousel;
