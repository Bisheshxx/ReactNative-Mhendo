import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  listContainerImage: {
    width: 51,
    height: 51,
    resizeMode: 'contain',
  },
  listContainer: {
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    gap: 10,
    height: 100,
    backgroundColor: 'pink',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listContainerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContainerLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  listContainerLeftTextChild: {
    flex: 1,
    flexDirection: 'column',
    gap: 5,
  },
});