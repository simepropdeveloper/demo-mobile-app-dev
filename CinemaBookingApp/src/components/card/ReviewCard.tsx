import * as React from 'react';
import {Text, View} from 'react-native';
import Star from '../container/Star';
interface Props {
  isFirst: boolean;
  isLast: boolean;
  review: any;
}
const ReviewCard: React.FC<Props> = ({isFirst, isLast, review}) => {
  return (
    <View
      className={`w-[250px] border-[1] border-black rounded bg-white ${
        isFirst ? 'ml-5' : 'ml-0'
      } ${isLast ? 'mr-5' : 'mr-0'}`}>
      <View className="px-4">
        <Star rate={review.author_details.rating} color="black" />
      </View>
      <View className="border-black border-b-[0.6px]" />
      <Text className="text-sm font-poppins_bold text-black pb-1 px-4">
        {review.author}
      </Text>
      <Text className="pb-1 px-4 text-black font-poppins_regular text-xs">
        {review.content.length > 100
          ? `${review.content.substring(0, 99)}...`
          : review.content}
      </Text>
    </View>
  );
};

export default ReviewCard;
