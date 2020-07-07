export interface Question {
  question: String;
  answer: String;
}

export interface Deck {
  title: string;
  questions: Question[];
}

export interface FlashCardData {
  [deckName: string]: Deck;
}

export interface AddButtonProps {
  onPress: () => void;
  color: string;
}
