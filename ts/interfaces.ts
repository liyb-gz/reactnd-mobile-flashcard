export interface Question {
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
}

export interface FetchDecksAction {
  type: DeckActions.FetchDeck;
  decks: DeckState;
}

export interface AddDeckAction {
  type: DeckActions.AddDeck;
  deckName: string;
}

export type DeckActionTypes = FetchDecksAction | AddDeckAction;

export type DeckReducer = (
  state: DeckState,
  action: DeckActionTypes
) => DeckState;
