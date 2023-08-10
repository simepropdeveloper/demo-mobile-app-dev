import * as React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const HeaderUser = () => {
  return (
    <View className="my-1 flex-row items-center">
      <Image
        width={70}
        height={70}
        className="m-2 rounded-full"
        source={{
          uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png?f=webp',
        }}
      />
      <View className="flex-1">
        <View className="flex-row justify-between items-center">
          <Text className="text-white text-lg font-poppins_bold">
            Hello, Raymond
          </Text>
          <TouchableOpacity className="mx-2 my-2">
            <Icon name="notifications-outline" color="white" size={25} />
          </TouchableOpacity>
        </View>
        <Text className="text-white text-xs font-poppins_regular">
          Want to go see a movie? Get your ticket today
        </Text>
      </View>
    </View>
  );
};

export default HeaderUser;
