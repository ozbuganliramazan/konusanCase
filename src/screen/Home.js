import {StyleSheet, Text, View,  FlatList,} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchContent} from '../../redux/favoritesReducer';

const Home = () => {
  const dispatch = useDispatch();
  const {contents, isLoading, error} = useSelector(state => state.contents);
 
  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);
  console.log('dispathc', contents);
  return (
    <View>
      <Text>Home</Text>
          <FlatList
            data={contents}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
             <Text>{item?.name}</Text>
            }

          />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
