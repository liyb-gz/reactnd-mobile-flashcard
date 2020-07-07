import React from 'react';
import { Icon } from 'react-native-elements';
import styles from '../styles/styles';
import { AddButtonProps } from '../ts/interfaces';

const AddButton = ({ onPress, color }: AddButtonProps) => {
  return (
    <Icon
      name="add"
      reverse
      raised
      color={color}
      containerStyle={styles.floatingButton}
      onPress={onPress}
    />
  );
};

export default AddButton;
