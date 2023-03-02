import {View, Text, Button, ScrollView} from 'react-native';
import React, {useState} from 'react';
import style from './style';

const ExpenseCalculator = () => {
  let [calc, setCalc] = useState({
    sign: '',
    num: '',
    res: null,
  });
  let [history, setHistory] = useState('');
  const calculationHistory = value => {
    if (history === '') {
      return setHistory(`${value}`);
    }
    if (
      history.charAt(history.length - 1) === '+' ||
      history.charAt(history.length - 1) === '-' ||
      history.charAt(history.length - 1) === 'x' ||
      history.charAt(history.length - 1) === '/'
    ) {
      if (value === '+' || value === '-' || value === 'x' || value === '/') {
        let previousState = history.substring(0, history.length - 1);
        setHistory(`${previousState}${value}`);
        return;
      }
    }
    setHistory(`${history}${value}`);
  };

  const numClickHandler = e => {
    calculationHistory(e);
    if (calc.num === '') {
      return setCalc({...calc, num: `${e}`});
    }
    return setCalc({
      ...calc,
      num: `${calc.num}${e}`,
    });
  };
  const resetClickHandler = e => {
    setHistory('');
    return setCalc({
      sign: '',
      num: '',
      res: null,
    });
  };
  const invertClickHandler = e => {
    console.log('invert');
  };
  const percentClickHandler = e => {
    console.log('percent');
  };
  const equalsClickHandler = e => {
    switch (calc.sign) {
      case '+':
        let result = add(calc.res, calc.num);
        return setCalc({res: result, sign: '', num: ''});
      case '-':
        console.log(calc, 'state');
        let sub = substract(calc.res, calc.num);
        return setCalc({res: sub, sign: '', num: ''});

      case 'x':
        let mul = multiply(calc.res, calc.num);
        return setCalc({res: mul, sign: '', num: ''});

      case '/':
        let div = divide(calc.res, calc.num);
        return setCalc({res: div, sign: '', num: ''});

      default:
        return;
    }
    // return setCalc({...calc,})
    //calculate and set first number and reset secondnumber and set result
  };
  const add = (a, b) => {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);
    return num1 + num2;
  };
  const multiply = (a, b) => {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);
    return num1 * num2;
  };
  const divide = (a, b) => {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);
    return num1 / num2;
  };
  const substract = (a, b) => {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);
    return num1 - num2;
  };
  const signClickHandler = e => {
    calculationHistory(e);
    const previous = parseFloat(calc.num);
    if (calc.res === null) {
      return setCalc({...calc, res: previous, num: '', sign: e});
    }
    if (calc.sign === '' || calc.sign) {
      setCalc({...calc, sign: e});
    }
    if (calc.res && calc.num != '' && calc.sign != '') {
      switch (calc.sign) {
        case '+':
          let result = add(calc.res, calc.num);
          return setCalc({res: result, sign: e, num: ''});
        case '-':
          console.log(calc, 'state');
          let sub = substract(calc.res, calc.num);
          return setCalc({res: sub, sign: e, num: ''});
        case 'x':
          let mul = multiply(calc.res, calc.num);
          return setCalc({res: mul, sign: e, num: ''});
        case '/':
          let div = divide(calc.res, calc.num);
          return setCalc({res: div, sign: e, num: ''});
        default:
          return;
      }
    }
    //TODO set sign and set second num
    // switch (e) {
    //   case '+':
    //     return setCalc({...calc, operator: '+'});
    //   case '-':
    //     return setCalc({...calc, operator: '+'});
    //   case '+':
    //     return setCalc({...calc, operator: '+'});
    //   case '+':
    //     return setCalc({...calc, operator: '+'});
    //   default:
    //     return;
    // }
  };

  const DecimalClickHandler = e => {
    console.log(e);
    // setCalc({...calc, res: `${calc.res}${e}`});
    // console.log(calc.res);
  };
  const calcLayout = [
    'C',
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
          <Text style={style.expenseContainerText}>
            res:{calc.res}num:{calc.num}sign:{calc.sign}
          </Text>
        </View>
        <View style={style.expenseContainerCardCalculations}>
          <Text style={style.expenseContainerTextCalculation}>{history}</Text>
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
                        onPress={() => equalsClickHandler()}
                        title={`${action}`}></Button>
                    </View>
                  );
                }
                return (
                  <View key={index} style={style.expenseContainerButtonView}>
                    <Button
                      color="white"
                      onPress={
                        action === 'C'
                          ? () => resetClickHandler()
                          : action === '+/-'
                          ? () => invertClickHandler()
                          : action === '%'
                          ? () => percentClickHandler()
                          : action === '='
                          ? () => equalsClickHandler()
                          : action === '/' ||
                            action === 'x' ||
                            action === '-' ||
                            action === '+'
                          ? () => signClickHandler(action)
                          : () => numClickHandler(action)
                      }
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
