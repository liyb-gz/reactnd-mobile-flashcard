import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ModalStack from './navigations/ModalStack';

import styles from './styles/styles';
import { tealBlue } from './styles/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <ModalStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
