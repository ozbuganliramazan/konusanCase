import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import CustomInput from './customInput';
import {FilterSquare} from 'iconsax-react-native';

const SearchBar = ({openModal, setSearchText, searchText, searchCharacter}) => {
  return (
    <View style={styles.container}>
      <CustomInput
        value={searchText}
        onChangeText={text => setSearchText(text)}
        placeholder="Search"
        value={searchText}
        onSubmitEditing={() => searchCharacter()}
      />
      <TouchableOpacity
        onPress={openModal}
        style={{
          backgroundColor: AppColors.GREEN,
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FilterSquare size="32" color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SearchBar;
