import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';

const PickerItem = ({info, addPhotoToGalleryFunc, goToDetaItemFunc}) => {
  return (
    <View style={styles.container}>
      {!info.uri ? (
        <>
          <Text style={styles.containerText}>{info.name}</Text>

          <TouchableOpacity onPress={() => addPhotoToGalleryFunc(info)}>
            <Text>ADD IMG</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          onPress={() => {
            goToDetaItemFunc(info);
          }}
          style={styles.imgItemContainerWrapper}>
          <Image style={styles.imgItemContainer} source={{uri: info.uri}} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PickerItem;
