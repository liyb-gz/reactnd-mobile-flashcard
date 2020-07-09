import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from '../styles/styles';
import ProgressBar from 'react-native-progress/Bar';
import QuizCard from '../components/QuizCard';
import { MainStackProps, Routes } from '../ts/navigation';
import { tealBlue } from '../styles/colors';
import { StatusBar } from 'expo-status-bar';
import FlipCard from 'react-native-flip-card';
import { Button } from 'react-native-elements';

const Quiz = ({ navigation, route }: MainStackProps<Routes.Quiz>) => {
  const [hasFlipped, setHasFlipped] = useState(false);
  const { questions } = route.params;
  return (
    <SafeAreaView style={[styles.screen, styles.container]}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <ProgressBar
          progress={0.3}
          width={null}
          style={styles.progressBar}
          color={tealBlue}
        />
        <FlipCard
          flipHorizontal={true}
          flipVertical={false}
          onFlipStart={() => {
            setHasFlipped(true);
          }}
        >
          <QuizCard question={questions[0]} hideAnswer />
          <QuizCard question={questions[0]} />
        </FlipCard>
        {hasFlipped && (
          <View style={styles.bottomButtonContainerWithoutPadding}>
            <Button
              title="Correct"
              buttonStyle={styles.tealBlueButton}
              containerStyle={styles.buttomButton}
              onPress={() => {
                console.log('next question, correct answer');
              }}
            />
            <Button
              title="Incorrect"
              buttonStyle={styles.tealBlueButton}
              containerStyle={styles.buttomButton}
              onPress={() => {
                console.log('next question, incorrect answer');
              }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Quiz;
