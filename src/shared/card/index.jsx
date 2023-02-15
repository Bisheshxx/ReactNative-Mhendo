import {View, Text} from 'react-native';
import React from 'react';

const CommonCard = ({children, height, width, backGroundColor}) => {
  return (
    <View
      style={{
        height: height,
        width: `${width}`,
        backgroundColor: `${backGroundColor}`,
        borderRadius: 50,
        padding: 35,
      }}>
      {children}
    </View>
  );
};

export default CommonCard;
