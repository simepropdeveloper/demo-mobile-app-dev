import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import PropertyDetail from './PropertyDetail';
import * as RootNavigation from '../../../RootNavigation';

const PropertyList = ({ properties }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Properties</Text>
        <Text style={styles.more}>More</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 10 }}
        horizontal
        data={properties}
        keyExtractor={(property) => property.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => { RootNavigation.navigate('Property', item); }}>
              <PropertyDetail property={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 30
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700'
  },
  more: {
    color: '#eb3623',
    fontSize: 14,
    alignSelf: 'flex-end'
  }
});

export default PropertyList;
