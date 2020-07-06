import { StyleSheet } from 'react-native';
import * as deckCard from './deckCard';
import * as utils from './utils';
import * as floatingButton from './floatingButton';

const styles = StyleSheet.create({
  ...deckCard,
  ...utils,
  ...floatingButton,
});

export default styles;
