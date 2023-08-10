/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const OrderCompletedView = ({navigation}: any) => {
  return (
    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
      <View className="min-h-screen justify-center items-center bg-black w-full">
        <Icon name="check-circle" size={150} color="white" />
        <Text className="font-poppins_bold text-white text-xl py-4">
          {'Congratulations!'}
        </Text>
        <Text className="text-base font-poppins_regular text-clip text-white/75 text-center py-2">
          {
            'Your ticket purchase is successful, a confirmation has been sent to your e-mail'
          }
        </Text>
        <View className="flex-row justify-center gap-4 my-4">
          <TouchableOpacity
            className="flex-row items-center border-white border-[1px] rounded px-3 py-2  justify-center"
            onPress={() => navigation.reset({routes: [{name: 'BottomNav'}]})}>
            <Icon name="arrow-left" size={20} color="white" />
            <Text className="text-base font-poppins_regular text-clip text-white/75 px-2">
              Main Menu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row items-center border-white border-[1px] rounded px-3 py-2 justify-center"
            onPress={() => navigation.navigate({routes: [{name: 'Ticket'}]})}>
            <Icon name="ticket-alt" size={20} color="white" />
            <Text className="text-base font-poppins_regular text-clip text-white/75 px-2">
              View Ticket
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderCompletedView;
