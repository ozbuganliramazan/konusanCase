import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchContent,
  addToFavorites,
  removeFromFavorites,
} from '../../src/features/contentSlice';

import {useNavigation} from '@react-navigation/native';
import Detail from './Detail';
import Cart from '../components/Cart';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {contents, isLoading, error, favorite} = useSelector(
    state => state.contents,
  );
  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);
  const isFavorite = itemId => {
    return favorite.some(item => item.id === itemId);
  };

  const toggleFavorite = item => {
    if (isFavorite(item.id)) {
      dispatch(removeFromFavorites(item));
      alert('Favorilerden çıkarıldı!');
    } else {
      if (favorite.length >= 10) {
        alert(
          'Favori ekleme sınırına ulaştınız. Favorilerinizden birini çıkartın.',
        );
      } else {
        dispatch(addToFavorites(item));
        alert('Favori başarıyla eklendi!');
      }
    }
  };

  const [searchQuery, setSearchQuery] = useState('');

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', {item})}>
      <Cart
        item={item}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </TouchableOpacity>
  );

  const filteredContents = contents.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search by name..."
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        {isLoading && <Text>Loading...</Text>}
        {error && <Text>Error: {error}</Text>}
        <FlatList
          data={filteredContents}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
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
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
});

export default Home;
