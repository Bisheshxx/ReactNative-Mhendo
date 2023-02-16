import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import style from './style';
import {Image} from 'react-native';

const ExpensesCarousel = () => {
  return (
    <View style={style.ExpenseView}>
      <Text style={style.ExpenseTitle}>Expenses</Text>
      <ScrollView
        horizontal={true}
        style={style.scrollViewStyle}
        showsHorizontalScrollIndicator={false}>
        <View style={style.addExpenses}>
          <Text>+Add</Text>
        </View>
        <View>
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            }}
            style={style.addExpenses}
          />
        </View>
        <View>
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            }}
            style={style.addExpenses}
          />
        </View>
        <View>
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            }}
            style={style.addExpenses}
          />
        </View>
        <View>
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            }}
            style={style.addExpenses}
          />
        </View>
        <View>
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            }}
            style={style.addExpenses}
          />
        </View>
        <View>
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            }}
            style={style.addExpenses}
          />
        </View>
        <View>
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            }}
            style={style.addExpenses}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ExpensesCarousel;
