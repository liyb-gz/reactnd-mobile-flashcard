import { StyleSheet } from 'react-native';
import * as deckCard from './deckCard';
import * as utils from './utils';
import * as floatingButton from './floatingButton';
import * as textInput from './textInput';
import * as buttons from './buttons';
import * as deckHeader from './deckHeader';

const styles = StyleSheet.create({
  ...deckCard,
  ...deckHeader,
  ...utils,
  ...floatingButton,
  ...textInput,
  ...buttons,
});

export default styles;
