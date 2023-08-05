import * as React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const PaymentView = ({navigation}: any) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Payment',
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTitleStyle: {color: 'white'},
      headerTintColor: 'white',
    });
  }, [navigation]);
  return (
    <ScrollView>
      <View className="w-full min-h-screen p-5 bg-black">
        <Text className="text-sm text-white font-poppins_semibold">
          {
            'How would you like to make a payment? Kindly select your preferred option'
          }
        </Text>
        <TouchableOpacity
          className="pt-4 pb-2"
          onPress={() => navigation.push('CardPayment')}>
          <View className="flex-row items-center gap-4 py-2">
            <Icon name="credit-card" size={30} color="white" />
            <View className="flex-1">
              <Text className="text-white font-poppins_semibold text-sm">
                Debit Card
              </Text>
              <Text className="font-poppins_regular text-white/75">
                Pay with <FAIcon name="cc-mastercard" size={20} color="white" />{' '}
                <FAIcon name="cc-visa" size={20} color="white" />
              </Text>
            </View>
            <MaterialIcon name="arrow-forward-ios" size={20} color="white" />
          </View>
          <View className="border-white/50 border-b-[0.6px]" />
        </TouchableOpacity>

        <TouchableOpacity className="py-1">
          <View className="flex-row items-center gap-4 py-2">
            <Icon name="bank" size={30} color="white" />
            <View className="flex-1">
              <Text className="text-white font-poppins_semibold text-sm">
                Bank Transfer
              </Text>
              <Text className="font-poppins_regular text-white/75">
                Make a transfer from your bank account
              </Text>
            </View>
            <MaterialIcon name="arrow-forward-ios" size={20} color="white" />
          </View>
          <View className="border-white/50 border-b-[0.6px]" />
        </TouchableOpacity>
        <TouchableOpacity className="py-1">
          <View className="flex-row items-center gap-4 py-2">
            <Icon name="credit-card" size={30} color="white" />
            <View className="flex-1">
              <Text className="text-white font-poppins_semibold text-sm">
                Crypto Wallets
              </Text>
              <Text className="font-poppins_regular text-white/75">
                Pay from your cryptocurrency wallet
              </Text>
            </View>
            <MaterialIcon name="arrow-forward-ios" size={20} color="white" />
          </View>
          <View className="border-white/50 border-b-[0.6px]" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PaymentView;
