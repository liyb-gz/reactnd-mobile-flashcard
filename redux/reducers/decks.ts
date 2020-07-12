import {
  DeckActionTypes,
  DeckReducer,
  DeckState,
  DeckActions,
} from '../../ts/interfaces';

import ID from '../../utils/ID';

const decks: DeckReducer = (state: DeckState = {}, action: DeckActionTypes) => {
  switch (action.type) {
    case DeckActions.FetchDeck:
      return action.decks;
    case DeckActions.AddDeck:
      const id = ID();
      return {
        ...state,
        [id]: {
          id,
          title: action.deckName,
          questions: [],
        },
      };
    case DeckActions.AddCard:
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          questions: [...state[action.deckId].questions, action.question],
        },
      };
    default:
      return state;
  }
};

export default decks;
