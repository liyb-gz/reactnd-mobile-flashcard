import React from 'react';
import { View, Text } from 'react-native';
import { QuestionItemProps } from '../ts/interfaces';
import styles from '../styles/styles';

const QuestionItem = ({ question }: QuestionItemProps) => {
  const { questionText, answer } = question;
  return (
    <View style={styles.questionItemContainer}>
      <Text style={styles.questionItemQuestionText}>{questionText}</Text>
      <Text style={styles.questionItemAnswerText}>{answer}</Text>
    </View>
  );
};

export default QuestionItem;
