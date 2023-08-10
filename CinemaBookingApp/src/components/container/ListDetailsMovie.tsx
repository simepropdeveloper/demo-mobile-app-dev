import * as React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
interface Props {
  title: String;
  description: any;
  showLine: boolean;
}
const ListDetailsMovie: React.FC<Props> = ({title, description, showLine}) => {
  const [desc, setDesc] = React.useState('');
  React.useEffect(() => {
    if (title === 'Casts' || title === 'Director' || title === 'Writers') {
      setDesc(description.map((item: any) => item.name).join(', '));
    } else {
      setDesc(description);
    }
  }, [desc, description, title]);
  return (
    <View>
      <View className="flex-row px-5 py-3 justify-between">
        <View className="flex-1">
          <Text className="text-white font-poppins_bold text-sm">{title}</Text>
          <Text className="text-white font-poppins_regular text-xs">
            {desc.length > 100 ? `${desc.substring(0, 99)}...` : desc}
          </Text>
        </View>
        <View className="self-end py-3">
          <Icon
            name="arrow-forward-ios"
            size={20}
            color="rgba(255,255,255,0.75)"
          />
        </View>
      </View>
      {showLine && <View className="border-white/50 mx-5 border-b-[0.6px]" />}
    </View>
  );
};

export default ListDetailsMovie;
