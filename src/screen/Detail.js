import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Detail = ({route}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <Text>Name: {item.name}</Text>
      <Text>Air Date: {item.air_date}</Text>
      <Text>Episode: {item.episode}</Text>
      <Text>gender:{item.gender}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default Detail;
