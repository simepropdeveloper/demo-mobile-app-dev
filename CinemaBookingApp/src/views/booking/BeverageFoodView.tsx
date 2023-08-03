import * as React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {TabBar, TabView} from 'react-native-tab-view';
import {useWindowDimensions} from 'react-native';
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

  const layout = useWindowDimensions();
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
    <View className="min-h-screen bg-black">
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
        // style={{height: 1000}}
        initialLayout={{width: layout.width, height: layout.height}}
      />
      <TouchableOpacity
        className="bg-black py-2 rounded mx-5"
        onPress={() => navigation.push('Payment')}>
        <Text className="text-white font-poppins_semibold text-lg text-center">
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BeverageFoodView;
