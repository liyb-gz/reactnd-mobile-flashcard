import { ViewStyle, TextStyle } from 'react-native';
import { textColor, beige } from './colors';

export const deckCard: ViewStyle = {
  backgroundColor: beige,
  margin: 10,
  padding: 20,
  borderRadius: 5,
};

export const deckCardTitle: TextStyle = {
  fontSize: 21,
  fontWeight: 'bold',
  paddingBottom: 10,
  color: textColor,
};
