import * as React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import BFCard from '../card/BFCard';

const BFPager = () => {
  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        horizontal={false}
        contentContainerStyle={{paddingBottom: 80, paddingTop: 20}}
        keyExtractor={(item: any) => item}
        numColumns={2}
        renderItem={({item, index}) => <BFCard />}
      />
    </SafeAreaView>
  );
};

export default BFPager;
