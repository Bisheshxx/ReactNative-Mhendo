import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  ExpenseTitle: {
    fontWeight: 'bold',
    color: 'white',
  },
  ExpenseTitleHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 5,
  },
  ExpenseView: {
    alignItems: 'flex-start',
    backgroundColor: '#120A3B',
    width: '100%',
    borderRadius: 25,
    padding: 9,
    margin: 10,
  },
  addExpenses: {
    flex: 1,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B1B1B1',
    margin: 10,
    borderRadius: 11,
  },
  scrollViewStyle: {
    height: 60,
  },
});
