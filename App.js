import {View, Text} from 'react-native';
import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {store} from './redux/store';
import HomeScreen from './src/screen/Home';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
