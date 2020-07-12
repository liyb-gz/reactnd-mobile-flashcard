import React, { useCallback, useState, createRef } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import styles from '../styles/styles';
import { Routes, ModalStackProps } from '../ts/navigation';
import { tealBlue } from '../styles/colors';
import { StatusBar } from 'expo-status-bar';
import { ConnectedProps, connect } from 'react-redux';
import { Question, AddCardThunkDispatch } from '../ts/interfaces';
import { handleAddCard } from '../redux/actions/decks';

const AddCard = ({
  navigation,
  route,
  addCard,
}: ModalStackProps<Routes.AddCard> & ConnectedProps<typeof connector>) => {
  const answerInput = createRef<Input>();

  const [questionText, setQuestionText] = useState('');
  const [answer, setAnswer] = useState('');

  const { deckId } = route.params;

  const handleSubmit = useCallback(() => {
    console.log('handleSubmit. Question: ', questionText, 'Answer: ', answer);
    addCard({ questionText, answer }, deckId);
    navigation.goBack();
  }, [questionText, answer, deckId]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.inputContainer}>
        <Input
          value={questionText}
          onChangeText={setQuestionText}
          placeholder="Question"
          leftIcon={{ name: 'help', color: tealBlue }}
          inputContainerStyle={styles.addCardTextInputContainer}
          inputStyle={styles.addCardTextInput}
          returnKeyType="next"
          blurOnSubmit={false}
          autoFocus={true}
          onSubmitEditing={() =>
            answerInput.current && answerInput.current.focus()
          }
        />

        <Input
          value={answer}
          onChangeText={setAnswer}
          placeholder="Answer"
          leftIcon={{ name: 'comment', color: tealBlue }}
          inputContainerStyle={styles.addCardTextInputContainer}
          inputStyle={styles.addCardTextInput}
          onSubmitEditing={handleSubmit}
          ref={answerInput}
        />
      </View>

      <View style={styles.bottomButtonContainer}>
        <Button
          title="Add Deck"
          disabled={questionText.length === 0 || answer.length === 0}
          buttonStyle={styles.tealBlueButton}
          containerStyle={styles.buttomButton}
          onPress={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
};

const mapDispatch = (dispatch: AddCardThunkDispatch) => ({
  addCard: (question: Question, deckId: string) => {
    dispatch(handleAddCard(question, deckId));
  },
});

const connector = connect(null, mapDispatch);

export default connector(AddCard);
