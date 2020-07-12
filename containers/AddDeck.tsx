import React, { useCallback, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from '../styles/styles';
import { Button, Input } from 'react-native-elements';
import { tealBlue } from '../styles/colors';
import { Routes, ModalStackProps } from '../ts/navigation';
import { StatusBar } from 'expo-status-bar';
import { AddDeckThunkDispatch } from '../ts/interfaces';
import { handleAddDeck } from '../redux/actions/decks';
import { connect, ConnectedProps } from 'react-redux';

const AddDeck = ({
  navigation,
  addDeck,
}: ModalStackProps<Routes.AddDeck> & ConnectedProps<typeof connector>) => {
  const [deckName, setDeckName] = useState('');

  const handleSubmit = useCallback(() => {
    addDeck(deckName);
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

      <View style={styles.bottomButtonContainer}>
        <Button
          title="Add Deck"
          disabled={deckName.length === 0}
          buttonStyle={styles.tealBlueButton}
          containerStyle={styles.buttomButton}
          onPress={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
};

const mapDispatch = (dispatch: AddDeckThunkDispatch) => {
  return {
    addDeck: (deckName: string) => dispatch(handleAddDeck(deckName)),
  };
};

const connector = connect(null, mapDispatch);

export default connector(AddDeck);
