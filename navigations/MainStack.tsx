import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DeckList from '../containers/DeckList';
import { MainStackParamList, Routes } from '../ts/navigation';
import DeckView from '../containers/DeckView';

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
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
