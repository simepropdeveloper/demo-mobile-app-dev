import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLOR} from '../themes/themes';
import Icon from 'react-native-vector-icons/FontAwesome';

const Star = (props: any) => {
  return (
    <View style={[styles.container, {gap: 3, marginVertical: 5}]}>
      {[...Array(Math.floor(props.rate / 2))].map(idx => (
        <Icon
          key={idx}
          name="star"
          color={COLOR.Yellow}
          size={15}
          // style={{flex: 1}}
        />
      ))}

      {[...Array(5 - Math.floor(props.rate / 2))].map(idx => (
        <Icon
          key={idx}
          name="star-o"
          color={props.color}
          size={15}
          // style={{flex: 1}}
        />
      ))}
    </View>
  );
};

export default Star;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
