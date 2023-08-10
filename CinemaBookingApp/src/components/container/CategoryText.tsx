import * as React from 'react';
import {Text, View} from 'react-native';
interface Props {
  title: string;
  subtitle: string;
}
const CategoryText: React.FC<Props> = ({title, subtitle}) => {
  return (
    <View className="flex justify-between  flex-row items-center px-5 pt-5 py-2">
      <Text className="text-lg text-white w-fit  font-poppins_semibold">
        {title}
      </Text>
      <Text className="text-xs text-white/50 font-poppins_semibold">
        {subtitle}
      </Text>
    </View>
  );
};

export default CategoryText;
