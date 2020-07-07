import React from 'react';
import {
  ModalStackParamList,
  Routes,
  ModalStackProps,
  ModalStackNavigationProp,
} from '../ts/navigation';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

import AddCard from '../containers/AddCard';
import AddDeck from '../containers/AddDeck';
import MainStack from '../navigations/MainStack';
import styles from '../styles/styles';

const Stack = createStackNavigator<ModalStackParamList>();

const ModalScreenOptions = (navigation: ModalStackNavigationProp) => ({
  headerLeft: () => <Icon name="clear" onPress={navigation.goBack} />,
  headerLeftContainerStyle: styles.headerLeftIconSpacing,
});

const ModalStack = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name={Routes.MainStack}
        component={MainStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Routes.AddDeck}
        component={AddDeck}
        options={({ navigation }) => ({
          title: 'Add a new deck',
          ...ModalScreenOptions(navigation),
        })}
      />
      <Stack.Screen
        name={Routes.AddCard}
        component={AddCard}
        options={({ navigation }) => {
          return {
            title: 'Add a new card',
            ...ModalScreenOptions(navigation),
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default ModalStack;
