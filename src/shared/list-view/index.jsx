import {View, Text} from 'react-native';
import React from 'react';
import style from './style';

const ListView = ({children}) => {
  return <View style={style.ListViewContainers}>{children}</View>;
};

export default ListView;
