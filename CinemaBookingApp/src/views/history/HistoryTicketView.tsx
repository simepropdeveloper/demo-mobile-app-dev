import * as React from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {COLOR, FONTFAMILY} from '../../themes/themes';
const {width, height} = Dimensions.get('window');
const HistoryTicketView = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>No Tickets Found</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.Black,
  },
  text: {
    color: COLOR.White,
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: 16,
  },
});

export default HistoryTicketView;
