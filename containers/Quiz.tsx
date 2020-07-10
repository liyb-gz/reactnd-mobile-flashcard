import React, { useState, useCallback } from 'react';
import { View, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import styles from '../styles/styles';
import ProgressBar from 'react-native-progress/Bar';
import QuizCard from '../components/QuizCard';
import { MainStackProps, Routes } from '../ts/navigation';
import { tealBlue, lightgray } from '../styles/colors';
import { StatusBar } from 'expo-status-bar';
import FlipCard from 'react-native-flip-card';
import { Button } from 'react-native-elements';
import shuffle from 'lodash/shuffle';

const Quiz = ({ navigation, route }: MainStackProps<Routes.Quiz>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numOfCorrect, setNumOfCorrect] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasFlipped, setHasFlipped] = useState(false);

  const questions = shuffle(route.params.questions);

  const handleSubmit: (props: { correct: boolean }) => void = useCallback(
    ({ correct }) => {
      if (correct) {
        setNumOfCorrect((val) => val + 1);
      }
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((val) => val + 1);
        setHasFlipped(false);
        setIsFlipped(false);
      } else {
        navigation.replace(Routes.Result);
      }
    },
    [numOfCorrect, currentIndex, hasFlipped, isFlipped]
  );

  const handlePress = useCallback(() => {
    setHasFlipped(true);
    setIsFlipped((val) => !val);
  }, [hasFlipped, isFlipped]);

  return (
    <SafeAreaView style={[styles.screen, styles.container]}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <ProgressBar
          progress={numOfCorrect / questions.length}
          width={null}
          height={10}
          style={styles.progressBar}
          color={tealBlue}
          unfilledColor={lightgray}
          borderWidth={0}
        />
        <TouchableWithoutFeedback onPress={handlePress}>
          <FlipCard
            flip={isFlipped}
            flipHorizontal={true}
            flipVertical={false}
            clickable={false}
          >
            {/* Front Side */}
            <QuizCard question={questions[currentIndex]} hideAnswer />

            {/* Back Side */}
            <QuizCard question={questions[currentIndex]} />
          </FlipCard>
        </TouchableWithoutFeedback>

        {hasFlipped && (
          <View style={styles.bottomButtonContainerWithoutPadding}>
            <Button
              title="Correct"
              buttonStyle={styles.tealBlueButton}
              containerStyle={styles.buttomButton}
              onPress={() => {
                handleSubmit({ correct: true });
              }}
            />
            <Button
              title="Incorrect"
              buttonStyle={styles.redButton}
              containerStyle={styles.buttomButton}
              onPress={() => {
                handleSubmit({ correct: false });
              }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Quiz;
