import { TextStyle, ViewStyle } from 'react-native';
import { greenSheen, lightgray } from './colors';

export const questionItemContainer: ViewStyle = {
  padding: 10,
  borderBottomColor: lightgray,
  borderBottomWidth: 1,
};

export const questionItemQuestionText: TextStyle = {
  fontWeight: 'bold',
  paddingBottom: 10,
};

export const questionItemAnswerText: TextStyle = {
  color: greenSheen,
};
