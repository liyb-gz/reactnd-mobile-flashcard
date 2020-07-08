import React from 'react';

import { SafeAreaView, FlatList, View } from 'react-native';

import DeckCard from '../components/DeckCard';
import { FlashCardData } from '../ts/interfaces';
import styles from '../styles/styles';
import { MainStackProps, Routes } from '../ts/navigation';
import { Button } from 'react-native-elements';

const FakeData: FlashCardData = {
  React: {
    title: 'React',
    questions: [
      {
        questionText: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        questionText: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
      {
        questionText: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        questionText: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
      {
        questionText: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        questionText: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
      {
        questionText: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        questionText: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
      {
        questionText: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        questionText: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
      {
        questionText: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        questionText: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
      {
        questionText: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        questionText: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
      {
        questionText: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        questionText: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
      {
        questionText: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        questionText: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
      {
        questionText: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        questionText: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
      {
        questionText: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        questionText: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        questionText: 'What is a closure?',
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
      <View style={styles.bottomButtonContainer}>
        <Button
          title="Add Deck"
          buttonStyle={styles.tealBlueButton}
          containerStyle={styles.buttomButton}
          onPress={() => {
            navigation.navigate(Routes.AddDeck);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DeckList;
