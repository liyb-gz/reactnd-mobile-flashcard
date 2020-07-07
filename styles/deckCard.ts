import { ViewStyle, TextStyle } from 'react-native';
import { white, tealBlue } from './colors';

export const deckCard: ViewStyle = {
  backgroundColor: tealBlue,
  margin: 10,
  padding: 20,
  borderRadius: 5,
};

export const deckCardText: TextStyle = {
  color: white,
};

export const deckCardTitle: TextStyle = {
  fontSize: 21,
  fontWeight: 'bold',
  paddingBottom: 10,
  color: white,
};
