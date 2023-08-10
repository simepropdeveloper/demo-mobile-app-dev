import * as React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
interface Props {
  isFirst: boolean;
  isLast: boolean;
  imagePath: string;
  title: string;
  cardFunction: any;
}
const MovieCard: React.FC<Props> = ({
  isFirst,
  isLast,
  imagePath,
  title,
  cardFunction,
}) => {
  return (
    <TouchableOpacity onPress={() => cardFunction()}>
      <View
        className={`w-[150] h-auto ${isFirst ? 'ml-5' : 'ml-0'} ${
          isLast ? 'mr-5' : 'mr-0'
        }`}>
        <Image
          source={{
            uri: imagePath,
          }}
          className="rounded-lg w-[150] h-[200]"
        />
        <View className="flex-row justify-between items-center my-2">
          <Text className="text-white font-poppins_semibold text-sm">
            {title}
          </Text>
          <Icon name="more-vertical" size={20} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
