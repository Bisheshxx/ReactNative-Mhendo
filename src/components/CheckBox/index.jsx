import {View, Text} from 'react-native';
import React, {useState} from 'react';
import CommonCard from '../../shared/card';

import style from './style';
import CheckBoxComponent from '../../shared/checkbox';

const FutureExpense = () => {
  const Expenses = ['Test', 'Test', 'Test', 'Test', 'Test'];
  return (
    <CommonCard height={300} width={'100%'} backGroundColor={'pink'}>
      <Text style={style.checkBoxTitle}>Expenses Covered</Text>
      {Expenses.map((data, index) => {
        return <CheckBoxComponent key={index} data={data} />;
      })}
    </CommonCard>
  );
};

export default FutureExpense;
