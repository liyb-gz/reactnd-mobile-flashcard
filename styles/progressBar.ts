import { ViewStyle, TextStyle } from 'react-native';
import { tealBlue } from './colors';

export const progressBar: ViewStyle = {
  marginBottom: 10,
};

export const circularProgress: ViewStyle = {
  flex: 1,
  alignSelf: 'center',
  marginTop: 40,
};

export const circularProgressText: TextStyle = {
  fontSize: 64,
  color: tealBlue,
  fontWeight: 'bold',
};

export const circularProgressTextContainer: ViewStyle = {
  flex: 1,
  alignSelf: 'center',
  justifyContent: 'center',
};
