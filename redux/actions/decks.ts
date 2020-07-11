import { FetchDecksAction, DeckActions, DeckState } from '../../ts/interfaces';

export const fetchDecks: (decks: DeckState) => FetchDecksAction = (
  decks: DeckState
) => ({
  type: DeckActions.FetchDeck,
  decks,
});
