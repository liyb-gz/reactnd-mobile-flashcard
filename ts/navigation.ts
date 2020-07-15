import { StackNavigationProp } from '@react-navigation/stack';
import {
  CompositeNavigationProp,
  RouteProp,
  ParamListBase,
} from '@react-navigation/native';

export enum Routes {
  MainStack = 'MainStack',
  AddDeck = 'AddDeck',
  DeckList = 'DeckList',
  DeckView = 'DeckView',
  AddCard = 'AddCard',
  Quiz = 'Quiz',
  Result = 'Result',
}

// https://github.com/react-navigation/react-navigation/issues/6931
// By frankyjuang
type SubNavigator<T extends ParamListBase> = {
  [K in keyof T]: { screen: K; params?: T[K] };
}[keyof T];

export type ModalStackParamList = {
  [Routes.MainStack]: SubNavigator<MainStackParamList>;
  [Routes.AddDeck]: { isEdit: true; deckId: string } | undefined;
  [Routes.AddCard]:
    | { isEdit: true; deckId: string; questionId: string }
    | { deckId: string };
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
