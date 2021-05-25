import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Switches = ({ route }) => {
  return (
    <>
      <View style={styles.switchOuterContainer}>
        <View style={styles.switchLeftContainer}>
          <Text style={{ alignSelf: 'center' }}>Set as default</Text>
          <Switch
            style={styles.switch}
            trackColor={{ false: '#cccccc', true: '#fcc7bd' }}
            thumbColor={route.params.default ? '#ff431f' : '#aaaaaa'}
            value={route.params.default}
          />
        </View>
        <Ionicons name="information-circle-outline" size={25} style={styles.infoIcon} />
      </View>
      <View style={styles.switchOuterContainer}>
        <View style={styles.switchLeftContainer}>
          <Text style={{ alignSelf: 'center' }}>Receive Approval</Text>
          <Switch
            style={styles.switch}
            trackColor={{ false: '#cccccc', true: '#fcc7bd' }}
            thumbColor={route.params.approved ? '#ff431f' : '#aaaaaa'}
            value={route.params.approved}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  switchOuterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '85%'
  },
  switchLeftContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  switch: {
    transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }]
  },
  infoIcon: {
    paddingHorizontal: 15,
    alignSelf: 'center'
  }
});

export default Switches;
