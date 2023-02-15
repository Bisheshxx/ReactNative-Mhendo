import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import style from './style';

const CheckBoxComponent = ({data}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={style.checkBoxFlex}>
      <CheckBox
        style={style.checkBox}
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => Alert.alert('unchecked')}
      />
      <Text>{data}</Text>
    </View>
  );
};

export default CheckBoxComponent;
