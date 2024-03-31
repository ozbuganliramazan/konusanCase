import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native'; // Alert ekledik
import {characteCardStyles} from '../../styles/characteCardStyles';
import {resizeModes} from '../../utils/constans';
import {CHARACTERDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../../store/favoritesSlice';

const FavoriteButton = ({item}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  const isFavorite = favorites.some(fav => fav.id === item.id);
  console.log(isFavorite);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(item));
      Alert.alert('Favori Çıkarıldı');
    } else {
      if (favorites.length < 10) {
        dispatch(addFavorite(item));
        Alert.alert('Favori Eklendi');
      } else {
        Alert.alert('Favori Ekleme Sınırına Ulaşıldı');
      }
    }
  };

  return (
    <TouchableOpacity
      onPress={toggleFavorite}
      style={characteCardStyles.favoriteButton}>
      <Text
        style={[
          characteCardStyles.favoriteIcon,
          {color: isFavorite ? 'red' : 'white'},
        ]}>
        {isFavorite ? '❤️' : '🤍'}
      </Text>
    </TouchableOpacity>
  );
};

const CharactersCard = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(CHARACTERDETAIL, {item})}>
      <ImageBackground
        source={{uri: item.image}}
        resizeMode={resizeModes.CONTAIN}
        style={characteCardStyles.container}>
        <FavoriteButton item={item} />
        <View style={characteCardStyles.infoContainer}>
          <Text numberOfLines={1} style={characteCardStyles.name}>
            {item.name}
          </Text>
          <Text style={characteCardStyles.status}>{item.status}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CharactersCard;
