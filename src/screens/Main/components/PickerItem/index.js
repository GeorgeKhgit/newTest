import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
import PickerItemView from './PickerItemView';
const PickerItem = ({info, history}) => {
  const dispatch = useDispatch();
  const choosePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 350,
      height: 400,
      cropping: true,
    }).then((image) => {
      dispatch({type: 'SETIMAGE', payload: {id: info.id, data: image.path}});
    });
  };
  const detailInfo = () => {
    history.navigate('image', {
      detailinfo: info.uri,
      title: info.name,
    });
  };
  return (
    <PickerItemView
      itemInfo={info}
      choserItemFunc={choosePhotoFromGallery}
      goToDetailScreenFunc={detailInfo}
    />
  );
};
export default PickerItem;
