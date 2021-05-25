import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ServiceList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Services</Text>
      <View style={styles.serviceContainer}>
        <View style={styles.service}>
          <Ionicons style={styles.icon} name="people-circle-outline" size={40} color="#eb3623" />
          <Text style={styles.title}>Family</Text>
        </View>
        <View style={styles.service}>
          <Ionicons style={styles.icon} name="enter-outline" size={40} color="#eb3623" />
          <Text style={styles.title}>Visits</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingHorizontal: 20
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700'
  },
  serviceContainer: {
    flexDirection: 'row',
    marginTop: 30
  },
  service: {
    marginHorizontal: 20
  },
  icon: {
    alignSelf: 'center'
  },
  title: {
    fontWeight: '500',
    fontSize: 14
  }
});

export default ServiceList;
