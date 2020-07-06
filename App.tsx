import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ModalStack from './navigations/ModalStack';

import styles from './styles/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <ModalStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}
