import React, { useState, useCallback, useEffect } from 'react';
import { View, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import styles from '../styles/styles';
import * as Progress from 'react-native-progress';
import QuizCard from '../components/QuizCard';
import { MainStackProps, Routes } from '../ts/navigation';
import { tealBlue, lightgray } from '../styles/colors';
import { StatusBar } from 'expo-status-bar';
import FlipCard from 'react-native-flip-card';
import { Button } from 'react-native-elements';

const Quiz = ({ navigation, route }: MainStackProps<Routes.Quiz>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numOfCorrect, setNumOfCorrect] = useState(0);
  const [shouldShowResult, setShouldShowResult] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasFlipped, setHasFlipped] = useState(false);

  const { questions } = route.params;

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
        setShouldShowResult(true);
      }
    },
    [numOfCorrect, currentIndex, hasFlipped, isFlipped, shouldShowResult]
  );

  // Set state is asynchronous.
  // If we navigate to result page right after setting numOfCorrect,
  // numOfCorrect may be 1 less than it should be
  useEffect(() => {
    if (shouldShowResult) {
      navigation.replace(Routes.Result, {
        percentage: (numOfCorrect / questions.length) * 100,
        numOfCorrect,
        numOfQuestions: questions.length,
      });
    }
  }, [shouldShowResult]);

  const handlePress = useCallback(() => {
    setHasFlipped(true);
    setIsFlipped((val) => !val);
  }, [hasFlipped, isFlipped]);

  return (
    <SafeAreaView style={[styles.screen, styles.container]}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Progress.Bar
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
