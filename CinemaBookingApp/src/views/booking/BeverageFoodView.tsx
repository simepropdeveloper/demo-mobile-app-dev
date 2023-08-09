/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {TabBar, TabView} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BFPager from '../../components/pager/BFPager';
const BeverageFoodView = ({navigation}: any) => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Beverages & Food',
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTitleStyle: {color: 'white'},
      headerTintColor: 'white',
      headerRight: () => (
        <TouchableOpacity
          className="items-center flex-row gap-1"
          onPress={() => navigation.push('BookingSummary')}>
          <Text className="text-white font-poppins_regular">Skip</Text>
          <Icon name="arrow-forward-ios" color="white" size={12} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const [routes] = React.useState([
    {
      key: 'combo',
      title: 'Combo',
    },
    {
      key: 'food',
      title: 'Food/Snacks',
    },
    {
      key: 'beverage',
      title: 'Beverages',
    },
  ]);

  const renderScene = ({route}: any) => {
    switch (route.key) {
      case 'combo':
        return <BFPager />;
      case 'food':
        return <BFPager />;
      case 'beverage':
        return <BFPager />;
      default:
        return null;
    }
  };
  return (
    <View className="flex-1 bg-black">
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        swipeEnabled={false}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={({route, color}) => (
              <Text
                className={'text-base font-poppins_medium'}
                style={{color: color}}>
                {route.title}
              </Text>
            )}
            indicatorStyle={{backgroundColor: 'white'}}
            style={{backgroundColor: 'black'}}
          />
        )}
        // initialLayout={{width: layout.width, height: layout.height}}
      />
      <View className="bg-black py-4 ">
        {true && (
          <View className="flex-row border-white/75 border-2 self-center mb-4 py-2">
            <View className="px-4 items-center justify-center">
              <Text className="text-white/75 font-poppins_medium">SEAT</Text>
              <Text className="text-white font-poppins_medium text-xs">1</Text>
            </View>
            <View className="h-full border-l-2 border-white/75" />
            <View className="px-4 items-center justify-center">
              <Text className="text-white/75 font-poppins_medium">
                SUB-TOTAL
              </Text>
              <Text className="text-white font-poppins_semibold">$ {1000}</Text>
            </View>
          </View>
        )}
        <TouchableOpacity
          className="bg-gray-500 rounded py-1 mx-5"
          onPress={() => {
            navigation.push('BookingSummary');
          }}>
          <Text className=" text-white font-poppins_bold text-lg text-center">
            Proceed
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BeverageFoodView;
