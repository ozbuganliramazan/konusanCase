import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {screenWrapper} from '../../styles/screenWrapperStyle';
import {getRequst} from '../../service/verb';
import {CHARACTER_URL} from '../../service/urls';
import {AppColors} from '../../theme/colors';
import CharactersCard from '../../components/characters /charactersCard';
import SearchBar from '../../components/uı/searchBar';
import BottomSheet from 'react-native-gesture-bottom-sheet';
const Characters = () => {
  const bottomSheet = useRef();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCharacter = async () => {
    setLoading(true);
    getRequst(CHARACTER_URL)
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
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
      <BottomSheet
        hasDraggableIcon
        ref={bottomSheet}
        height={600}
        onRequestClose={() => {
          bottomSheet.current.close();
        }}
      />
      {loading ? (
        <View style={screenWrapper.loadingWrapper}>
          <ActivityIndicator color={AppColors.WHITE} size={'large'} />
        </View>
      ) : (
        <FlatList
          ListHeaderComponent={
            <SearchBar openModal={() => bottomSheet.current.show()} />
          }
          numColumns={2}
          data={characters}
          renderItem={({item}) => <CharactersCard item={item} />}
          keyExtractor={item => '' + item.id}
        />
      )}
    </View>
  );
};

export default Characters;
