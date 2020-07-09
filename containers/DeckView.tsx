import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../styles/styles';
import { MainStackProps, Routes } from '../ts/navigation';
import { FlatList } from 'react-native-gesture-handler';
import QuestionItem from '../components/QuestionItem';
import { bottomButtonContainer } from '../styles/buttons';
import { StatusBar } from 'expo-status-bar';

const DeckView = ({ navigation, route }: MainStackProps<Routes.DeckView>) => {
  const { questions } = route.params.deck;

  return (
    <View style={styles.listContainer}>
      <StatusBar style="light" />
      <FlatList
        data={questions}
        keyExtractor={(item) => item.questionText}
        renderItem={({ item }) => <QuestionItem question={item} />}
      />
      <View style={bottomButtonContainer}>
        <Button
          title="Start Quiz"
          buttonStyle={styles.tealBlueButton}
          containerStyle={styles.buttomButton}
          onPress={() => {
            navigation.navigate(Routes.Quiz, { questions });
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
    </View>
  );
};

export default DeckView;
