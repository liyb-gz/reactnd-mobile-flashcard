import React, { useCallback, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from '../styles/styles';
import { Button, Input } from 'react-native-elements';
import { tealBlue } from '../styles/colors';
import { Routes, ModalStackProps } from '../ts/navigation';
import { StatusBar } from 'expo-status-bar';

const AddDeck = ({ navigation }: ModalStackProps<Routes.AddDeck>) => {
  const [deckName, setDeckName] = useState('');

  const handleSubmit = useCallback(() => {
    console.log('handleSubmit, deckName:', deckName);
    navigation.goBack();
  }, [deckName]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.inputContainer}>
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
      </View>

      {/* TODO: submit button conditionally disabled*/}

      <View style={styles.bottomButtonContainer}>
        <Button
          title="Add Deck"
          buttonStyle={styles.tealBlueButton}
          containerStyle={styles.buttomButton}
          onPress={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddDeck;
