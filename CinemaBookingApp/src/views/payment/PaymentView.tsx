import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {COLOR, FONTFAMILY} from '../../themes/themes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');

const PaymentView = ({navigation}: any) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Payment',
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
          {
            'How would you like to make a payment? Kindly select your preferred option'
          }
        </Text>
        <TouchableOpacity
          style={{paddingVertical: 10, gap: 5}}
          onPress={() => navigation.push('CardPayment')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 18,
            }}>
            <Icon name="credit-card" size={30} color={COLOR.White} />
            <View style={{flex: 1}}>
              <Text style={[styles.text, {fontSize: 14}]}>Debit Card</Text>
              <Text style={[styles.textRegular]}>
                Pay with{' '}
                <FAIcon name="cc-mastercard" size={20} color={COLOR.White} />{' '}
                <FAIcon name="cc-visa" size={20} color={COLOR.White} />
              </Text>
            </View>
            <MaterialIcon
              name="arrow-forward-ios"
              size={20}
              color={COLOR.White}
            />
          </View>
          <View
            style={{
              borderBottomColor: COLOR.White,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingVertical: 10, gap: 5}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 18,
            }}>
            <Icon name="bank" size={30} color={COLOR.White} />
            <View style={{flex: 1}}>
              <Text style={[styles.text, {fontSize: 14}]}>Bank Transfer</Text>
              <Text style={[styles.textRegular]}>
                Make a transfer from your bank account
              </Text>
            </View>
            <MaterialIcon
              name="arrow-forward-ios"
              size={20}
              color={COLOR.White}
            />
          </View>
          <View
            style={{
              borderBottomColor: COLOR.White,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingVertical: 10, gap: 5}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 18,
              paddingVertical: 10,
            }}>
            <Icon name="credit-card" size={30} color={COLOR.White} />
            <View style={{flex: 1}}>
              <Text style={[styles.text, {fontSize: 14}]}>Crypto Wallets</Text>
              <Text style={[styles.textRegular]}>
                Pay from your cryptocurrency wallet
              </Text>
            </View>
            <MaterialIcon
              name="arrow-forward-ios"
              size={20}
              color={COLOR.White}
            />
          </View>
          <View
            style={{
              borderBottomColor: COLOR.White,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PaymentView;

const styles = StyleSheet.create({
  container: {
    width: width,
    minHeight: height,
    backgroundColor: COLOR.Black,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text: {
    color: COLOR.White,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  textRegular: {
    color: COLOR.WhiteRGBA75,
    fontFamily: FONTFAMILY.poppins_regular,
  },
});
