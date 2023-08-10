import * as React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props {
  color: any;
  rate: any;
}
const Star: React.FC<Props> = ({color, rate}) => {
  return (
    <View className="gap-1 my-1 flex-row items-center">
      {[...Array(Math.floor(rate / 2))].map(idx => (
        <Icon key={idx} name="star" color="rgb(250 204 21)" size={15} />
      ))}

      {[...Array(5 - Math.floor(rate / 2))].map(idx => (
        <Icon key={idx} name="star-o" color={color} size={15} />
      ))}
    </View>
  );
};

export default Star;
