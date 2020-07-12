import {
  FetchDecksAction,
  DeckActions,
  DeckState,
  AddDeckAction,
  Question,
  AddCardAction,
  State,
  AddDeckThunk,
  AddCardThunk,
  FetchDecksThunk,
} from '../../ts/interfaces';

import { Dispatch } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export const fetchDecks: (decks: DeckState) => FetchDecksAction = (decks) => ({
  type: DeckActions.FetchDeck,
  decks,
});

export const addDeck: (deckName: string) => AddDeckAction = (deckName) => ({
  type: DeckActions.AddDeck,
  deckName,
});

export const addCard: (question: Question, deckId: string) => AddCardAction = (
  question,
  deckId
) => ({
  type: DeckActions.AddCard,
  question,
  deckId,
});

enum StorageKeys {
  Deck = 'DECK',
}

export const handleAddDeck = (deckName: string): AddDeckThunk => (
  dispatch: ThunkDispatch<State, void, AddDeckAction>,
  getState: () => State
) => {
  dispatch(addDeck(deckName));
  const state = getState();
  AsyncStorage.setItem(StorageKeys.Deck, JSON.stringify(state.decks)).catch(
    (error) => {
      console.error('Error: ', error);
    }
  );
};

export const handleAddCard = (
  question: Question,
  deckId: string
): AddCardThunk => (
  dispatch: Dispatch<AddCardAction>,
  getState: () => State
) => {
  dispatch(addCard(question, deckId));
  const state = getState();
  AsyncStorage.setItem(StorageKeys.Deck, JSON.stringify(state.decks)).catch(
    (error) => {
      console.error('Error: ', error);
    }
  );
};

export const handleFetchCard = (): FetchDecksThunk => (
  dispatch: Dispatch<FetchDecksAction>
) => {
  AsyncStorage.getItem(StorageKeys.Deck)
    .then((deckData) => {
      if (deckData !== null) {
        return JSON.parse(deckData);
      } else {
        return {};
      }
    })
    .then((decks: DeckState) => {
      dispatch(fetchDecks(decks));
    })
    .catch((error) => {
      console.error('Error: ', error);
    });
};
