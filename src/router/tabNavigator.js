import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from '../screen/characters';
import Loacations from '../screen/locations';
import Episodes from '../screen/episodes';
import {CHARACTERS, EPISODES, LOCATIONS} from '../utils/routes';
import {Location, People, Book1} from 'iconsax-react-native';
import {AppColors} from '../theme/colors';
import {screenWrapper} from '../styles/screenWrapperStyle';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: screenWrapper.headerStyle,
        tabBarStyle: screenWrapper.tabBarStyle,
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case CHARACTERS:
              return (
                <People
                  size={size}
                  color={color}
                  variant={focused ? 'Bold' : 'Outline'}
                />
              );
            case LOCATIONS:
              return (
                <Location
                  size={size}
                  color={color}
                  variant={focused ? 'Bold' : 'Outline'}
                />
              );
            case EPISODES:
              return (
                <Book1
                  size={size}
                  color={color}
                  variant={focused ? 'Bold' : 'Outline'}
                />
              );
          }
        },
        tabBarActiveTintColor: AppColors.GREEN,
        tabBarInactiveTintColor: AppColors.WHITE,
        headerTintColor: AppColors.WHITE,
      })}>
      <Tab.Screen name={CHARACTERS} component={Characters} />
      <Tab.Screen name={LOCATIONS} component={Loacations} />
      <Tab.Screen name={EPISODES} component={Episodes} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
