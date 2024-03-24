//import liraries
import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {ArrowRight2, ArrowRotateRight} from 'iconsax-react-native';

// create a component
const EpisodeCard = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: AppColors.GREEN,
        margin: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: AppColors.WHITE,
            fontSize: 18,
            marginVertical: 5,
            fontWeight: 'bold',
          }}>
          {item.episode}
        </Text>
        <Text>{item.name}</Text>
      </View>
      <ArrowRight2 color={AppColors.WHITE} size={25} />
    </TouchableOpacity>
  );
};

//make this component available to the app
export default memo(EpisodeCard);
