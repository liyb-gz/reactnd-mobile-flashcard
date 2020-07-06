import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import DeckView from './containers/DeckView';
import styles from './styles/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="auto" />
      <DeckView />
    </SafeAreaView>
  );
}
