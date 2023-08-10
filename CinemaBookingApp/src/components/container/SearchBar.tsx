import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconSliders from 'react-native-vector-icons/Feather';
import {View, TextInput, TouchableOpacity} from 'react-native';

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <View className="px-2 border-2 border-white/50 flex-row my-2 mx-5 rounded-lg items-center">
      <TouchableOpacity className="p-2 justify-center items-center">
        <Icon name="search" color="white" size={20} />
      </TouchableOpacity>
      <TextInput
        onChangeText={textInput => setSearchText(textInput)}
        value={searchText}
        placeholder="Search your Movies..."
        placeholderTextColor={'rgba(255,255,255,0.75)'}
        className="flex-1 font-poppins_regular text-white text-sm"
      />
      <TouchableOpacity className="p-2 justify-center items-center">
        <IconSliders name="sliders" color="white" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
