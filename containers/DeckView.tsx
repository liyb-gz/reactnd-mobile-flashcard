import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';
import AddButton from '../components/AddButton';
import { MainStackProps, Routes } from '../ts/navigation';

const DeckView = ({ navigation, route }: MainStackProps<Routes.DeckView>) => {
  return (
    <View style={styles.container}>
      <Text>Deck View</Text>
      <AddButton
        onPress={() => {
          navigation.navigate(Routes.AddCard);
        }}
      />
    </View>
  );
};

export default DeckView;
