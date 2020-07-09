import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { tealBlue } from '../styles/colors';

const Result = () => {
  return (
    <View style={styles.container}>
      <Text>Result</Text>

      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={100}
        tintColor="#00e0ff"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#3d5875"
      />
    </View>
  );
};

export default Result;
