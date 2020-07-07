import React from 'react';
import { Icon } from 'react-native-elements';
import { tealBlue } from '../styles/colors';
import styles from '../styles/styles';
import { AddButtonProps } from '../ts/interfaces';

const AddButton = ({ onPress }: AddButtonProps) => {
  return (
    <Icon
      name="add"
      reverse
      color={tealBlue}
      containerStyle={[styles.floatingButton, styles.shadowLg]}
      onPress={onPress}
    />
  );
};

export default AddButton;
