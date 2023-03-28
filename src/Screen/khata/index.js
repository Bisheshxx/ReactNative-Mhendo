import {View, Text, ScrollView, Button} from 'react-native';
import React from 'react';
import style from './style';

export default function KhataScreen() {
  return (
    <ScrollView style={style.khataScroll}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}></View>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        <View style={style.khataPersonView}>
          <Button
            style={style.khataPersonViewText}
            title={`Add`}
            color={`white`}></Button>
        </View>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 8, 123, 2, 3, 3, 3, 23, 23, 23, 23, 23, 23, 3,
          4, 4, 4, 4, 33, 3,
        ].map(item => {
          return (
            <View style={style.khataPersonView}>
              <Button
                style={style.khataPersonViewText}
                title={`Person ${item}`}
                color={`white`}></Button>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
