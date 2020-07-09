import React, { useCallback, useState, createRef } from 'react';
import { SafeAreaView, View } from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.inputContainer}>
        <Input
          value={question}
          onChangeText={setQuestion}
          placeholder="Question"
          leftIcon={{ name: 'help', color: tealBlue }}
          inputContainerStyle={styles.addCardTextInputContainer}
          inputStyle={styles.addCardTextInput}
          returnKeyType="next"
          blurOnSubmit={false}
          // autoFocus={true}
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

      {/* TODO: submit button conditionally disabled*/}

      <View style={styles.bottomButtonContainer}>
        <Button
          title="Add Deck"
          buttonStyle={styles.tealBlueButton}
          containerStyle={styles.buttomButton}
          onPress={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddCard;
