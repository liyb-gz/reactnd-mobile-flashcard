export interface Question {
  questionText: string;
  answer: string;
}

export interface Deck {
  title: string;
  questions: Question[];
}

export interface DeckState {
  [deckName: string]: Deck;
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
}

export interface FetchDecksAction {
  type: DeckActions.FetchDeck;
  decks: DeckState;
}

export type DeckActionTypes = FetchDecksAction;

export type DeckReducer = (
  state: DeckState,
  action: DeckActionTypes
) => DeckState;
