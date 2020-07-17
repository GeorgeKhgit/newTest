import React from 'react';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {sendDataToApi} from '../../redux/actions';
import MainScreen from './MainScreen';

const MainContainer = ({navigation}) => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);

  const saveImages = () => {
    let checkArray = images.filter((item) => item.uri);
    if (checkArray.length === 5) {
      dispatch(sendDataToApi(images));
    } else {
      return Alert.alert(
        'Alert',
        'select all 5 image please and then try again',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };

  return (
    <MainScreen
      iamgesItems={images}
      history={navigation}
      saveImageFunc={saveImages}
    />
  );
};

export default MainContainer;
