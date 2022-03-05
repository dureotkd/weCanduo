/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import Config from 'react-native-config';
import {Provider} from 'react-redux';
import AppIndex from './AppIndex';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppIndex />
    </Provider>
  );
};

export default App;
