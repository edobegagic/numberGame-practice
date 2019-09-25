import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: 'brown',
    marginVertical: 10
  }
});
