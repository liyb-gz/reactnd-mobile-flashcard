import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../styles/styles';
import { MainStackProps, Routes } from '../ts/navigation';
import { FlatList } from 'react-native-gesture-handler';
import QuestionItem from '../components/QuestionItem';
import { bottomButtonContainer } from '../styles/buttons';
import { StatusBar } from 'expo-status-bar';
import shuffle from 'lodash/shuffle';

const DeckView = ({ navigation, route }: MainStackProps<Routes.DeckView>) => {
  const { questions } = route.params.deck;

  return (
    <SafeAreaView style={styles.listContainer}>
      <StatusBar style="light" />
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
            navigation.navigate(Routes.AddCard);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DeckView;
