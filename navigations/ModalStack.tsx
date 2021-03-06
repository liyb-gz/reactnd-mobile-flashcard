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
import { white, dark } from '../styles/colors';

const Stack = createStackNavigator<ModalStackParamList>();

const ModalStack = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <Icon name="clear" onPress={navigation.goBack} color={white} />
        ),
        headerLeftContainerStyle: styles.headerLeftIconSpacing,
        headerTintColor: white,
        headerStyle: styles.header,
      })}
    >
      <Stack.Screen
        name={Routes.MainStack}
        component={MainStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={Routes.AddDeck} component={AddDeck} />
      <Stack.Screen name={Routes.AddCard} component={AddCard} />
    </Stack.Navigator>
  );
};

export default ModalStack;
