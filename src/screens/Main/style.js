import {StyleSheet, Dimensions, Platform} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleWrapper: {
    width: Dimensions.get('window').width,
    height: 45,
    backgroundColor: '#EBF0F1',
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    color: '#333E42',
    paddingLeft: 25,
    textTransform: 'uppercase',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 140,
    paddingVertical: 13,
    backgroundColor: '#EBF0F1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
  },
  buttonText: {
    color: '#333E42',
    textTransform: 'uppercase',
  },
  wrapperFlatlist: {
    height: 400,
  },
});
