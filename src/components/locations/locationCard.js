//import liraries
import React, {memo, useState, useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CHARACTERDETAIL} from '../../utils/routes';
import {locationCardStyles} from '../../styles/locationsStyles';

const LocationCard = props => {
  const {item, index} = props;
  const [count, setCount] = useState(0);
  const navigation = useNavigation();
  const countOperation = useMemo(() => {
    let total = count * 2;
    console.log(total);
    return total;
  }, [count]);
  return (
    <TouchableOpacity
      style={locationCardStyles.container}
      onPress={() => setCount(1)}>
      <View style={locationCardStyles.indexContainer}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={locationCardStyles.index}>{countOperation}</Text>
          <Text style={locationCardStyles.dimension}>{item.dimension}</Text>
        </View>
      </View>
      <View style={locationCardStyles.infoContainer}>
        <Text numberOfLines={1} style={locationCardStyles.name}>
          {item.name}
        </Text>
        <View style={locationCardStyles.userTypeContainer}>
          <Text style={locationCardStyles.dimension}>{item.type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default LocationCard;
