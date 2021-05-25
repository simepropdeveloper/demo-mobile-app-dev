import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import FamilyMemberList from '../components/property/FamilyMemberList';
import BillList from '../components/property/BillList';
import Switches from '../components/property/Switches';

const dimensions = Dimensions.get('window');

const PropertyScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: route.params.imageFileName }} resizeMode="cover" />
      <Text style={styles.title}>{route.params.address}</Text>
      <FamilyMemberList route={route} />
      <BillList route={route} />
      <Switches route={route} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  image: {
    width: dimensions.width,
    height: 200
  },
  title: {
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: 16
  }
});

export default PropertyScreen;
