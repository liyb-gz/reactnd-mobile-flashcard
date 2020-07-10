import { ViewStyle, TextStyle } from 'react-native';
import { greenSheen } from './colors';

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
