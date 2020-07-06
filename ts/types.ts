import { StackNavigationProp } from '@react-navigation/stack';

export type ModalStackParamList = {
  DeckList: undefined;
  AddDeck: undefined;
};

export type DeckListNavigationProp = StackNavigationProp<
  ModalStackParamList,
  'DeckList'
>;

export type DeckListProps = {
  navigation: DeckListNavigationProp;
};
