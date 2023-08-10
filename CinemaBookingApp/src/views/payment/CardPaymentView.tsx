import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';

import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const CardPaymentView = ({navigation}: any) => {
  const [checked, setChecked] = React.useState(false);
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Card Payment',
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTitleStyle: {color: 'white'},
      headerTintColor: 'white',
    });
  }, [navigation]);
  return (
    <ScrollView>
      <View className="bg-black min-h-screen p-5">
        <Text className="text-white font-poppins_semibold text-sm">
          {'Please enter your card details'}
        </Text>
        <View className="mt-5 ">
          <Text className="font-poppins_regular text-white/75 text-sm">
            {'Card number'}
          </Text>
          <TextInput
            className="rounded-md bg-grey py-2 px-4 text-white mt-2"
            placeholder="Enter card number"
            placeholderTextColor="rgba(255,255,255,0.75)"
          />
        </View>
        <View className="flex-row items-center gap-3 mt-3">
          <View className="mt-5 flex-1">
            <Text className="font-poppins_regular text-white/75 text-sm">
              {'Expire date'}
            </Text>
            <TextInput
              className="rounded-md bg-grey py-2 px-4 text-white mt-2"
              placeholder="MM/YY"
              placeholderTextColor="rgba(255,255,255,0.75)"
            />
          </View>
          <View className="mt-5 flex-1">
            <Text className="font-poppins_regular text-white/75 text-sm">
              {'CVV'}
            </Text>
            <TextInput
              className="rounded-md bg-grey py-2 px-4 text-white mt-2"
              placeholder="Enter CVV"
              placeholderTextColor="rgba(255,255,255,0.75)"
            />
          </View>
        </View>
        <TouchableOpacity
          className=" px-5 py-2 my-6  bg-white/40 rounded-lg"
          onPress={() => navigation.push('OrderCompleted')}>
          <Text className="text-white font-poppins_semibold text-center">
            PAY $100
          </Text>
        </TouchableOpacity>
        <View className="flex-row items-center">
          <Pressable
            className="flex-row gap-2"
            onPress={() => setChecked(!checked)}>
            <IconCommunity
              color="white"
              size={23}
              name={checked ? 'checkbox-marked' : 'checkbox-blank'}
            />
            <Text className="text-white font-poppins_semibold">
              Save card info for future transactions
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default CardPaymentView;
