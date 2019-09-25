import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 25
  }
});
