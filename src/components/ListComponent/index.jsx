import {View, Text, Image, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import style from './style';

const ListComponent = () => {
  const [counter, setCounter] = useState(1);
  const data = [
    {
      image: 'https://en.wikipedia.org/wiki/Coffee',
      title: 'Coffee1',
      price: 200,
      quantitySold: 1,
    },
    {
      image:
        'https://static.vecteezy.com/system/resources/previews/002/412/377/original/coffee-cup-logo-coffee-shop-icon-design-free-vector.jpg',
      title: 'Title',
      price: 200,
      quantitySold: 1,
    },
    {
      image:
        'https://t4.ftcdn.net/jpg/02/28/17/93/360_F_228179370_8hfaZdNhOTCbqgkZgYQgiYveQXLCDTnC.jpg',
      title: 'Coffee3',
      price: 200,
      quantitySold: 1,
    },
  ];
  return (
    <View style={style.container}>
      <View style={style.listContainer}>
        <View style={style.listContainerLeft}>
          <Image
            style={style.listContainerImage}
            source={{
              uri: data[1].image,
            }}
          />
          <View style={style.listContainerLeftTextChild}>
            <Text style={style.listContainerTitle}>{data[1].title}</Text>
            <Text style={{color: 'white'}}>Rs. {data[1].price}</Text>
          </View>
        </View>
        <View>
          <View style={style.listContainerQuantity}>
            <Button
              title="+"
              onPress={() => {
                setCounter(counter + 1);
              }}
            />
            <TextInput
              style={style.listContainerTextField}
              inputMode="numeric"
              onChange={e => setCounter(e.nativeEvent.text)}
              value={`${counter}`}
            />
            <Button
              title="-"
              onPress={() => {
                setCounter(counter - 1);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ListComponent;
