import React from 'react';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
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

  const choosePhotoFromGallery = (info) => {
    console.log('132131212321');
    ImagePicker.openPicker({
      width: 350,
      height: 400,
      cropping: true,
    }).then((image) => {
      dispatch({type: 'SETIMAGE', payload: {id: info.id, data: image.path}});
    });
  };
  const detailInfo = (info) => {
    history.navigate('image', {
      detailinfo: info.uri,
      title: info.name,
    });
  };

  return (
    <MainScreen
      iamgesItems={images}
      history={navigation}
      saveImageFunc={saveImages}
      photoFromGallery={choosePhotoFromGallery}
      datailInfromation={detailInfo}
    />
  );
};

export default MainContainer;
