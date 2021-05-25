import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FamilyMemberList = ({ route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text>Family Members</Text>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="person-add" size={20} style={{ paddingRight: 15 }} color="#eb3623" />
          <Ionicons name="filter-outline" size={20} style={{ paddingRight: 15 }} color="#eb3623" />
        </View>
      </View>
      <FlatList
        data={route.params.familyMembers}
        keyExtractor={(person) => person.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.listItem}>
              <Text>{item.name}</Text>
              {
                item.approvalStatus === 'pending'
                  ? (
                    <View style={styles.yellowTag}>
                      <Text style={styles.yellowTagText}>Awaiting Approval</Text>
                    </View>
                  )
                  : null
              }
            </View>
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
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderColor: '#eeeeee',
    marginLeft: 15,
    paddingRight: 20
  },
  yellowTag: {
    padding: 3,
    paddingHorizontal: 7,
    borderRadius: 30,
    backgroundColor: '#ffd200'
  },
  yellowTagText: {
    fontSize: 10,
    color: 'white'
  }
});

export default FamilyMemberList;
