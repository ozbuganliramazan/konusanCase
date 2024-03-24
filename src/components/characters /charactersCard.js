import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {resizeModes, width} from '../../utils/constans';
import {characteCardStyles} from '../../styles/characteCardStyles';
import {characterScreenStyles} from '../../styles/characters.styles';
import {AppColors} from '../../theme/colors';
import {CHARACTERDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';
const CharactersCard = props => {
  const {item} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(CHARACTERDETAIL, {item: item})}>
      <ImageBackground
        source={{uri: item.image}}
        resizeMode={resizeModes.CONTAIN}
        style={characteCardStyles.container}>
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
