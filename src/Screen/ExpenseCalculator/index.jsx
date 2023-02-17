import {View, Text, Button, ScrollView} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import {act} from 'react-test-renderer';

const ExpenseCalculator = () => {
  let [calc, setCalc] = useState({
    sign: '',
    num: '',
    res: '0',
  });

  const toLocaleString = num =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

  const removeSpaces = num => num.toString().replace(/\s/g, '');
  const handleNumber = e => {
    console.log(e);
    // setCalc({...calc, res: `${calc.res}${e}`});
    // console.log(calc.res);
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
          <Text style={style.expenseContainerText}>{calc.res}</Text>
        </View>
        <View style={style.expenseContainerCardCalculations}>
          <Text style={style.expenseContainerTextCalculation}>
            {/* {calculation} */}
          </Text>
        </View>
        <View>
          <View
            style={{
              alignItems: 'center',
              margin: 10,
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
                      <Button
                        color="white"
                        onPress={handleNumber}
                        title={`${action}`}></Button>
                    </View>
                  );
                }
                return (
                  <View key={index} style={style.expenseContainerButtonView}>
                    <Button
                      color="white"
                      onPress={() => handleNumber(action)}
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
