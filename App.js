import React from 'react';
import {Provider} from 'react-redux';
import HomeScreen from './src/screen/Home';
import Detail from './src/screen/Detail';
import Favorites from './src/screen/FavoritesScreen';
import {store} from './src/app/store';
import {NavigationContainer, useNavigation} from '@react-navigation/native'; // useNavigation eklenmeli
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IconButton} from 'react-native-paper';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation}) => ({
              // options fonksiyonu içinde navigation alınmalı
              headerRight: () => (
                <IconButton
                  icon="heart"
                  size={30}
                  color="red"
                  style={{marginRight: 10}}
                  onPress={() => navigation.navigate('Favorites')} // navigation değişkeni kullanılmalı
                />
              ),
            })}
          />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Favorites" component={Favorites} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
