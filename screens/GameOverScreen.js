import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>This Game is Over</Text>
      <Text>
        Number of Rounds:
        {props.rounds}
      </Text>
      <Text>
        Number was:
        {props.user}
      </Text>
      <Button title='New Game' onPress={props.newGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default GameOverScreen;
