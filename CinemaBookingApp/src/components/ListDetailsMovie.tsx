import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLOR, FONTFAMILY} from '../themes/themes';
const ListDetailsMovie = (props: any) => {
  const [desc, setDesc] = React.useState('');
  React.useEffect(() => {
    if (
      props.title === 'Casts' ||
      props.title === 'Director' ||
      props.title === 'Writers'
    ) {
      setDesc(props.desc.map((item: any) => item.name).join(', '));
    } else {
      setDesc(props.desc);
    }
  }, [desc, props.desc, props.title]);
  return (
    <View>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text
            style={[
              styles.text,
              {fontFamily: FONTFAMILY.poppins_bold, fontSize: 14},
            ]}>
            {props.title}
          </Text>
          <Text
            style={[
              styles.text,
              {fontFamily: FONTFAMILY.poppins_regular, fontSize: 12},
            ]}>
            {desc.length > 100 ? `${desc.substring(0, 99)}...` : desc}
          </Text>
        </View>
        <Icon
          name="arrow-forward-ios"
          size={20}
          color={COLOR.WhiteRGBA32}
          style={{alignSelf: 'flex-end'}}
        />
      </View>
      {props.showLine && (
        <View
          style={{
            borderBottomColor: COLOR.WhiteRGBA50,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      )}
    </View>
  );
};

export default ListDetailsMovie;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  text: {
    color: COLOR.White,
  },
});
