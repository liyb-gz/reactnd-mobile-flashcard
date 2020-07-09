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
        questionText: 'What is the capital of Chile?',
        answer: 'Santiago',
      },
      {
        questionText: 'What is the highest mountain in Britain?',
        answer: 'Ben Nevis',
      },
      {
        questionText: 'What is the smallest country in the world?',
        answer: 'Vatican City',
      },
      {
        questionText: 'Alberta is a province of which country?',
        answer: 'Canada',
      },
      {
        questionText: 'How many countries still have the shilling as currency?',
        answer: 'Four – Kenya, Uganda, Tanzania and Somalia',
      },
      {
        questionText:
          'Which is the only vowel not used as the first letter in a US State?',
        answer: 'E',
      },
      {
        questionText: 'What is the largest country in the world?',
        answer: 'Russia',
      },
      {
        questionText: 'Where would you find the River Thames?',
        answer: 'London, UK',
      },
      {
        questionText: 'What is the hottest continent on Earth?',
        answer: 'Africa',
      },
      {
        questionText: 'What is the longest river in the world?',
        answer: 'River Nile',
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
