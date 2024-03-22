import React from 'react';
import {Provider} from 'react-redux';
import HomeScreen from './src/screen/Home';
import { store } from './src/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
