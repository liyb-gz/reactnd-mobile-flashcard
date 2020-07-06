import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import DeckView from './containers/DeckView';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <DeckView />
    </SafeAreaView>
  );
}
