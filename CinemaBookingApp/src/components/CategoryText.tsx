import * as React from 'react';
import {Text, View} from 'react-native';
const CategoryText = (props: any) => {
  return (
    <View className="flex justify-between  flex-row items-center px-5 pt-5 py-2">
      <Text className="text-lg text-white w-fit  font-poppins_semibold">
        {props.title}
      </Text>
      <Text className="text-xs text-whiteRGBA50 font-poppins_semibold">
        {props.subtitle}
      </Text>
    </View>
  );
};

export default CategoryText;

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   text: {
//     // fontFamily: FONTFAMILY.poppins_semibold,
//     // color: COLOR.White,
//   },
// });
