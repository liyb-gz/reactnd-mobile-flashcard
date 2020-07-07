import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { Deck } from './interfaces';

export enum Routes {
  MainStack = 'MainStack',
  AddDeck = 'AddDeck',
  DeckList = 'DeckList',
  DeckView = 'DeckView',
}

export type ModalStackParamList = {
  [Routes.MainStack]: undefined;
  [Routes.AddDeck]: undefined;
};

export type MainStackParamList = {
  [Routes.DeckList]: undefined;
  [Routes.DeckView]: { deck: Deck }; // Add params later here
};

export type MainStackNavigationProp<
  T extends keyof MainStackParamList
> = CompositeNavigationProp<
  StackNavigationProp<ModalStackParamList>,
  StackNavigationProp<MainStackParamList, T>
>;

export type MainStackProps<T extends keyof MainStackParamList> = {
  navigation: MainStackNavigationProp<T>;
};

export type AddButtonProps = {
  onPress: () => void;
};
