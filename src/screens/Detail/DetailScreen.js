import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './style';

const DetailScreen = ({route}) => {
  const {detailinfo} = route.params;
  console.log(detailinfo);
  return (
    <View style={styles.container}>
      <Image style={styles.containerImage} source={{uri: detailinfo}} />
    </View>
  );
};
export default DetailScreen;
