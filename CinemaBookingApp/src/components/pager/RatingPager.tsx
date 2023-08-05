/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CategoryText from '../container/CategoryText';
import ReviewCard from '../card/ReviewCard';
// import {COLOR, FONTFAMILY} from '../../themes/themes';
type Rating = {
  '5star': number;
  '4star': number;
  '3star': number;
  '2star': number;
  '1star': number;
  total: number;
};
interface Props {
  movie: any;
  reviews: any;
}
const RatingPager: React.FC<Props> = ({movie, reviews}) => {
  const [rates, setRates] = React.useState<Rating>();

  React.useEffect(() => {
    let rating: Rating = {
      '5star': 0,
      '4star': 0,
      '3star': 0,
      '2star': 0,
      '1star': 0,
      total: 0,
    };
    if (reviews.results.length > 0) {
      reviews.results.forEach((element: any) => {
        const x = element.author_details.rating;
        if (x / 2 >= 4 && x / 2 < 5) {
          rating['4star'] += 1;
        } else if (x / 2 >= 3 && x / 2 < 4) {
          rating['3star'] += 1;
        } else if (x / 2 >= 2 && x / 2 < 3) {
          rating['2star'] += 1;
        } else if (x / 2 >= 1 && x / 2 < 2) {
          rating['1star'] += 1;
        } else if (x / 2 <= 5) {
          rating['5star'] += 1;
        }
      });
      rating.total =
        rating['1star'] +
        rating['2star'] +
        rating['3star'] +
        rating['4star'] +
        rating['5star'];
    }
    setRates(rating);
  }, [reviews.results]);
  return (
    <View className="pt-2">
      <View className="flex-row items-center mx-5 my-2">
        <Icon name="star" color="rgb(250 204 21)" size={18} />
        <Text className="pl-2  font-poppins_semibold text-white text-sm">{`${(
          movie.vote_average / 2
        ).toFixed(2)} (${reviews.total_results}) Reviews`}</Text>
      </View>
      <View className="border-white/50 mx-5 border-b-[0.6px]" />
      <View className="mx-5 my-2">
        {[1, 2, 3, 4, 5].reverse().map(idx => (
          <View className="flex-row items-center" key={idx}>
            <View className="flex-row items-center flex-1 gap-1">
              {[...Array(idx)].map(idx1 => (
                <Icon
                  key={`idx-${Math.floor(Math.random() * 1000 + 1)}-${
                    idx1 + 1 * 5
                  }`}
                  name="star"
                  className="py-1 "
                  color="rgb(250 204 21)"
                  size={15}
                />
              ))}
            </View>
            <View className="rounded-lg h-1 flex-1 bg-white">
              <View
                className={'bg-yellow-400 rounded-lg flex-1 '}
                style={{
                  width:
                    rates !== undefined && rates.total !== 0
                      ? (rates?.[`${idx}star` as keyof object] / rates?.total) *
                        100
                      : 0,
                }}
              />
            </View>
            <Text className="px-5 font-poppins_regular text-white text-xs">{`(${
              rates?.[`${idx}star` as keyof object]
            })`}</Text>
          </View>
        ))}
      </View>
      <View className="border-white/50 mx-5 border-b-[0.6px]" />

      <CategoryText title={'Customer Reviews'} subtitle={'see all'} />
      <FlatList
        data={reviews.results}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{gap: 28}}
        renderItem={({item, index}: any) => (
          <ReviewCard
            isFirst={index === 0 ? true : false}
            isLast={index === reviews.results?.length - 1 ? true : false}
            review={item}
          />
        )}
      />
    </View>
  );
};

export default RatingPager;
