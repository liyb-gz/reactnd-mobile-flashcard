import React, { useEffect, useState, useCallback, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  Alert,
  Linking,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import DeckCard from '../components/DeckCard';
import { State, FetchDecksThunkDispatch } from '../ts/interfaces';
import styles from '../styles/styles';
import { MainStackProps, Routes } from '../ts/navigation';
import { Button, Icon } from 'react-native-elements';
import { handleFetchCard } from '../redux/actions/decks';
import * as Notifications from 'expo-notifications';
import { PermissionStatus } from 'expo-permissions';
import useAppState from 'react-native-appstate-hook';
import { NotificationRequestInput } from 'expo-notifications';
import { showMessage, MessageOptions } from 'react-native-flash-message';
import { useActionSheet } from '@expo/react-native-action-sheet';

const notification: NotificationRequestInput = {
  content: {
    title: 'Daily Reminder',
    body: 'Remember to work on your flashcards!',
    sound: true,
    autoDismiss: false,
  },
  trigger: {
    hour: 20,
    minute: 0,
    repeats: true,
  },
};

const notificationFlashMessages: { [messageName: string]: MessageOptions } = {
  on: {
    message: 'Notification is turned on!',
    description: 'You will be notified everyday at 8:00 P.M.',
    type: 'success',
  },
  denied: {
    message: 'Notification permission denied ☹️',
    description: 'We need your permission to notify you.',
    type: 'danger',
  },
  off: {
    message: 'Notification is turned off.',
    description: 'You will no long receive notifications.',
    type: 'warning',
  },
};

const getNotificationIconString = (
  status: PermissionStatus,
  hasScheduledNotifications: boolean
) => {
  switch (status) {
    case PermissionStatus.DENIED:
      return 'notifications-none';
    case PermissionStatus.GRANTED:
      if (!hasScheduledNotifications) {
        return 'notifications-off';
      } else {
        return 'notifications-active';
      }
    default:
      // case PermissionStatus.UNDETERMINED:
      return 'notifications';
  }
};

const DeckList = ({
  navigation,
  fetchDecks,
  decks,
}: MainStackProps<Routes.DeckList> & ConnectedProps<typeof connector>) => {
  const { appState } = useAppState();
  const { showActionSheetWithOptions } = useActionSheet();

  const [notificationStatus, setNotificationStatus] = useState<
    PermissionStatus
  >(PermissionStatus.UNDETERMINED);
  const [hasScheduledNotifications, setHasScheduledNotifications] = useState(
    false
  );
  const [notifIconString, setNotifIconString] = useState('notifications');
  const [shouldUpdateStatus, setShouldUpdateStatus] = useState(false);

  // Update the states based on notification status
  const getNotificationStatus = useCallback(async () => {
    const { status } = await Notifications.getPermissionsAsync();
    setNotificationStatus(status);

    if (status === PermissionStatus.GRANTED) {
      const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
      setHasScheduledNotifications(scheduledNotifications.length > 0);
    }
  }, []);

  const cancelAllNotifications = useCallback(async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
    showMessage(notificationFlashMessages.off);
    setShouldUpdateStatus(true);
  }, []);

  const scheduleNotification = useCallback(async () => {
    await Notifications.scheduleNotificationAsync(notification);
    showMessage(notificationFlashMessages.on);
    setShouldUpdateStatus(true);
  }, []);

  const handleNotificationPress = useCallback(async () => {
    switch (notificationStatus) {
      case PermissionStatus.DENIED:
        Alert.alert(
          'Permission required',
          'We need your permission to set notifications for you.',
          [
            { text: 'Go to settings', onPress: Linking.openSettings },
            { text: 'Cancel', style: 'cancel' },
          ]
        );
        break;

      case PermissionStatus.UNDETERMINED:
        const { status } = await Notifications.requestPermissionsAsync();
        if (status === PermissionStatus.GRANTED) {
          scheduleNotification();
        } else {
          showMessage(notificationFlashMessages.denied);
        }
        break;

      case PermissionStatus.GRANTED:
        if (hasScheduledNotifications) {
          cancelAllNotifications();
        } else {
          scheduleNotification();
        }
    }
  }, [notificationStatus, hasScheduledNotifications]);

  // ComponentDidLoad
  useEffect(() => {
    fetchDecks();
  }, []);

  // Whenever user comes back to the app, get new notification status
  useEffect(() => {
    if (appState === 'active') {
      getNotificationStatus().then(() => {
        setShouldUpdateStatus(false);
      });
    }
  }, [appState, shouldUpdateStatus]);

  // Whenever notification status changes, update the icon string
  useEffect(() => {
    const notificationString = getNotificationIconString(
      notificationStatus,
      hasScheduledNotifications
    );
    setNotifIconString(notificationString);
  }, [notificationStatus, hasScheduledNotifications]);

  // Whenever icon string updates, update the icon
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name={notifIconString}
          iconStyle={styles.whiteText}
          containerStyle={styles.headerRightIconSpacing}
          onPress={handleNotificationPress}
        />
      ),
    });
  }, [notifIconString]);

  return (
    decks && (
      <SafeAreaView style={[styles.container, styles.screen]}>
        <StatusBar style="light" />
        {/* TODO: Add swipe action */}
        <FlatList
          data={Object.keys(decks)}
          keyExtractor={(deckId) => deckId}
          renderItem={({ item: deckId }) => (
            <DeckCard
              deck={decks[deckId]}
              onPress={() =>
                navigation.navigate(Routes.DeckView, {
                  deckId,
                })
              }
              onLongPress={() => {
                showActionSheetWithOptions(
                  {
                    title: 'Choose an action',
                    options: ['Delete Deck', 'Edit Deck', 'Cancel'],
                    destructiveButtonIndex: 0,
                    cancelButtonIndex: 2,
                  },
                  (i) => {
                    switch (i) {
                      case 0:
                        console.log('Delete deck: ', deckId);
                        break;
                      case 1:
                        console.log('Edit deck: ', deckId);
                        break;
                    }
                  }
                );
              }}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <Text style={styles.listEmptyText}>
                Add a deck to get started
              </Text>
            </View>
          )}
        />
        <View style={styles.bottomButtonContainer}>
          <Button
            title="Add Deck"
            buttonStyle={styles.tealBlueButton}
            containerStyle={styles.buttomButton}
            onPress={() => {
              navigation.navigate(Routes.AddDeck);
            }}
          />
        </View>
      </SafeAreaView>
    )
  );
};

const mapState = (state: State) => ({
  decks: state.decks,
});

const mapDispatch = (dispatch: FetchDecksThunkDispatch) => {
  return {
    fetchDecks: () => dispatch(handleFetchCard()),
  };
};

const connector = connect(mapState, mapDispatch);

export default connector(DeckList);
