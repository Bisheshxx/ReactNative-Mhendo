import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  ExpenseTitle: {
    fontWeight: 'bold',
  },
  ExpenseView: {
    alignItems: 'flex-start',
    backgroundColor: 'pink',

    width: '100%',
    borderRadius: 25,
    padding: 10,
    margin: 10,
  },
  addExpenses: {
    flex: 1,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    margin: 10,
  },
  scrollViewStyle: {
    height: 60,
  },
});
