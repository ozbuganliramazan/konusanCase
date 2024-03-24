// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import {CHARACTERDETAIL, TAB} from '../utils/routes';
import CharacterDetail from '../screen/characters/characterDetail';
import {screenWrapper} from '../styles/screenWrapperStyle';
import {AppColors} from '../theme/colors';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: screenWrapper.headerStyle,
        headerTintColor: AppColors.WHITE,
        headerBackTitleVisible: false,
        headerTitle: '',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TAB}
        component={TabNavigator}
      />
      <Stack.Screen name={CHARACTERDETAIL} component={CharacterDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
