import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';
import 'moment/locale/tr';
import {Card, Title, IconButton} from 'react-native-paper';
const Cart = ({item, toggleFavorite, isFavorite}) => {
  return (
    <Card style={styles.cardMain}>
      <Card.Cover source={{uri: item.characters[0]}} style={styles.image} />
      <Card.Content>
        <Title>{item.name}</Title>
        <Text>{moment(item.reated).locale('tr').format('DD MMMM YYYY')}</Text>
      </Card.Content>
      <IconButton
        icon={isFavorite(item.id) ? 'heart' : 'heart-outline'}
        color={isFavorite(item.id) ? 'red' : 'black'}
        size={20}
        onPress={() => toggleFavorite(item)}
        style={styles.heartIcon}
      />
    </Card>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
  },
  cardMain: {
    marginBottom: 20,
  },
  image: {
    height: 200,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
