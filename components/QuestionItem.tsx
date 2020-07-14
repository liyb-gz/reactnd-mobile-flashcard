import React from 'react';
import { View, Text } from 'react-native';
import { QuestionItemProps } from '../ts/interfaces';
import styles from '../styles/styles';

const QuestionItem = ({ question, style }: QuestionItemProps) => {
  const { questionText, answer } = question;
  return (
    <View style={[styles.questionItemContainer, style]}>
      <Text style={styles.questionItemQuestionText}>{questionText}</Text>
      <Text style={styles.questionItemAnswerText}>{answer}</Text>
    </View>
  );
};

export default QuestionItem;
