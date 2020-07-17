import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {styles} from './style';
import PickerItem from './components/PickerItem';

const MainScreen = ({iamgesItems, saveImageFunc, history}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>car photos adding</Text>
      </View>

      <View style={styles.wrapperFlatlist}>
        <FlatList
          data={iamgesItems}
          renderItem={({item}) => (
            <PickerItem navigation={history} info={item} />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          saveImageFunc();
        }}
        style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainScreen;
