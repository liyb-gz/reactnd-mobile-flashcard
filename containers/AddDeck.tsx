import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import styles from '../styles/styles';
import { Button, Input } from 'react-native-elements';
import { tealBlue } from '../styles/colors';

const AddDeck = () => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Deck name"
        leftIcon={{ name: 'book', color: tealBlue }}
        inputContainerStyle={styles.addDeckTextInputContainer}
        inputStyle={styles.addDeckTextInput}
      />

      <Button
        title="Add Deck"
        buttonStyle={styles.tealBlueButton}
        containerStyle={styles.buttonContainer}
      />
    </View>
  );
};

export default AddDeck;
