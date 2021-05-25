import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AnnouncementDetail = ({ announcement }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: announcement.imageFileName }} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{announcement.title}</Text>
        <Ionicons name="chevron-forward-outline" size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    backgroundColor: 'white'
  },
  image: {
    width: 250,
    height: 113,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingHorizontal: 15
  },
  title: {
    fontWeight: '600'
  }

});

export default AnnouncementDetail;
