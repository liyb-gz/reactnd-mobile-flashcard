import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DeckList from '../containers/DeckList';
import { MainStackParamList } from '../ts/types';
import DeckView from '../containers/DeckView';
const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DeckList"
        component={DeckList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="DeckView" component={DeckView} />
    </Stack.Navigator>
  );
};

export default MainStack;
