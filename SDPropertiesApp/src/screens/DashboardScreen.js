import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropertyList from '../components/dashboard/PropertyList';
import AnnouncementList from '../components/dashboard/AnnouncementList';
import ServiceList from '../components/dashboard/ServiceList';
import DashboardMenu from '../components/dashboard/DashboardMenu';
import { Context } from '../context/PropertyContext';

const DashboardScreen = () => {
  const { state, getProperties, getAnnouncements } = useContext(Context);

  useEffect(() => {
    getProperties();
    getAnnouncements();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ff842e', '#fa5320']} style={styles.header}>
        <Ionicons style={styles.topProfileIcon} name="person-circle" size={40} color="white" />
        <View style={styles.headerTextContainer}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.name}>Admin</Text>
        </View>
      </LinearGradient>

      <DashboardMenu />

      <View style={{ flex: 0.75 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ServiceList />
          <PropertyList properties={state.properties} />
          <AnnouncementList announcements={state.announcements} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.25,
    justifyContent: 'space-between',
    paddingTop: 40,
    backgroundColor: 'orange',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  topProfileIcon: {
    paddingRight: 10,
    marginLeft: 'auto'
  },
  headerTextContainer: {
    paddingLeft: 10,
    marginBottom: 30
  },
  welcome: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700'
  }
});

export default DashboardScreen;
