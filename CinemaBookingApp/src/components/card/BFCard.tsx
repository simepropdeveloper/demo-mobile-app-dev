import * as React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BFCard = () => {
  const layout = useWindowDimensions();
  const [qty, setQty] = React.useState(0);
  return (
    <View className="flex-1 border-2 justify-center">
      <Image
        className="self-center"
        width={180}
        height={180}
        source={{
          uri: 'https://cdn.gobankingrates.com/wp-content/uploads/2019/03/McDonalds-meal-shutterstock_243788887.jpg',
        }}
      />
      <View className="flex-row pt-4 px-2">
        <Text className="text-base text-white font-poppins_medium flex-1">
          Fresh XL Combo
        </Text>
        <Text className="text-white text-xs font-poppins_medium  rounded bg-gray-400 self-center px-1">
          10% off
        </Text>
      </View>
      <Text className="text-whiteRGBA75 text-xs font-poppins_regular px-2">
        Double large popcorn and 4 pepsi
      </Text>
      <Text className="text-white text-xs font-poppins_bold line-through px-2 pt-2">
        $6000
      </Text>
      <View className="flex-row pb-4 px-2 items-start">
        <Text className="text-whiteRGBA75 text-sm font-poppins_regular flex-1">
          $5400
        </Text>
        <View className="flex-row flex-1 gap-4 items-start">
          <TouchableHighlight
            onPress={() => {
              if (qty > 0) {
                const temp = qty - 1;
                setQty(temp);
              }
            }}>
            <Icon name="minus-square" color="white" size={20} />
          </TouchableHighlight>
          <Text className="font-poppins_semibold text-white text-base">
            {qty}
          </Text>
          <TouchableHighlight
            onPress={() => {
              const temp = qty + 1;
              setQty(temp);
            }}>
            <Icon name="plus-square" color="white" size={20} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default BFCard;
