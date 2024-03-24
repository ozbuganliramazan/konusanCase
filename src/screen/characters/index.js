import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {screenWrapper} from '../../styles/screenWrapperStyle';
import {getRequst} from '../../service/verb';
import {CHARACTER_URL} from '../../service/urls';
import {AppColors} from '../../theme/colors';
import CharactersCard from '../../components/characters /charactersCard';
import SearchBar from '../../components/uı/searchBar';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import {status} from '../../utils/constans';
const Characters = () => {
  const bottomSheet = useRef();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState(null);
  const [filterStatus, setFilterStatus] = useState({});
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
  const filterCharacter = async () => {
    getRequst(CHARACTER_URL, {status: filterStatus.value})
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {});
  };
  const searchCharacter = async () => {
    getRequst(CHARACTER_URL, {name: filterStatus.value});
    if (searchText) {
      getRequst(CHARACTER_URL, {name: searchText})
        .then(response => {
          setCharacters(response.data.results);
        })
        .catch(eror => {
          console.log(eror);
        })
        .finally(() => {});
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={screenWrapper.container}>
        <BottomSheet
          hasDraggableIcon
          ref={bottomSheet}
          height={600}
          sheetBackgroundColor={AppColors.GREEN}
          onRequestClose={() => {
            bottomSheet.current.close();
          }}>
          <View style={{flex: 1, backgroundColor: AppColors.GREEN}}>
            <Text style={{margin: 5, fontSize: 24, color: AppColors.WHITE}}>
              Status
            </Text>
            {status.map((item, index) => (
              <TouchableOpacity
                onPress={() => setFilterStatus(item)}
                key={item.id}
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: AppColors.WHITE,
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor:
                    filterStatus.value == item.value
                      ? AppColors.WHITE
                      : AppColors.GREEN,
                }}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            onPress={() => {
              bottomSheet.current.close();
              filterCharacter();
            }}
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: AppColors.WHITE,
              margin: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 50,
              backgroundColor: AppColors.WHITE,
              height: 70,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Filtrele</Text>
          </TouchableOpacity>
        </BottomSheet>
        {loading ? (
          <View style={screenWrapper.loadingWrapper}>
            <ActivityIndicator color={AppColors.WHITE} size={'large'} />
          </View>
        ) : (
          <FlatList
            ListHeaderComponent={
              <SearchBar
                openModal={() => bottomSheet.current.show()}
                setSearchText={setSearchText}
                searchText={searchText}
                searchCharacter={searchCharacter}
              />
            }
            numColumns={2}
            data={characters}
            renderItem={({item}) => <CharactersCard item={item} />}
            keyExtractor={item => '' + item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Characters;
