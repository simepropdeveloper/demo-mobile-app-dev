import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import BillDetail from './BillDetail';

const BillList = ({ route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text>Latest Bills</Text>
        <Text style={styles.more}>More</Text>
      </View>
      <FlatList
        data={route.params.latestBills}
        keyExtractor={(person) => person.id}
        renderItem={({ item }) => {
          return (
            <BillDetail bill={item} />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
    marginBottom: 30,
    borderRadius: 10,
    paddingTop: 10,
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    backgroundColor: 'white'
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#eeeeee'
  },
  more: {
    paddingRight: 15,
    color: '#eb3623'
  }
});

export default BillList;
