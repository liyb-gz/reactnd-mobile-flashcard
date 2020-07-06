import React from 'react';

import { View, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

import DeckCard from '../components/DeckCard';
import { FlashCardData } from '../ts/interfaces';
import styles from '../styles/styles';
import { tealBlue } from '../styles/colors';
import { DeckListProps } from '../ts/types';

const FakeData: FlashCardData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
};

const DeckList = ({ navigation }: DeckListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(FakeData)}
        keyExtractor={(item) => FakeData[item].title}
        renderItem={({ item }) => (
          <DeckCard
            deck={FakeData[item]}
            onPress={() =>
              navigation.navigate('DeckView', { deck: FakeData[item] })
            }
          />
        )}
      />
      <Icon
        name="add"
        reverse
        color={tealBlue}
        containerStyle={[styles.floatingButton, styles.shadowLg]}
        onPress={() => {
          navigation.navigate('AddDeck');
        }}
      />
    </View>
  );
};

export default DeckList;
