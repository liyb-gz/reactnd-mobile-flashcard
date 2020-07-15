import React, { useCallback, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from '../styles/styles';
import { Button, Input } from 'react-native-elements';
import { tealBlue } from '../styles/colors';
import {
  Routes,
  ModalStackProps,
  ModalStackNavigationProp,
} from '../ts/navigation';
import { StatusBar } from 'expo-status-bar';
import {
  DispatchOfAction,
  AddDeckAction,
  EditDeckAction,
  State,
} from '../ts/types';
import { handleAddDeck, handleEditDeck } from '../redux/actions/decks';
import { connect, ConnectedProps } from 'react-redux';

const AddDeck = ({
  isEdit,
  deckId,
  initialDeckName,
  navigation,
  addDeck,
  editDeck,
}: ModalStackProps<Routes.AddDeck> & ConnectedProps<typeof connector>) => {
  const [deckName, setDeckName] = useState(initialDeckName);

  const handleSubmit = useCallback(() => {
    if (isEdit && deckId) {
      editDeck(deckName, deckId);
    } else {
      addDeck(deckName);
    }
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

const mapState = (state: State, { route }: ModalStackProps<Routes.AddDeck>) => {
  let initialDeckName = '';
  let isEdit = false;
  let deckId;

  if (route.params) {
    deckId = route.params.deckId;
    isEdit = route.params.isEdit;
    initialDeckName = state.decks[deckId].title;
  }

  return {
    initialDeckName,
    isEdit,
    deckId,
  };
};

const mapDispatch = (
  dispatch: DispatchOfAction<AddDeckAction | EditDeckAction>
) => ({
  addDeck: (deckName: string) => dispatch(handleAddDeck(deckName)),
  editDeck: (deckName: string, deckId: string) =>
    dispatch(handleEditDeck(deckName, deckId)),
});

const connector = connect(mapState, mapDispatch);

export default connector(AddDeck);
