export interface Question {
  questionText: string;
  answer: string;
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

export interface QuestionItemProps {
  question: Question;
}
