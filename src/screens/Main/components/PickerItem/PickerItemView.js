import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';

const PickerItemView = ({itemInfo, choserItemFunc, goToDetailScreenFunc}) => {
  return (
    <View style={styles.container}>
      {!itemInfo.uri ? (
        <>
          <Text style={styles.containerText}>{itemInfo.name}</Text>

          <TouchableOpacity onPress={choserItemFunc}>
            <Text>ADD IMG</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          onPress={() => {
            goToDetailScreenFunc();
          }}
          style={styles.imgItemContainerWrapper}>
          <Image style={styles.imgItemContainer} source={{uri: itemInfo.uri}} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PickerItemView;
