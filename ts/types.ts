import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ViewStyle } from 'react-native';

export interface QuestionInput {
  questionText: string;
  answer: string;
}
export interface Question {
  id: string;
  questionText: string;
  answer: string;
}

export interface Deck {
  id: string;
  title: string;
  questions: QuestionBank;
}

export interface QuestionBank {
  [questionId: string]: Question;
}

export interface DeckState {
  [deckId: string]: Deck;
}

export interface State {
  decks: DeckState;
}

export interface AddButtonProps {
  onPress: () => void;
  color: string;
}

export interface QuestionItemProps {
  question: Question;
  style?: ViewStyle;
  onPress?: () => void;
}

export enum DeckActions {
  FetchDeck = 'FetchDeck',
  AddDeck = 'AddDeck',
  EditDeck = 'EditDeck',
  DeleteDeck = 'DeleteDeck',
  AddCard = 'AddCard',
  EditCard = 'EditCard',
  DeleteCard = 'DeleteCard',
}

export interface FetchDecksAction {
  type: DeckActions.FetchDeck;
  decks: DeckState;
}

export interface AddDeckAction {
  type: DeckActions.AddDeck;
  deckName: string;
}

export interface EditDeckAction {
  type: DeckActions.EditDeck;
  deckName: string;
  deckId: string;
}

export interface DeleteDeckAction {
  type: DeckActions.DeleteDeck;
  deckId: string;
}

export interface AddCardAction {
  type: DeckActions.AddCard;
  question: Question;
  deckId: string;
}

export interface EditCardAction {
  type: DeckActions.EditCard;
  question: Question;
  deckId: string;
}

export interface DeleteCardAction {
  type: DeckActions.DeleteCard;
  questionId: string;
  deckId: string;
}

export type DeckActionTypes =
  | FetchDecksAction
  | AddDeckAction
  | EditDeckAction
  | DeleteDeckAction
  | AddCardAction
  | EditCardAction
  | DeleteCardAction;

export type ThunkOfAction<T extends DeckActionTypes> = ThunkAction<
  void,
  State,
  null,
  T
>;
export type DispatchOfAction<T extends DeckActionTypes> = ThunkDispatch<
  State,
  null,
  T
>;

export type DeckReducer = (
  state: DeckState,
  action: DeckActionTypes
) => DeckState;
