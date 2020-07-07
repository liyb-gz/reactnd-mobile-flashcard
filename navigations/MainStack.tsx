import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DeckList from '../containers/DeckList';
import { MainStackParamList, Routes } from '../ts/navigation';
import DeckView from '../containers/DeckView';
import styles from '../styles/styles';
import { white } from '../styles/colors';

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.DeckList}
        component={DeckList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Routes.DeckView}
        component={DeckView}
        options={({ route }) => ({
          headerTitle: route.params.deck.title,
          headerBackTitle: 'Home',
          headerStyle: styles.deckHeader,
          headerTitleStyle: styles.deckHeaderText,
          headerTintColor: white,
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
