import {
  DeckActions,
  DeckState,
  State,
  QuestionInput,
  Question,
  FetchDecksAction,
  AddDeckAction,
  EditDeckAction,
  DeleteDeckAction,
  AddCardAction,
  EditCardAction,
  DeleteCardAction,
  ThunkOfAction,
  DispatchOfAction,
  Deck,
  AddDeckThunk,
} from '../../ts/types';

import { Dispatch } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import { ThunkDispatch } from 'redux-thunk';
import ID from '../../utils/ID';

export const fetchDecks: (decks: DeckState) => FetchDecksAction = (decks) => ({
  type: DeckActions.FetchDeck,
  decks,
});

export const addDeck: (deck: Deck) => AddDeckAction = (deck) => ({
  type: DeckActions.AddDeck,
  deck,
});

export const editDeck: (deckName: string, deckId: string) => EditDeckAction = (
  deckName,
  deckId
) => ({
  type: DeckActions.EditDeck,
  deckName,
  deckId,
});

export const deleteDeck: (deckId: string) => DeleteDeckAction = (deckId) => ({
  type: DeckActions.DeleteDeck,
  deckId,
});

export const addCard: (question: Question, deckId: string) => AddCardAction = (
  question,
  deckId
) => ({
  type: DeckActions.AddCard,
  question,
  deckId,
});

export const editCard: (
  question: Question,
  deckId: string
) => EditCardAction = (question, deckId) => ({
  type: DeckActions.EditCard,
  question,
  deckId,
});

export const deleteCard: (
  questionId: string,
  deckId: string
) => DeleteCardAction = (questionId, deckId) => ({
  type: DeckActions.DeleteCard,
  questionId,
  deckId,
});

enum StorageKeys {
  Deck = 'DECK',
}

const saveStateToAsyncStorage = (state: State) => {
  AsyncStorage.setItem(StorageKeys.Deck, JSON.stringify(state.decks)).catch(
    (error) => {
      console.error('Error: ', error);
    }
  );
};

export const handleAddDeck = (deckName: string): AddDeckThunk => (
  dispatch: DispatchOfAction<AddDeckAction>,
  getState: () => State
) => {
  const deck: Deck = {
    id: ID(),
    title: deckName,
    questions: {},
  };
  dispatch(addDeck(deck));
  saveStateToAsyncStorage(getState());
  return deck.id;
};

export const handleEditDeck = (
  deckName: string,
  deckId: string
): ThunkOfAction<EditDeckAction> => (
  dispatch: DispatchOfAction<EditDeckAction>,
  getState: () => State
) => {
  dispatch(editDeck(deckName, deckId));
  saveStateToAsyncStorage(getState());
};

export const handleDeleteDeck = (
  deckId: string
): ThunkOfAction<DeleteDeckAction> => (
  dispatch: DispatchOfAction<DeleteDeckAction>,
  getState: () => State
) => {
  dispatch(deleteDeck(deckId));
  saveStateToAsyncStorage(getState());
};

export const handleAddCard = (
  questionInput: QuestionInput,
  deckId: string
): ThunkOfAction<AddCardAction> => (
  dispatch: Dispatch<AddCardAction>,
  getState: () => State
) => {
  const question: Question = {
    ...questionInput,
    id: ID(),
  };
  dispatch(addCard(question, deckId));
  saveStateToAsyncStorage(getState());
};

export const handleEditCard = (
  question: Question,
  deckId: string
): ThunkOfAction<EditCardAction> => (
  dispatch: Dispatch<EditCardAction>,
  getState: () => State
) => {
  dispatch(editCard(question, deckId));
  saveStateToAsyncStorage(getState());
};

export const handleDeleteCard = (
  questionId: string,
  deckId: string
): ThunkOfAction<DeleteCardAction> => (
  dispatch: Dispatch<DeleteCardAction>,
  getState: () => State
) => {
  dispatch(deleteCard(questionId, deckId));
  saveStateToAsyncStorage(getState());
};

export const handleFetchDecks = (): ThunkOfAction<FetchDecksAction> => (
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
