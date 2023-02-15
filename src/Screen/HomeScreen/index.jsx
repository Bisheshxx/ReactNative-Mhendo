import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import style from './style';
import CardComponent from '../../components/CardComponent';
import CommonCard from '../../shared/card';
import CheckBoxComponent from '../../components/CheckBox';
import ExpensesCarousel from '../../components/Expenses';
const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={style.HomeScreen}>
        <View style={style.homeScreenHeader}>
          <Text>Welcome Back,</Text>
          <Text>First Name</Text>
        </View>
        <CardComponent />
        {/* <CheckBoxComponent /> */}
        <ExpensesCarousel />

        {/* <View style={style.homeScreenCardView}>
        <Text style={style.textTitle}>Savings</Text>
        <Text style={{color: 'white'}}>$ 100</Text>
      </View> */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
