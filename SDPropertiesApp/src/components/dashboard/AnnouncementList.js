import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import AnnouncementDetail from './AnnouncementDetail';

const AnnouncementList = ({ announcements }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Announcements</Text>
        <Text style={styles.more}>More</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 10 }}
        horizontal
        data={announcements}
        keyExtractor={(announcement) => announcement.id}
        renderItem={({ item }) => {
          return <AnnouncementDetail announcement={item} />;
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

export default AnnouncementList;
