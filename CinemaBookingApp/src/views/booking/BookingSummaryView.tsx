import * as React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import TicketCard from '../../components/card/TicketCard';

const BookingSummaryView = ({navigation}: any) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Booking Summary',
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTitleStyle: {color: 'white'},
      headerTintColor: 'white',
    });
  }, [navigation]);
  return (
    <ScrollView>
      <View className="bg-black min-h-screen px-5 py-5">
        <TicketCard />
        <View className="rounded-sm border-gray-400 border-2 my-8 px-4 ">
          <View className="flex-row py-2">
            <View className="flex-1">
              <Text className="text-white font-poppins_medium">Tickets</Text>
              <Text className="text-white/50 font-poppins_regular text-xs">
                Classic tickets (x2)
              </Text>
            </View>
            <Text className="text-white font-poppins_medium self-center">
              $5000
            </Text>
          </View>
          <View className="flex-row py-2">
            <View className="flex-1">
              <Text className="text-white font-poppins_medium">
                Food & Beverage
              </Text>
              <Text className="text-white/50 font-poppins_regular text-xs">
                Fresh XL Combo (x2)
              </Text>
            </View>
            <Text className="text-white font-poppins_medium self-center ">
              $5400
            </Text>
          </View>
          <View className="flex-row py-2">
            <View className="flex-1">
              <Text className="text-white font-poppins_medium">Charges</Text>
              <Text className="text-white/50 font-poppins_regular text-xs">
                Service charge
              </Text>
            </View>
            <Text className="text-white font-poppins_medium self-center">
              $50
            </Text>
          </View>
          <View className="flex-row py-2 ">
            <Text className="text-white font-poppins_medium flex-1 self-center">
              Promo code
            </Text>
            <TextInput className="rounded bg-gray-400/60 flex-1  text-xs py-2 text-white font-poppins_medium" />
          </View>
          <View className="border-b-[1px] border-b-gray-400 m-2" />
          <View className="flex-row pb-4 pt-2">
            <Text className="text-white font-poppins_semibold text-base flex-1">
              Total Amount Payable
            </Text>
            <Text className="text-white font-poppins_semibold text-base">
              $10,450
            </Text>
          </View>
        </View>
        <TouchableOpacity
          className="bg-white/50 py-2 rounded"
          onPress={() => navigation.push('Payment')}>
          <Text className="text-white font-poppins_semibold text-lg text-center">
            Proceed to payment
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BookingSummaryView;
