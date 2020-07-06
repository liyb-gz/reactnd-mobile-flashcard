import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';
import { Deck } from '../ts/interfaces';

const DeckCard: FunctionComponent<{ deck: Deck }> = ({ deck }) => {
  return (
    <View style={[styles.deckCard, styles.shadow]}>
      <Text style={styles.deckCardTitle}>{deck.title}</Text>
      <Text>{deck.questions.length} cards</Text>
    </View>
  );
};

export default DeckCard;
