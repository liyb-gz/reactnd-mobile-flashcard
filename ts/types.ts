import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { Deck } from './interfaces';

export type ModalStackParamList = {
  MainStack: undefined;
  AddDeck: undefined;
};

export type DeckListNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ModalStackParamList>,
  StackNavigationProp<MainStackParamList, 'DeckList'>
>;

export type DeckListProps = {
  navigation: DeckListNavigationProp;
};

export type MainStackParamList = {
  DeckList: undefined;
  DeckView: { deck: Deck }; // Add params later here
};
