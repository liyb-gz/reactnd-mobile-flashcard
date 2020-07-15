import {
  DeckActionTypes,
  DeckReducer,
  DeckState,
  DeckActions,
  Question,
} from '../../ts/types';

import ID from '../../utils/ID';
import produce from 'immer';

const decks: DeckReducer = (state: DeckState = {}, action: DeckActionTypes) => {
  switch (action.type) {
    case DeckActions.FetchDeck:
      return action.decks;

    case DeckActions.AddDeck:
      const newDeckId = ID();
      const newDeck = {
        id: newDeckId,
        title: action.deckName,
        questions: {},
      };
      return produce(state, (draft) => {
        draft[newDeckId] = newDeck;
      });

    case DeckActions.EditDeck:
      return produce(state, (draft) => {
        draft[action.deckId].title = action.deckName;
      });

    case DeckActions.DeleteDeck:
      return produce(state, (draft) => {
        delete draft[action.deckId];
      });

    case DeckActions.AddCard:
      const cardId = ID();
      const newQuestion: Question = {
        ...action.question,
        id: cardId,
      };
      return produce(state, (draft) => {
        draft[action.deckId].questions[cardId] = newQuestion;
      });

    case DeckActions.EditCard:
      const { deckId: deckIdToBeEdited, question } = action;
      return produce(state, (draft) => {
        draft[deckIdToBeEdited].questions[question.id] = question;
      });

    case DeckActions.DeleteCard:
      const { deckId: deckIdToBeDeleted, questionId } = action;
      return produce(state, (draft) => {
        delete draft[deckIdToBeDeleted].questions[questionId];
      });

    default:
      return state;
  }
};

export default decks;
