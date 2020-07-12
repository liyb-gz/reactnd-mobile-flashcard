import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { SafeAreaView, FlatList, View, Text } from 'react-native';

import DeckCard from '../components/DeckCard';
import { State, DeckState, FetchDecksThunkDispatch } from '../ts/interfaces';
import styles from '../styles/styles';
import { MainStackProps, Routes } from '../ts/navigation';
import { Button } from 'react-native-elements';
import { handleFetchCard } from '../redux/actions/decks';

const FakeData: DeckState = {
  '7ad35492-a137-5088-a4fa-7698ea739aa4': {
    id: '7ad35492-a137-5088-a4fa-7698ea739aa4',
    title: 'Geography',
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
  '87e318ae-8f1e-552c-9604-feb5de4aebc4': {
    id: '87e318ae-8f1e-552c-9604-feb5de4aebc4',
    title: 'JavaScript',
    questions: [
      {
        questionText: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
  '3d9e49a0-2c00-5cfc-a95d-11355a058aad': {
    id: '3d9e49a0-2c00-5cfc-a95d-11355a058aad',
    title: 'Vue',
    questions: [],
  },
};

const DeckList = ({
  navigation,
  fetchDecks,
  decks,
}: MainStackProps<Routes.DeckList> & ConnectedProps<typeof connector>) => {
  useEffect(() => {
    fetchDecks();
  }, []);
  console.log('DeckList, decks: ', decks);
  return (
    decks && (
      <SafeAreaView style={[styles.container, styles.screen]}>
        {/* TODO: Add swipe action */}
        <FlatList
          data={Object.keys(decks)}
          keyExtractor={(deckName) => decks[deckName].title}
          renderItem={({ item: deckName }) => (
            <DeckCard
              deck={decks[deckName]}
              onPress={() =>
                navigation.navigate(Routes.DeckView, {
                  deckId: decks[deckName].id,
                })
              }
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <Text style={styles.listEmptyText}>
                Add a deck to get started
              </Text>
            </View>
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
    )
  );
};

const mapState = (state: State) => ({
  decks: state.decks,
});

const mapDispatch = (dispatch: FetchDecksThunkDispatch) => {
  return {
    fetchDecks: () => dispatch(handleFetchCard()),
  };
};

const connector = connect(mapState, mapDispatch);

export default connector(DeckList);
