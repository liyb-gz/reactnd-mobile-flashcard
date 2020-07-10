import { ViewStyle, TextStyle } from 'react-native';
import { tealBlue, greenSheen } from './colors';

export const resultTextContainer: ViewStyle = { flex: 1, alignItems: 'center' };
export const resultText: TextStyle = {
  fontSize: 24,
  color: greenSheen,
};
export const resultScore: TextStyle = {
  fontSize: 40,
  color: tealBlue,
  fontWeight: 'bold',
  lineHeight: 60,
};
