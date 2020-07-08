import { ViewStyle, TextStyle } from 'react-native';
import { tealBlue, violetRed } from './colors';

export const tealBlueButton: ViewStyle = {
  backgroundColor: tealBlue,
};

export const violetRedButton: ViewStyle = {
  backgroundColor: violetRed,
};

export const buttonContainer: ViewStyle = {
  left: 10,
  paddingHorizontal: 10,
  position: 'absolute',
  bottom: 20,
  width: '100%',
};

export const bottomButtonContainer: ViewStyle = {
  padding: 10,
  flexDirection: 'row',
};

export const buttomButton: ViewStyle = {
  flex: 1,
  marginHorizontal: 5,
};
