import React from 'react';
import { ModalStackParamList } from '../ts/types';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

import DeckList from '../containers/DeckList';
import AddDeck from '../containers/AddDeck';
import styles from '../styles/styles';
import MainStack from '../navigations/MainStack';

const Stack = createStackNavigator<ModalStackParamList>();

const ModalStack = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="MainStack"
        component={MainStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddDeck"
        component={AddDeck}
        options={({ navigation }) => ({
          title: 'Add a new deck',
          headerLeft: () => <Icon name="clear" onPress={navigation.goBack} />,
          headerLeftContainerStyle: styles.headerLeftIconSpacing,
        })}
      />
    </Stack.Navigator>
  );
};

export default ModalStack;
