import {
  FetchDecksAction,
  DeckActions,
  DeckState,
  AddDeckAction,
} from '../../ts/interfaces';

export const fetchDecks: (decks: DeckState) => FetchDecksAction = (
  decks: DeckState
) => ({
  type: DeckActions.FetchDeck,
  decks,
});

export const addDeck: (deckName: string) => AddDeckAction = (
  deckName: string
) => ({
  type: DeckActions.AddDeck,
  deckName,
});
