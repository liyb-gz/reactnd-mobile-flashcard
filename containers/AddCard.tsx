import React, { useCallback, useState, createRef } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import styles from '../styles/styles';
import { Routes, ModalStackProps } from '../ts/navigation';
import { tealBlue } from '../styles/colors';
import { StatusBar } from 'expo-status-bar';

const AddCard = ({ navigation }: ModalStackProps<Routes.AddCard>) => {
  const answerInput = createRef<Input>();

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = useCallback(() => {
    console.log('handleSubmit. Question: ', question, 'Answer: ', answer);
    navigation.goBack();
  }, [question, answer]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Input
        value={question}
        onChangeText={setQuestion}
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

      {/* TODO: submit button conditionally disabled*/}

      <Button
        title="Add Card"
        buttonStyle={styles.tealBlueButton}
        containerStyle={styles.buttonContainer}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default AddCard;
