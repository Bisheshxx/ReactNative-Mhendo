import {View, Text} from 'react-native';
import React from 'react';
import style from './style';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;

const CardComponent = () => {
  const chartConfig = {
    backgroundColor: '#122139',
    backgroundGradientFrom: '#122133',
    backgroundGradientTo: '#122139',
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {},
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
    propsForLabels: {
      fontSize: 7,
    },
  };
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [190, 450, 28, 80, 100, 300, 100],
        color: (opacity = 0) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 0.1, // optional
      },
      {
        data: [2023, 8120, 1243, 3343, 4113, 4113],
        color: (opacity = 0.3) => `rgba(1, 133, 255, ${opacity})`, // optional
        strokeWidth: 1, // optional
      },
    ],
    legend: ['Expense', 'Profit'], // optional
  };
  return (
    <View
      width={screenWidth - 10}
      style={{
        alignItems: 'center',
        backgroundColor: '#122139',
        borderRadius: 35,
        margin: 5,
        paddingVertical: 10,
      }}>
      <LineChart
        data={data}
        width={screenWidth - 30}
        height={260}
        chartConfig={chartConfig}
        // renderDotContent={({x, y, index, indexData}) => (
        //   <Text
        //     style={{
        //       position: 'absolute',
        //       paddingTop: y + 10,
        //       paddingLeft: x - 20,
        //       color: 'white',
        //       fontSize: 6,
        //     }}>
        //     {index}
        //     {indexData}
        //   </Text>
        // )}
        style={{
          paddingRight: 30,
          width: '94%',
          marginRight: 0,
        }}
        bezier
      />
    </View>
    // <View style={{alignItems: 'center'}}>
    //   <LineChart
    //     data={data}
    //     width={Dimensions.get('window').width - 16} // from react-native
    //     height={220}
    //     chartConfig={chartConfig}
    //     style={{
    //       paddingRight: 0,
    //       width: Dimensions.get('window').width - 76,
    //     }}
    //   />
    // </View>
  );
};

export default CardComponent;
