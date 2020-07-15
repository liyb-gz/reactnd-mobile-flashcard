import React, { useCallback, useState, createRef } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import styles from '../styles/styles';
import { Routes, ModalStackProps } from '../ts/navigation';
import { tealBlue } from '../styles/colors';
import { StatusBar } from 'expo-status-bar';
import { ConnectedProps, connect } from 'react-redux';
import {
  DispatchOfAction,
  AddCardAction,
  QuestionInput,
  Question,
  State,
  EditCardAction,
} from '../ts/types';
import { handleAddCard, handleEditCard } from '../redux/actions/decks';

const AddCard = ({
  isEdit,
  initialQuestionText,
  initialAnswer,
  questionId,
  deckId,
  navigation,
  addCard,
  editCard,
}: ModalStackProps<Routes.AddCard> & ConnectedProps<typeof connector>) => {
  navigation.setOptions({
    title: isEdit ? 'Edit card' : 'Add a new card',
  });

  const answerInput = createRef<Input>();

  const [questionText, setQuestionText] = useState(initialQuestionText);
  const [answer, setAnswer] = useState(initialAnswer);

  const handleSubmit = useCallback(() => {
    if (isEdit && questionId) {
      editCard({ questionText, answer, id: questionId }, deckId);
    } else {
      addCard({ questionText, answer }, deckId);
    }
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
          ref={answerInput}
        />
      </View>

      <View style={styles.bottomButtonContainer}>
        <Button
          title={isEdit ? 'Save' : 'Add Deck'}
          disabled={questionText.length === 0 || answer.length === 0}
          buttonStyle={styles.tealBlueButton}
          containerStyle={styles.buttomButton}
          onPress={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
};

const mapState = (state: State, { route }: ModalStackProps<Routes.AddCard>) => {
  const { deckId } = route.params;

  let initialQuestionText = '';
  let initialAnswer = '';
  let questionId: string | null = null;

  if ('questionId' in route.params) {
    questionId = route.params.questionId;
    initialAnswer = state.decks[deckId].questions[questionId].answer;
    initialQuestionText =
      state.decks[deckId].questions[questionId].questionText;
  }

  let isEdit = false;
  if ('isEdit' in route.params) {
    isEdit = route.params.isEdit;
  }

  return {
    isEdit,
    deckId,
    questionId,
    initialQuestionText,
    initialAnswer,
  };
};

const mapDispatch = (
  dispatch: DispatchOfAction<AddCardAction | EditCardAction>
) => ({
  addCard: (question: QuestionInput, deckId: string) => {
    dispatch(handleAddCard(question, deckId));
  },
  editCard: (question: Question, deckId: string) => {
    dispatch(handleEditCard(question, deckId));
  },
});

const connector = connect(mapState, mapDispatch);

export default connector(AddCard);
