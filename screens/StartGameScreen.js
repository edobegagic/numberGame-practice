import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/Colors';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    // eslint-disable-next-line radix
    const chosenNumber = parseInt(enteredValue);

    // eslint-disable-next-line no-restricted-globals
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid input', 'Input has to be number between 1 and 99', [
        { text: 'okay', style: 'destructive', onPress: resetInputHandler }
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    // eslint-disable-next-line react/jsx-one-expression-per-line
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title='START GAME'
          onPress={() => props.onStartGame(selectedNumber)}
        ></Button>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.gameSection}>
          <Text style={styles.selectNumberText}>Select a Number</Text>
          <Input
            style={styles.input}
            maxLength={2}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            onChangeText={numberInputHandler}
            value={enteredValue}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title='reset'
                onPress={resetInputHandler}
                color={Colors.secondary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title='confirm'
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  gameSection: {
    alignItems: 'center'
  },
  selectNumberText: {
    padding: 10,
    fontSize: 14,
    color: 'steelblue'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
    paddingLeft: 10,
    width: '80%',
    justifyContent: 'space-around'
  },
  button: {
    width: 100
  },
  input: {
    width: 100,
    color: 'orange',
    borderRadius: 55,
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,
    textAlign: 'center',
    fontSize: 30
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});
