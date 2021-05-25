import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Context } from '../context/PropertyContext';

const MyVisitorsScreen = ({ navigation }) => {
  const { state, getVisitors, deleteVisitor } = useContext(Context);
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    getVisitors();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row' }}>
      <Ionicons name="person" size={20} color="#5e5e5e" style={styles.personIcon} />
      <View style={styles.rowContainer}>
        <Text>{item.name}</Text>
        <Ionicons name="chevron-forward-outline" size={20} color="#5e5e5e" style={styles.chevronIcon} />
      </View>
    </View>
  );

  const deleteRow = (id) => {
    if (!searchList.data) {
      return deleteVisitor(id);
    }
    const deletedVisitor = { data: [] };
    deletedVisitor.data = searchList.data.filter((visitor) => visitor.id !== id);
    setSearchList(deletedVisitor);
    return deleteVisitor(id);
  };

  const renderHiddenItem = (data) => (
    <View style={styles.hiddenButtonContainer}>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate('Visitor Entry', (data.item))}
      >
        <Text style={styles.hiddenButtonTitle}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteRow(data.item.id)}
      >
        <Text style={styles.hiddenButtonTitle}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  const searchBar = () => {
    let searchIcon = <Ionicons name="search-outline" size={20} color="#cccccc" />;
    if (searchText) {
      searchIcon = (
        <TouchableOpacity onPress={() => {
          setSearchText('');
          setSearchList([]);
        }}
        >
          <Ionicons name="close-outline" size={20} color="black" />
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.searchBarContainer}>
        <TextInput
          value={searchText}
          onChangeText={(value) => searchFilterFunction(value)}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search here..."
          keyboardShouldPersistTaps
          style={styles.searchInput}
        />
        {searchIcon}
      </View>
    );
  };

  const searchFilterFunction = (text) => {
    setSearchText(text);
    const newData = state.visitors.filter((item) => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setSearchList({ data: newData });
  };

  const floatingButton = () => (
    <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('Visitor Entry')}>
      <Ionicons name="add-outline" size={30} color="white" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.sectionContainer}>
      {floatingButton()}
      {searchBar()}
      <SwipeListView
        data={searchList.data || state.visitors}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={0}
        rightOpenValue={-150}
        previewRowKey="0"
        previewOpenValue={-40}
        previewOpenDelay={3000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10
  },
  searchInput: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingLeft: 10
  },
  rowContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
    paddingVertical: 15,
    backgroundColor: '#ffffff'
  },
  hiddenButtonContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  editButton: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    backgroundColor: '#ff8924',
    right: 75,
  },
  deleteButton: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    backgroundColor: '#ff332e',
    right: 0,
  },
  hiddenButtonTitle: {
    color: 'white',
    fontWeight: '600'
  },
  floatingButton: {
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: 30,
    right: 30,
    backgroundColor: '#ff332e',
    borderRadius: 100,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.4,
  },
  personIcon: {
    alignSelf: 'center',
    paddingVertical: 15,
    paddingLeft: 20
  },
  chevronIcon: {
    paddingRight: 20
  }
});

export default MyVisitorsScreen;
