import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { SafeAreaView, FlatList, View, Text } from 'react-native';

import DeckCard from '../components/DeckCard';
import { State, DeckState, FetchDecksThunkDispatch } from '../ts/interfaces';
import styles from '../styles/styles';
import { MainStackProps, Routes } from '../ts/navigation';
import { Button } from 'react-native-elements';
import { handleFetchCard } from '../redux/actions/decks';

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
