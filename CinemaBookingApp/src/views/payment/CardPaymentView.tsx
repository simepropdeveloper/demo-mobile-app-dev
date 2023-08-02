import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  Pressable,
} from 'react-native';

import {COLOR, FONTFAMILY} from '../../themes/themes';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');
const CardPaymentView = ({navigation}: any) => {
  const [checked, setChecked] = React.useState(false);
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Card Payment',
      headerStyle: {
        backgroundColor: COLOR.Black,
      },
      headerTitleStyle: {color: COLOR.White},
      headerTintColor: COLOR.White,
    });
  }, [navigation]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[styles.text, {fontSize: 14}]}>
          {'Please enter your card details'}
        </Text>
        <View style={styles.textInputContainer}>
          <Text style={styles.labelText}>{'Card number'}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter card number"
            placeholderTextColor={COLOR.WhiteRGBA75}
          />
        </View>
        <View style={styles.rowContainer}>
          <View style={[styles.textInputContainer, {flex: 1}]}>
            <Text style={styles.labelText}>{'Expire date'}</Text>
            <TextInput
              style={styles.textInput}
              placeholder="MM/YY"
              placeholderTextColor={COLOR.WhiteRGBA75}
            />
          </View>
          <View style={[styles.textInputContainer, {flex: 1}]}>
            <Text style={styles.labelText}>{'CVV'}</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter CVV"
              placeholderTextColor={COLOR.WhiteRGBA75}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push('OrderCompleted')}>
          <Text style={[styles.text, {textAlign: 'center'}]}>PAY $100</Text>
        </TouchableOpacity>
        <View style={styles.rowContainer}>
          <Pressable
            style={styles.rowContainer}
            onPress={() => setChecked(!checked)}>
            <IconCommunity
              color={COLOR.White}
              size={23}
              name={checked ? 'checkbox-marked' : 'checkbox-blank'}
            />
            <Text style={styles.text}>
              Save card info for future transactions
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default CardPaymentView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.Black,
    width: width,
    minHeight: height,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textInputContainer: {
    marginTop: 20,
  },
  textInput: {
    borderRadius: 5,
    backgroundColor: COLOR.Grey,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: COLOR.White,
    marginVertical: 10,
  },
  text: {
    color: COLOR.White,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  labelText: {
    color: COLOR.WhiteRGBA75,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: 14,
  },
  button: {
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor: COLOR.WhiteRGBA50,
  },
});
