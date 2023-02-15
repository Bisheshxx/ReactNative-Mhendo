import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  HomeScreen: {
    marginTop: 35,
    alignItems: 'center',
    margin: 5,
  },
  homeScreenHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
    padding: 10,
    height: 50,
  },
  homeScreenCardView: {
    backgroundColor: '#120A3B',
    width: '100%',
    margin: 3,
    borderRadius: 40,
    padding: 10,
    height: 100,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  textTitle: {
    fontSize: 25,
    fontWeight: '800',
    color: 'white',
  },
});
