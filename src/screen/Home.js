import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchContent} from '../../redux/favoritesReducer';
import {Card, Title, Paragraph} from 'react-native-paper';
import dyjs from 'dyjs'; // dyjs kütüphanesini ekleyin

const Home = () => {
  const dispatch = useDispatch();
  const {contents, isLoading, error} = useSelector(state => state.content);

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  const formatDate = dateString => {
    return dyjs(dateString).format('DD.MM.YYYY');
  };

  const renderItem = ({item}) => (
    <Card>
      <Card.Cover source={{uri: item.characters[0]}} style={styles.image} />
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>{formatDate(item.air_date)}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Home</Text>
        {isLoading && <Text>Loading...</Text>}
        {error && <Text>Error: {error}</Text>}
        <FlatList
          data={contents}
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
  },
});

export default Home;
