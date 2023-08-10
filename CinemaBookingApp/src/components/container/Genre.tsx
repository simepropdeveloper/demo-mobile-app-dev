import * as React from 'react';
import {Text, View} from 'react-native';

const Genre = (props: any) => {
  return (
    <View
      className="w-auto px-1 py-[2px] border-white/75 text-center rounded-md border-[1px] mr-2 mb-2"
      key={props.id}>
      <Text className="text-xs text-white/75 font-poppins_medium">
        {props.genre}
      </Text>
    </View>
  );
};

export default Genre;
