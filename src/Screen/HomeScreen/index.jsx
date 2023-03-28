import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import style from './style';
import CardComponent from '../../components/CardComponent';
import CommonCard from '../../shared/card';
import CheckBoxComponent from '../../components/CheckBox';
import ExpensesCarousel from '../../components/Expenses';
import ListComponent from '../../components/ListComponent';
import VerticalPillCardComponent from '../../components/CustomCard-verticalPill';
const HomeScreen = () => {
  return (
    <ScrollView style={{backgroundColor: '#0d1923'}}>
      <View style={style.HomeScreen}>
        <View style={style.homeScreenHeader}>
          <Text style={{color: 'white'}}>Welcome Back,</Text>
          <Text style={{color: 'white'}}>Bishesh</Text>
        </View>
        <CardComponent />
        <VerticalPillCardComponent
          leftMargin={-40}
          height={120}
          label={'Profits'}
          month={'January'}
          pillColor={'#487972'}
          backgroundColor={'#769B95'}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              height: '100%',
              marginLeft: -25,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 200,
              }}>
              <View>
                <Text style={{fontSize: 19}}>Sales: </Text>
                <Text style={{fontSize: 9}}>Sales</Text>
              </View>

              <Text style={{fontSize: 19}}>रु 100000</Text>
            </View>
            <View
              style={{
                backgroundColor: 'black',
                width: '90%',
                height: 1,
              }}></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 200,
              }}>
              <View>
                <Text style={{fontSize: 19}}>Profit: </Text>
                <Text style={{fontSize: 9}}>Sales</Text>
              </View>
              <Text style={{fontSize: 19}}>रु 100000</Text>
            </View>
          </View>
        </VerticalPillCardComponent>
        <VerticalPillCardComponent
          leftMargin={-20}
          height={80}
          label={'Profits'}
          month={'Loss'}
          pillColor={'#487972'}
          backgroundColor={'#0A0A0A'}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 200,
            }}>
            <View>
              <Text style={{fontSize: 19, color: 'white'}}>Expenses: </Text>
              <Text style={{fontSize: 9, color: 'white'}}>Sales</Text>
            </View>
            <Text style={{fontSize: 19, color: 'white'}}>रु 100000</Text>
          </View>
        </VerticalPillCardComponent>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

//0d1923 background color
// 122139 body color
