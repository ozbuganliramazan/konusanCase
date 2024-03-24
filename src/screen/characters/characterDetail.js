//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {getRequst} from '../../service/verb';
import {CHARACTER_URL} from '../../service/urls';
import {screenWrapper} from '../../styles/screenWrapperStyle';
import {AppColors} from '../../theme/colors';
import {height, width} from '../../utils/constans';
import {CharacterModel} from '../../models/character';
import {RouteParams} from '../../models/navigation';

const CharacterDetail = ({route}) => {
  const item = route?.params?.item;
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCharacter = async () => {
    setLoading(true);
    getRequst(`${CHARACTER_URL}/${item?.id}`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(eror => {
        console.log(eror);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <View style={screenWrapper.container}>
      <View
        style={{
          backgroundColor: AppColors.GREEN,
          height: height / 2,
          margin: 10,
          borderStartStartRadius: 50,
          borderEndEndRadius: 50,
          padding: 15,
        }}>
        <Text style={{fontSize: 24, margin: 10, color: AppColors.WHITE}}>
          {character.status}
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Image
            source={{uri: character.image}}
            style={{width: width / 1.7, height: width / 1.7, borderRadius: 10}}
          />
          <Text style={{fontSize: 24, margin: 10, color: AppColors.WHITE}}>
            {character.name}
          </Text>
          <Text style={{fontSize: 18, margin: 10, color: AppColors.WHITE}}>
            {character.species}
          </Text>
        </View>
        <Text style={{fontSize: 18, margin: 10, color: AppColors.WHITE}}>
          {character.gender}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: AppColors.GREEN,
          height: height / 4,
          margin: 10,
        }}>
        <Text style={{fontSize: 24, margin: 10, color: AppColors.WHITE}}>
          Origin
        </Text>
        <Text style={{fontSize: 18, margin: 10, color: AppColors.WHITE}}>
          {character?.name}
        </Text>
        <Text style={{fontSize: 24, margin: 10, color: AppColors.WHITE}}>
          Location
        </Text>
        <Text style={{fontSize: 18, margin: 10, color: AppColors.WHITE}}>
          {character?.location?.name}
        </Text>
      </View>
    </View>
  );
};

export default CharacterDetail;
