import {View, Text, ScrollView, Button} from 'react-native';
import React from 'react';
import style from './style';

export default function SinglePersonKhata() {
  const data = [
    {
      key: 1,
      ammount: '100',
      date: '10/12/2023',
      type: 'add',
    },
    {
      key: 2,
      ammount: '200',
      date: '10/12/2023',
      type: 'sub',
    },
    {
      key: 3,
      ammount: '100',
      date: '10/12/2023',
      type: 'add',
    },
    {
      key: 4,
      ammount: '200',
      date: '10/12/2023',
      type: 'sub',
    },
    {
      key: 5,
      ammount: '100',
      date: '10/12/2023',
      type: 'add',
    },
    {
      key: 6,
      ammount: '200',
      date: '10/12/2023',
      type: 'sub',
    },
    {
      key: 43,
      ammount: '200',
      date: '10/12/2023',
      type: 'sub',
    },
    {
      key: 53,
      ammount: '100',
      date: '10/12/2023',
      type: 'add',
    },
    {
      key: 63,
      ammount: '200',
      date: '10/12/2023',
      type: 'sub',
    },
  ];
  const mappedData = data?.map(item => {
    return (
      <View
        style={{
          margin: 5,
          borderRadius: 15,
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#212f3b',
          height: 70,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          // opacity: 0.59,
        }}
        key={item.key}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            width: 80,
            alignItems: 'center',
          }}>
          Rs. {item.ammount}
        </Text>
        <Text
          style={{
            color: 'white',
            width: 80,
            alignItems: 'center',
          }}>
          {item.date}
        </Text>
        {item.type === 'add' ? (
          <Text style={{color: 'green', width: 40, alignItems: 'center'}}>
            Up
          </Text>
        ) : (
          <Text style={{color: 'red', width: 40, alignItems: 'center'}}>
            Down
          </Text>
        )}
      </View>
    );
  });
  return (
    <View style={{backgroundColor: '#0d1923', marginTop: 35, height: '100%'}}>
      <View>
        <View style={style.personDetail}>
          <View
            style={{
              height: 90,
              width: 90,
              backgroundColor: 'grey',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>BT</Text>
          </View>
          <Text style={style.textHeaderHead}>Bishesh Tuladhar</Text>
          <Text style={style.textHeaderHeadSmall}>Rs.100</Text>
        </View>
        <ScrollView
          style={{
            backgroundColor: '#122139',
            margin: 5,
            marginTop: 30,
            borderRadius: 10,
            height: 470,
          }}>
          {mappedData}
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: '#487972',
          width: 300,
          marginLeft: 'auto',
          marginRight: 'auto',
          height: 50,
          justifyContent: 'center',
          marginTop: 30,
          borderRadius: 10,
        }}>
        <Button color="white" title="Edit"></Button>
      </View>
    </View>
  );
}
