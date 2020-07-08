import { ViewStyle, Platform, StatusBar } from 'react-native';

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
  backgroundColor: 'white',
};

export const container: ViewStyle = {
  flex: 1,
  padding: 10,
  backgroundColor: 'white',
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
