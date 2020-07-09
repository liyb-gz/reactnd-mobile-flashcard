import React from 'react';
import { View, Text } from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';
import styles from '../styles/styles';
import { tealBlue } from '../styles/colors';

const Result = () => {
  return (
    <View style={styles.container}>
      <Text>Result</Text>
      {/* <ProgressCircle progress={0.3} color={tealBlue} /> */}
    </View>
  );
};

export default Result;
