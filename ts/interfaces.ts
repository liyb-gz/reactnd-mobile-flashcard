import { ThunkAction, ThunkDispatch } from 'redux-thunk';

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
  questions: Question[];
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
}

export enum DeckActions {
  FetchDeck = 'FetchDeck',
  AddDeck = 'AddDeck',
  AddCard = 'AddCard',
}

export interface FetchDecksAction {
  type: DeckActions.FetchDeck;
  decks: DeckState;
}

export interface AddDeckAction {
  type: DeckActions.AddDeck;
  deckName: string;
}

export interface AddCardAction {
  type: DeckActions.AddCard;
  question: Question;
  deckId: string;
}

export type FetchDecksThunk = ThunkAction<void, State, null, FetchDecksAction>;

export type FetchDecksThunkDispatch = ThunkDispatch<
  State,
  null,
  FetchDecksAction
>;

export type AddDeckThunk = ThunkAction<void, State, null, AddDeckAction>;
export type AddDeckThunkDispatch = ThunkDispatch<State, null, AddDeckAction>;

export type AddCardThunk = ThunkAction<void, State, null, AddCardAction>;
export type AddCardThunkDispatch = ThunkDispatch<State, null, AddCardAction>;

export type DeckActionTypes = FetchDecksAction | AddDeckAction | AddCardAction;
export type DeckThunkTypes = FetchDecksThunk | AddDeckThunk | AddCardThunk;

export type DeckReducer = (
  state: DeckState,
  action: DeckActionTypes
) => DeckState;
