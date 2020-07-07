import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from '../styles/styles';
import { Button } from 'react-native-elements';

const AddDeck = () => {
  return (
    <View style={styles.container}>
      <Text>Testing</Text>
      <Button title="Add Deck" />
    </View>
  );
};

export default AddDeck;
