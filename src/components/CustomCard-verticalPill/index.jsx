import {View, Text} from 'react-native';
import React from 'react';

export default function VerticalPillCardComponent({
  month,
  pillColor,
  backgroundColor,
  children,
  label,
  height,
  leftMargin,
}) {
  return (
    <View
      key={label}
      style={{
        backgroundColor: backgroundColor,
        height: height,
        flexDirection: 'row',
        borderRadius: 21,
        width: '80%',
        alignItems: 'center',
        marginTop: 30,
      }}>
      <View
        style={{
          backgroundColor: pillColor,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{rotate: '-90deg'}],
          width: height,
          borderRadius: 30,
          marginLeft: leftMargin,
        }}>
        <Text
          style={{
            height: 40,
            padding: 10,
          }}>
          {month}
        </Text>
      </View>
      {children}
    </View>
  );
}
