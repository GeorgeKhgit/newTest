import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainContainer from '../screens/Main';
import DetailScreen from '../screens/Detail';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="imagepicker"
        component={MainContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="image"
        component={DetailScreen}
        options={({route}) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
