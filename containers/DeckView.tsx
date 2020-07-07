import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';
import AddButton from '../components/AddButton';
import { MainStackProps, Routes } from '../ts/navigation';
import { greenSheen } from '../styles/colors';

const DeckView = ({ navigation }: MainStackProps<Routes.DeckView>) => {
  return (
    <View style={styles.container}>
      <Text>Deck View</Text>
      <AddButton
        color={greenSheen}
        onPress={() => {
          navigation.navigate(Routes.AddCard);
        }}
      />
    </View>
  );
};

export default DeckView;
