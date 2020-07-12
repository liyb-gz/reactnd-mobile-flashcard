import React, { useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../styles/styles';
import { MainStackProps, Routes } from '../ts/navigation';
import { FlatList } from 'react-native-gesture-handler';
import QuestionItem from '../components/QuestionItem';
import { bottomButtonContainer } from '../styles/buttons';
import { StatusBar } from 'expo-status-bar';
import shuffle from 'lodash/shuffle';
import { ConnectedProps, connect } from 'react-redux';
import { State } from '../ts/interfaces';

const DeckView = ({
  navigation,
  questions,
  title,
  deckId,
}: MainStackProps<Routes.DeckView> & ConnectedProps<typeof connector>) => {
  useEffect(() => {
    navigation.setOptions({
      title,
    });
  }, []);
  return (
    <SafeAreaView style={styles.listContainer}>
      <StatusBar style="light" />
      {/* TODO: Add swipe action */}
      <FlatList
        data={questions}
        keyExtractor={(item) => item.questionText}
        renderItem={({ item }) => <QuestionItem question={item} />}
        ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <Text style={styles.listEmptyText}>Add a card to get started</Text>
          </View>
        )}
      />
      <View style={bottomButtonContainer}>
        <Button
          title="Start Quiz"
          disabled={questions.length === 0}
          buttonStyle={styles.tealBlueButton}
          containerStyle={styles.buttomButton}
          onPress={() => {
            navigation.navigate(Routes.Quiz, { questions: shuffle(questions) });
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
