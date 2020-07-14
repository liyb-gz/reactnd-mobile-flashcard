import { ViewStyle, TextStyle, View } from 'react-native';
import { greenSheen, white, red } from './colors';

export const listEmpty: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  marginVertical: 20,
};

export const listEmptyText: TextStyle = {
  fontSize: 18,
  color: greenSheen,
  textAlignVertical: 'center',
};

export const listRowFront: ViewStyle = {
  backgroundColor: white,
};

export const listRowBack: ViewStyle = {
  alignItems: 'center',
  backgroundColor: red,
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingLeft: 15,
};

export const listBackTextWhite: TextStyle = {
  color: white,
};

export const listBackRightBtn: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  backgroundColor: red,
  bottom: 0,
  top: 0,
  right: 0,
  width: 100,
};
