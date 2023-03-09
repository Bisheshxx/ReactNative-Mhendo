import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import style from './style';

export default function KhataScreen() {
  return (
    <ScrollView style={style.khataScroll}>
      <Text style={style.khataText}>Khata Screen</Text>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 8, 123, 2, 3, 3, 3, 23, 23, 23, 23, 23, 23, 3,
          4, 4, 4, 4, 33, 3,
        ].map(item => {
          return (
            <View style={style.khataPersonView}>
              <Text style={style.khataPersonViewText}>Person {item}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
