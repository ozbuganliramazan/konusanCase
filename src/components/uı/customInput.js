//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {AppColors} from '../../theme/colors';
import {height, width} from '../../utils/constans';

const CustomInput = props => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.input}
        keyboardType="default"
        clearButtonMode="always"
        returnKeyType="search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: AppColors.BLACK},
  input: {
    backgroundColor: AppColors.WHITE,
    minHeight: height / 20,
    borderRadius: 10,
    fontSize: 24,
    padding: 10,
    width: width / 1.2,
    marginRight: 5,
  },
});

export default CustomInput;
