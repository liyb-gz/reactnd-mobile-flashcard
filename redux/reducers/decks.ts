import {
  DeckActionTypes,
  DeckReducer,
  DeckState,
  DeckActions,
} from '../../ts/types';

import ID from '../../utils/ID';

const decks: DeckReducer = (state: DeckState = {}, action: DeckActionTypes) => {
  switch (action.type) {
    case DeckActions.FetchDeck:
      return action.decks;
    case DeckActions.AddDeck:
      const deckId = ID();
      return {
        ...state,
        [deckId]: {
          id: deckId,
          title: action.deckName,
          questions: [],
        },
      };
    case DeckActions.DeleteDeck:
      const { [action.deckId]: deckToBeDeleted, ...rest } = state;
      return rest;
    case DeckActions.AddCard:
      const cardId = ID();
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          questions: [
            ...state[action.deckId].questions,
            { ...action.question, id: cardId },
          ],
        },
      };
    default:
      return state;
  }
};

export default decks;
