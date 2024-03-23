import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Card, Title, IconButton} from 'react-native-paper';
import moment from 'moment';
import 'moment/locale/tr';
import {removeFromFavorites} from '../../src/features/contentSlice';

const FavoritesScreen = () => {
  const dispatch = useDispatch();
  const {favorite} = useSelector(state => state.contents);

  const handleRemoveFromFavorites = item => {
    dispatch(removeFromFavorites(item));
  };

  const renderItem = ({item}) => (
    <Card style={styles.cardMain}>
      <Card.Cover source={{uri: item.characters[0]}} style={styles.image} />
      <Card.Content>
        <Title>{item.name}</Title>
        <Text>{moment(item.reated).locale('tr').format('DD MMMM YYYY')}</Text>
      </Card.Content>
      <IconButton
        icon="heart"
        color="red"
        size={20}
        onPress={() => handleRemoveFromFavorites(item)}
        style={styles.heartIcon}
      />
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorite}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

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

export default FavoritesScreen;
