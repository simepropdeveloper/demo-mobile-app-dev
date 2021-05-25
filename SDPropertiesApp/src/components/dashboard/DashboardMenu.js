import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as RootNavigation from '../../../RootNavigation';

const DashboardMenu = () => {
  return (
    <View style={styles.dashboardMenu}>
      <View>
        <TouchableOpacity onPress={() => { RootNavigation.navigate('Visitor Entry'); }}>
          <Ionicons style={styles.icon} name="calendar-outline" size={30} color="#eb3623" />
          <Text style={styles.title}>Visitor Entry</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => { RootNavigation.navigate('Visitors'); }}>
          <Ionicons style={styles.icon} name="person-circle-outline" size={30} color="#eb3623" />
          <Text style={styles.title}>My Visitors</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Ionicons style={styles.icon} name="card-outline" size={30} color="#eb3623" />
        <Text style={styles.title}>Pay Bills</Text>
      </View>
      <View>
        <Ionicons style={styles.icon} name="notifications-outline" size={30} color="#eb3623" />
        <Text style={styles.title}>Notification</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardMenu: {
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '95%',
    marginTop: -20,
    borderRadius: 10,
    paddingVertical: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3
  },
  icon: {
    alignSelf: 'center'
  },
  title: {
    fontWeight: '500'
  }
});

export default DashboardMenu;
