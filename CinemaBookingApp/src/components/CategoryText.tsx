import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLOR, FONTFAMILY} from '../themes/themes';

const CategoryText = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontSize: 18, color: COLOR.White}]}>
        {props.title}
      </Text>
      <Text style={[styles.text, {fontSize: 12, color: COLOR.WhiteRGBA50}]}>
        View All
      </Text>
    </View>
  );
};

export default CategoryText;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: FONTFAMILY.poppins_semibold,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
