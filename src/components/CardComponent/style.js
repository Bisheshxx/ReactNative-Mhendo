import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  CardView: {
    backgroundColor: '#122139',
    width: '100%',
    margin: 3,
    borderRadius: 40,
    height: 300,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  CardViewTitleText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  CardViewSubTitleText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  CardViewHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  CardViewLineChart: {
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 20,
  },
});
