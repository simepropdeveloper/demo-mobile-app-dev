import * as React from 'react';
import {Text, View, ScrollView} from 'react-native';

const HistoryTicketView = () => {
  return (
    <ScrollView>
      <View className="min-h-screen justify-center items-center bg-black">
        <Text className="text-white font-poppins_bold text-base">
          No Tickets Found
        </Text>
      </View>
    </ScrollView>
  );
};

export default HistoryTicketView;
