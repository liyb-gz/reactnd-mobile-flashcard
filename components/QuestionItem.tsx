import React from 'react';
import { TouchableOpacity, Text, TouchableHighlight, View } from 'react-native';
import { QuestionItemProps } from '../ts/types';
import styles from '../styles/styles';
import { lightgray } from '../styles/colors';

const QuestionItem = ({ question, style, onPress }: QuestionItemProps) => {
  const { questionText, answer } = question;
  return (
    <TouchableHighlight
      style={[styles.questionItemContainer, style]}
      underlayColor={lightgray}
      activeOpacity={0.3}
      onPress={onPress}
    >
      <View>
        <Text style={styles.questionItemQuestionText}>{questionText}</Text>
        <Text style={styles.questionItemAnswerText}>{answer}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default QuestionItem;
