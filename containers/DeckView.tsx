import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../styles/styles';
import { MainStackProps, Routes } from '../ts/navigation';
import QuestionItem from '../components/QuestionItem';
import { bottomButtonContainer } from '../styles/buttons';
import { StatusBar } from 'expo-status-bar';
import { ConnectedProps, connect } from 'react-redux';
import { State } from '../ts/interfaces';
import { SwipeListView } from 'react-native-swipe-list-view';

const DeckView = ({
  navigation,
  questions,
  title,
  deckId,
}: MainStackProps<Routes.DeckView> & ConnectedProps<typeof connector>) => {
  useEffect(() => {
    navigation.setOptions({
      title: `${title} (${questions.length} card${
        questions.length > 1 ? 's' : ''
      })`,
    });
  }, [questions]);

  return (
    <SafeAreaView style={styles.listContainer}>
      <StatusBar style="light" />
      {/* TODO: Add swipe action */}
      <SwipeListView
        data={questions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <QuestionItem
            question={item}
            style={styles.listRowFront}
            onPress={() => {
              console.log('Edit card', deckId, item.id);
            }}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <Text style={styles.listEmptyText}>Add a card to get started</Text>
          </View>
        )}
        renderHiddenItem={({ item }) => (
          <View style={styles.listRowBack}>
            <TouchableOpacity
              style={[styles.listBackRightBtn]}
              onPress={() => console.log('delete card: ', deckId, item)}
            >
              <Text style={styles.listBackTextWhite}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        disableRightSwipe={true}
        rightOpenValue={-100}
        stopRightSwipe={-150}
        useNativeDriver={true}
      />
      <View style={bottomButtonContainer}>
        <Button
          title="Start Quiz"
          disabled={questions.length === 0}
          buttonStyle={styles.tealBlueButton}
          containerStyle={styles.buttomButton}
          onPress={() => {
            navigation.navigate(Routes.Quiz, { deckId });
          }}
        />
        <Button
          title="Add Card"
          buttonStyle={styles.tealBlueButton}
          containerStyle={styles.buttomButton}
          onPress={() => {
            navigation.navigate(Routes.AddCard, { deckId });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const mapState = (state: State, { route }: MainStackProps<Routes.DeckView>) => {
  const { deckId } = route.params;
  return {
    questions: state.decks[deckId].questions,
    title: state.decks[deckId].title,
    deckId,
  };
};

const connector = connect(mapState);

export default connector(DeckView);
