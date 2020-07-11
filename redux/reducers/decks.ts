import {
  DeckActionTypes,
  DeckReducer,
  DeckState,
  DeckActions,
} from '../../ts/interfaces';

const decks: DeckReducer = (state: DeckState = {}, action: DeckActionTypes) => {
  switch (action.type) {
    case DeckActions.FetchDeck:
      return action.decks;
    default:
      return state;
  }
};

export default decks;
