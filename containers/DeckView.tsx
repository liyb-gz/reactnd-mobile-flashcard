import React from 'react';
import { View, FlatList } from 'react-native';
import DeckCard from '../components/DeckCard';
import { FlashCardData } from '../ts/interfaces';

const FakeData: FlashCardData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
};

const DeckView = () => {
  return (
    <View>
      <FlatList
        data={Object.keys(FakeData)}
        keyExtractor={(item) => FakeData[item].title}
        renderItem={({ item }) => <DeckCard deck={FakeData[item]} />}
      />
    </View>
  );
};

export default DeckView;
