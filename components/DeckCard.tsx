import React, { FunctionComponent } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';
import { Deck } from '../ts/types';

const DeckCard: FunctionComponent<{
  deck: Deck;
  onPress: () => void;
  onLongPress: () => void;
}> = ({ deck, onPress, onLongPress }) => {
  return (
    <TouchableOpacity
      style={[styles.deckCard, styles.shadow]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      {/* TODO: Add icon here */}
      <Text style={styles.deckCardTitle}>{deck.title}</Text>
      <Text style={styles.deckCardText}>
        {deck.questions.length} card{deck.questions.length > 1 ? 's' : ''}
      </Text>
    </TouchableOpacity>
  );
};

export default DeckCard;
