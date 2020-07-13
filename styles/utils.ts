import { ViewStyle, StatusBar, TextStyle } from 'react-native';
import { white, lightgray } from './colors';

export const shadow: ViewStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
};

export const shadowLg: ViewStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,

  elevation: 10,
};

export const screen: ViewStyle = {
  flex: 1,
  paddingTop: StatusBar.currentHeight /* for Android only */,
};

export const listContainer: ViewStyle = {
  flex: 1,
  backgroundColor: white,
};

export const inputContainer: ViewStyle = {
  flex: 1,
  paddingTop: 20,
};

export const flex: ViewStyle = {
  flex: 1,
};

export const container: ViewStyle = {
  flex: 1,
  padding: 10,
  backgroundColor: white,
};

export const keyboardAvoidingView: ViewStyle = {
  flex: 1,
};

export const headerLeftIconSpacing: ViewStyle = {
  marginLeft: 15,
};

export const bottom: ViewStyle = {
  position: 'absolute',
  bottom: 20,
};

export const mutedText: TextStyle = {
  color: lightgray,
};

export const smallText: TextStyle = {
  fontSize: 14,
};
