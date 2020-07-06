import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

import DeckList from './containers/DeckList';
import AddDeck from './containers/AddDeck';
import styles from './styles/styles';
import { ModalStackParamList } from './ts/types';

const Stack = createStackNavigator<ModalStackParamList>();

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator mode="modal">
          <Stack.Screen
            name="DeckList"
            component={DeckList}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AddDeck"
            component={AddDeck}
            options={({ navigation }) => ({
              title: 'Add a new deck',
              headerLeft: () => (
                <Icon name="clear" onPress={navigation.goBack} />
              ),
              headerLeftContainerStyle: styles.headerLeftIconSpacing,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
