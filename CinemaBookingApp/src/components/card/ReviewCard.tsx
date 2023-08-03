import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Star from '../Star';
import {COLOR, FONTFAMILY} from '../../themes/themes';

const ReviewCard = (props: any) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginLeft: props.isFirst ? 20 : 0,
          marginRight: props.isLast ? 20 : 0,
        },
      ]}>
      <View style={{paddingHorizontal: 10}}>
        <Star rate={props.review.author_details.rating} color={COLOR.Black} />
      </View>
      <View
        style={{
          borderBottomColor: COLOR.Black,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <Text style={styles.textTitle}>{props.review.author}</Text>
      <Text style={styles.textDesc}>
        {props.review.content.length > 100
          ? `${props.review.content.substring(0, 99)}...`
          : props.review.content}
      </Text>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.White,
    borderRadius: 5,
    borderColor: COLOR.Black,
    borderWidth: 1,
    width: 250,
  },
  textDesc: {
    fontSize: 12,
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLOR.Black,
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  textTitle: {
    fontSize: 14,
    fontFamily: FONTFAMILY.poppins_bold,
    color: COLOR.Black,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
});
