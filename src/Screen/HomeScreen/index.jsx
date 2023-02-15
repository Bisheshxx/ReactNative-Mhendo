import {View, Text} from 'react-native';
import React from 'react';
import style from './style';
import ListComponent from '../../components/ListComponent';

const HomeScreen = () => {
  return (
    <View style={style.HomeScreen}>
      <ListComponent />
    </View>
  );
};

export default HomeScreen;
