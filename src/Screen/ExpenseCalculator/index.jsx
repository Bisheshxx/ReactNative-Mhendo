import {View, Text, Button, ScrollView} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import {act} from 'react-test-renderer';

const ExpenseCalculator = () => {
  const [result, setResult] = useState('0');
  const onChange = data => {
    setResult(`${result}` + `${data}`);
  };
  const calcLayout = [
    'Reset',
    '+/-',
    '%',
    '/',
    7,
    8,
    9,
    'x',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    '.',
    '=',
  ];
  return (
    <View style={style.expenseContainer}>
      <View style={style.expenseContainerBody}>
        <View style={style.expenseContainerCard}>
          <Text style={style.expenseContainerText}>{result}</Text>
        </View>
        <View>
          <View
            style={{
              alignItems: 'center',
              margin: 10,
              marginTop: 90,
            }}>
            <View
              style={{flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
              {calcLayout.map((action, index) => {
                if (action === '=') {
                  return (
                    <View
                      key={index}
                      style={[
                        style.expenseContainerButtonView,
                        {width: '47%'},
                      ]}>
                      <Button color="white" title={`${action}`}></Button>
                    </View>
                  );
                }
                return (
                  <View key={index} style={style.expenseContainerButtonView}>
                    <Button
                      color="white"
                      onPress={() => onChange(action)}
                      title={`${action}`}></Button>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        <View style={{justifyContent: 'flex-end', marginTop: 20}}>
          <View
            style={{
              backgroundColor: '#487972',
              width: 300,
              marginLeft: 'auto',
              marginRight: 'auto',
              height: 50,
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Button color="white" title="Submit"></Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExpenseCalculator;
