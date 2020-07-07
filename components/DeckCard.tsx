import React, { FunctionComponent } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';
import { Deck } from '../ts/interfaces';

const DeckCard: FunctionComponent<{ deck: Deck; onPress: () => void }> = ({
  deck,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.deckCard, styles.shadow]}
      onPress={onPress}
    >
      {/* TODO: Add icon here */}
      <Text style={styles.deckCardTitle}>{deck.title}</Text>
      <Text style={styles.deckCardText}>{deck.questions.length} cards</Text>
    </TouchableOpacity>
  );
};

export default DeckCard;
