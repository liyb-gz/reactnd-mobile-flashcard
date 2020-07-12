import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DeckList from '../containers/DeckList';
import { MainStackParamList, Routes } from '../ts/navigation';
import DeckView from '../containers/DeckView';
import styles from '../styles/styles';
import { white } from '../styles/colors';
import Quiz from '../containers/Quiz';
import Result from '../containers/Result';

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerText,
        headerTintColor: white,
      }}
    >
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
        options={() => ({
          headerBackTitle: 'Home',
        })}
      />
      <Stack.Screen name={Routes.Quiz} component={Quiz} />
      <Stack.Screen name={Routes.Result} component={Result} />
    </Stack.Navigator>
  );
};

export default MainStack;
