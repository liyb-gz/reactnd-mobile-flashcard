import { ViewStyle, TextStyle } from 'react-native';
import { white, dark, tealBlue } from './colors';

export const quizCard: ViewStyle = {
  backgroundColor: white,
  marginVertical: 10,
  padding: 20,
  borderRadius: 5,
  minHeight: 200,
  justifyContent: 'center',
};

export const quizCardAnswer: TextStyle = {
  paddingTop: 10,
  color: dark,
};

export const quizCardQuestion: TextStyle = {
  fontSize: 21,
  fontWeight: 'bold',
  color: tealBlue,
};
