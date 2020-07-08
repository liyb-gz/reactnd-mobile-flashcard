import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import styles from '../styles/styles';
import { Button, Input } from 'react-native-elements';
import { tealBlue } from '../styles/colors';
import { Routes, ModalStackProps } from '../ts/navigation';

const AddDeck = ({ navigation }: ModalStackProps<Routes.AddDeck>) => {
  const [deckName, setDeckName] = useState('');

  const handleSubmit = useCallback(() => {
    console.log('handleSubmit, deckName:', deckName);
    navigation.goBack();
  }, [deckName]);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Deck name"
        leftIcon={{ name: 'book', color: tealBlue }}
        inputContainerStyle={styles.addDeckTextInputContainer}
        inputStyle={styles.addDeckTextInput}
        onSubmitEditing={handleSubmit}
        value={deckName}
        onChangeText={setDeckName}
        autoFocus={true}
      />

      <Button
        title="Add Deck"
        buttonStyle={styles.tealBlueButton}
        containerStyle={styles.buttonContainer}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default AddDeck;
