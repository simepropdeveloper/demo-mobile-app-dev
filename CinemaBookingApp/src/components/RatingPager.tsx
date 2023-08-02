import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CategoryText from '../components/CategoryText';
import ReviewCard from '../components/ReviewCard';
import {COLOR, FONTFAMILY} from '../themes/themes';
type Rating = {
  '5star': number;
  '4star': number;
  '3star': number;
  '2star': number;
  '1star': number;
  total: number;
};
const RatingPager = (props: any) => {
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
    props.reviews.results.forEach((element: any) => {
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
    setRates(rating);
  }, [props.reviews.results]);
  return (
    <View style={{paddingTop: 10}}>
      <View style={[styles.container, styles.padding]}>
        <Icon name="star" color={COLOR.Yellow} size={18} />
        <Text style={[styles.text, {paddingLeft: 10}]}>{`${(
          props.movie.vote_average / 2
        ).toFixed(2)} (${props.reviews.total_results}) Reviews`}</Text>
      </View>
      <View
        style={{
          borderBottomColor: COLOR.WhiteRGBA50,
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginHorizontal: 20,
        }}
      />
      <View style={styles.padding}>
        {[1, 2, 3, 4, 5].reverse().map(idx => (
          <View style={[styles.container]} key={idx}>
            <View style={[styles.container, {flex: 1}]}>
              {[...Array(idx)].map(idx1 => (
                <Icon
                  key={`idx-${Math.floor(Math.random() * 1000 + 1)}-${
                    idx1 * 5
                  }`}
                  name="star"
                  style={{paddingVertical: 2}}
                  color={COLOR.Yellow}
                  size={15}
                />
              ))}
            </View>
            <View style={styles.progressbar}>
              <View
                style={{
                  backgroundColor: COLOR.Yellow,
                  borderRadius: 10,
                  flex: 1,
                  width:
                    rates !== undefined
                      ? (rates?.[`${idx}star` as keyof object] / rates?.total) *
                        100
                      : 0,
                }}
              />
            </View>
            <Text style={styles.textCountRate}>{`(${
              rates?.[`${idx}star` as keyof object]
            })`}</Text>
          </View>
        ))}
      </View>
      <View
        style={{
          borderBottomColor: COLOR.WhiteRGBA50,
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginHorizontal: 20,
        }}
      />
      <CategoryText title={'Customer Reviews'} subtitle={'see all'} />
      <FlatList
        data={props.reviews.results}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.containerGap28}
        renderItem={({item, index}: any) => (
          <ReviewCard
            isFirst={index === 0 ? true : false}
            isLast={index === props.reviews.results?.length - 1 ? true : false}
            review={item}
          />
        )}
      />
    </View>
  );
};

export default RatingPager;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  padding: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    color: COLOR.White,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: 14,
  },
  textCountRate: {
    color: COLOR.White,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: 12,
    // flex: 1,
    paddingHorizontal: 20,
  },
  containerGap28: {
    gap: 28,
  },
  progressbar: {
    borderRadius: 10,
    height: 5,
    backgroundColor: COLOR.White,
    width: 180,
    flex: 1,
    // padding: 10,
  },
});
