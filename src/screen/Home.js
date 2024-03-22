import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchContent } from '../features/contentSlice';


const Home = () => {
  const dispatch = useDispatch();
  const {contents, isLoading, error} = useSelector(state => state.content);
 
  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);
  console.log('dispathc home', contents);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
