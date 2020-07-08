import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';
import AddButton from '../components/AddButton';
import { MainStackProps, Routes } from '../ts/navigation';
import { violetRed } from '../styles/colors';
import { FlatList } from 'react-native-gesture-handler';
import QuestionItem from '../components/QuestionItem';

const DeckView = ({ navigation, route }: MainStackProps<Routes.DeckView>) => {
  const { questions } = route.params.deck;

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={questions}
        keyExtractor={(item) => item.questionText}
        renderItem={({ item }) => <QuestionItem question={item} />}
      />
      <AddButton
        color={violetRed}
        onPress={() => {
          navigation.navigate(Routes.AddCard);
        }}
      />
    </View>
  );
};

export default DeckView;
