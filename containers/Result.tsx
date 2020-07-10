import React from 'react';
import { Text, View, Dimensions, SafeAreaView } from 'react-native';
import styles from '../styles/styles';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { tealBlue, lightgray } from '../styles/colors';
import { Button } from 'react-native-elements';
import { MainStackProps, Routes } from '../ts/navigation';

const Result = ({ navigation }: MainStackProps<Routes.Result>) => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedCircularProgress
        size={screenWidth * 0.6667}
        width={20}
        fill={80}
        rotation={0}
        tintColor={tealBlue}
        duration={1000}
        backgroundColor={lightgray}
        style={[styles.circularProgress]}
      >
        {(fill) => (
          <View style={styles.circularProgressTextContainer}>
            <Text style={styles.circularProgressText}>{Math.round(fill)}%</Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <View style={styles.resultTextContainer}>
        <Text style={styles.resultText}>You scrore</Text>
        <Text>
          <Text style={styles.resultScore}>80</Text>
          <Text style={styles.resultText}> / 80</Text>
        </Text>
      </View>
      <View style={styles.bottomButtonContainer}>
        <Button
          title="Back to deck"
          buttonStyle={styles.tealBlueButton}
          containerStyle={styles.buttomButton}
          onPress={navigation.goBack}
        />
      </View>
    </SafeAreaView>
  );
};

export default Result;
