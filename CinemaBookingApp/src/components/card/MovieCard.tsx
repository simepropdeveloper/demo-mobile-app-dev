import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {COLOR, FONTFAMILY} from '../../themes/themes';
const MovieCard = (props: any) => {
  return (
    <TouchableOpacity onPress={() => props.cardFunction()}>
      <View
        style={[
          styles.container,
          {
            marginLeft: props.isFirst ? 20 : 0,
            marginRight: props.isLast ? 20 : 0,
          },
        ]}>
        <Image
          source={{
            uri: props.imagePath,
          }}
          style={styles.images}
        />
        <View style={styles.containerText}>
          <Text style={styles.text}>{props.title}</Text>
          <Icon
            name="more-vertical"
            size={20}
            color={COLOR.White}
            //   style={{flex: 2}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 'auto',
    // marginHorizontal: 20,
  },
  containerText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  text: {
    color: COLOR.White,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: 13,
    // flex: 1,
  },
  images: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
});
