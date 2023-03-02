import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import style from './style';
import CardComponent from '../../components/CardComponent';
import CommonCard from '../../shared/card';
import CheckBoxComponent from '../../components/CheckBox';
import ExpensesCarousel from '../../components/Expenses';
import ListComponent from '../../components/ListComponent';
const HomeScreen = () => {
  return (
    <ScrollView style={{backgroundColor: '#0d1923', marginTop: 35}}>
      <View style={style.HomeScreen}>
        <View style={style.homeScreenHeader}>
          <Text style={{color: 'white'}}>Welcome Back,</Text>
          <Text style={{color: 'white'}}>First Name</Text>
        </View>
        <CardComponent />
        {/* <CheckBoxComponent /> */}
        <ExpensesCarousel />
        {/* <ListComponent /> */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
