import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { Deck, Question } from './interfaces';

export enum Routes {
  MainStack = 'MainStack',
  AddDeck = 'AddDeck',
  DeckList = 'DeckList',
  DeckView = 'DeckView',
  AddCard = 'AddCard',
  Quiz = 'Quiz',
  Result = 'Result',
}

export type ModalStackParamList = {
  [Routes.MainStack]: undefined;
  [Routes.AddDeck]: undefined;
  [Routes.AddCard]: { deckId: string };
};

export type ModalStackNavigationProp = StackNavigationProp<ModalStackParamList>;

export type ModalStackRouteProp<
  T extends keyof ModalStackParamList
> = RouteProp<ModalStackParamList, T>;

export type ModalStackProps<T extends keyof ModalStackParamList> = {
  navigation: ModalStackNavigationProp;
  route: ModalStackRouteProp<T>;
};

export type MainStackParamList = {
  [Routes.DeckList]: undefined;
  [Routes.DeckView]: { deckId: string };
  [Routes.Quiz]: { deckId: string };
  [Routes.Result]: {
    deckId: string;
    percentage: number;
    numOfCorrect: number;
    numOfQuestions: number;
  };
};

export type MainStackNavigationProp<
  T extends keyof MainStackParamList
> = CompositeNavigationProp<
  ModalStackNavigationProp,
  StackNavigationProp<MainStackParamList, T>
>;

export type MainStackRouteProp<T extends keyof MainStackParamList> = RouteProp<
  MainStackParamList,
  T
>;

export type MainStackProps<T extends keyof MainStackParamList> = {
  navigation: MainStackNavigationProp<T>;
  route: MainStackRouteProp<T>;
};
