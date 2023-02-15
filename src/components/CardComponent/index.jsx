import {View, Text} from 'react-native';
import React from 'react';
import style from './style';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;

const CardComponent = () => {
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    propsForLabels: {
      fontSize: 7,
      marginTop: 2,
    },
  };
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [190000, 4500, 2800, 8000, 9900, 4300, 1000],
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
    <View style={[style.CardView, style.shadowProp]}>
      <View style={style.CardViewHeader}>
        <View>
          <Text style={style.CardViewTitleText}>Total</Text>
          <Text style={style.CardViewSubTitleText}>$12312323</Text>
        </View>
        <View>
          <Text style={style.CardViewTitleText}>Expense</Text>
          <Text style={style.CardViewSubTitleText}>$12312323</Text>
        </View>
        <View>
          <Text style={style.CardViewTitleText}>Profit</Text>
          <Text style={style.CardViewSubTitleText}>$12312323</Text>
        </View>
      </View>
      <View style={style.CardViewLineChart}>
        <LineChart
          data={data}
          width={360}
          height={160}
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
          //     {index} is
          //     {indexData}
          //   </Text>
          // )}
        />
      </View>
    </View>
  );
};

export default CardComponent;
