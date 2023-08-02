import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconSliders from 'react-native-vector-icons/Feather';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {COLOR, FONTFAMILY} from '../themes/themes';

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <View style={styles.inputBox}>
      <TouchableOpacity style={styles.searchIcon}>
        <Icon name="search" color={COLOR.White} size={20} />
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        onChangeText={textInput => setSearchText(textInput)}
        value={searchText}
        placeholder="Search your Movies..."
        placeholderTextColor={COLOR.WhiteRGBA75}
      />
      <TouchableOpacity style={styles.searchIcon}>
        <IconSliders name="sliders" color={COLOR.White} size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    display: 'flex',
    // paddingVertical: SPACING.space_8,
    paddingHorizontal: 8,
    borderWidth: 2,
    borderColor: COLOR.WhiteRGBA50,
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: 14,
    color: COLOR.White,
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default SearchBar;
