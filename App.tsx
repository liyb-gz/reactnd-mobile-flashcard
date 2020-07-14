import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import ModalStack from './navigations/ModalStack';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './redux/reducers';
import middleware from './redux/middleware';

import FlashMessage from 'react-native-flash-message';

const store = createStore(reducer, middleware);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          <ModalStack />
        </NavigationContainer>
        <FlashMessage position="top" />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
