import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLOR, FONTFAMILY} from '../themes/themes';
const {width, height} = Dimensions.get('window');
const OrderCompletedView = ({navigation}: any) => {
  return (
    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
      <View style={styles.container}>
        <Icon name="check-circle" size={150} color={COLOR.White} />
        <Text style={styles.textBold}>{'Congratulations!'}</Text>
        <Text style={[styles.textDesc, {paddingVertical: 10}]}>
          {
            'Your ticket purchase is successful, a confirmation has been sent to your e-mail'
          }
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.reset({routes: [{name: 'Home'}]})}>
            <Icon name="arrow-left" size={20} color={COLOR.White} />
            <Text style={styles.textDesc}>Main Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.reset({routes: [{name: 'Ticket'}]})}>
            <Icon name="ticket-alt" size={20} color={COLOR.White} />
            <Text style={styles.textDesc}>View Ticket</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderCompletedView;

const styles = StyleSheet.create({
  container: {
    minHeight: height,
    backgroundColor: COLOR.Black,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBold: {
    fontSize: 20,
    fontFamily: FONTFAMILY.poppins_bold,
    color: COLOR.White,
    textAlign: 'center',
    paddingVertical: 20,
  },
  textDesc: {
    fontSize: 16,
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLOR.WhiteRGBA75,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLOR.White,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    gap: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginVertical: 20,
  },
});
