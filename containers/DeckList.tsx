import React from 'react';

import { SafeAreaView, FlatList } from 'react-native';

import DeckCard from '../components/DeckCard';
import { FlashCardData } from '../ts/interfaces';
import styles from '../styles/styles';
import { MainStackProps, Routes } from '../ts/navigation';
import AddButton from '../components/AddButton';
import { tealBlue } from '../styles/colors';

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

const DeckList = ({ navigation }: MainStackProps<Routes.DeckList>) => {
  return (
    <SafeAreaView style={[styles.container, styles.screen]}>
      <FlatList
        data={Object.keys(FakeData)}
        keyExtractor={(item) => FakeData[item].title}
        renderItem={({ item }) => (
          <DeckCard
            deck={FakeData[item]}
            onPress={() =>
              navigation.navigate(Routes.DeckView, { deck: FakeData[item] })
            }
          />
        )}
      />
      <AddButton
        color={tealBlue}
        onPress={() => {
          navigation.navigate(Routes.AddDeck);
        }}
      />
    </SafeAreaView>
  );
};

export default DeckList;
