import React, { FunctionComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';
import { Deck, Question } from '../ts/types';

const quizCard: FunctionComponent<{
  question: Question;
  hideAnswer?: boolean;
}> = ({ question, hideAnswer }) => {
  return (
    <View style={[styles.quizCard, styles.shadow]}>
      <Text style={styles.quizCardQuestion}>{question.questionText}</Text>
      {!hideAnswer && (
        <Text style={styles.quizCardAnswer}>{question.answer}</Text>
      )}
    </View>
  );
};

export default quizCard;
