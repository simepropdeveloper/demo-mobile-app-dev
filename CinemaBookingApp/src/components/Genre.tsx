import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLOR, FONTFAMILY} from '../themes/themes';

const Genre = (props: any) => {
  console.log(props);
  return (
    <View style={styles.container} key={props.id}>
      <Text style={styles.text}>{props.genre}</Text>
    </View>
  );
};

export default Genre;

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderColor: COLOR.WhiteRGBA75,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 3,
    marginVertical: 5,
    textAlign: 'center',
  },
  text: {
    color: COLOR.WhiteRGBA75,
    fontSize: 11,
    fontFamily: FONTFAMILY.poppins_medium,
  },
});
