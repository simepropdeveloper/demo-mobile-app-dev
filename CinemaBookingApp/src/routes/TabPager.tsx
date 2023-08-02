import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import {Text, View} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import {COLOR, FONTFAMILY} from '../themes/themes';
import ListDetailsMovie from '../components/ListDetailsMovie';
import RatingPager from '../components/RatingPager';

const Details = (props: any) => (
  <View style={{paddingTop: 10}}>
    <ListDetailsMovie
      title="Full synopsis"
      desc={props.movie.overview}
      showLine={true}
    />
    <ListDetailsMovie title="Casts" desc={props.casts.cast} showLine={true} />
    <ListDetailsMovie
      title="Director"
      desc={props.casts.crew.filter(({job}: any) => job === 'Director')}
      showLine={true}
    />
    <ListDetailsMovie
      title="Writers"
      desc={props.casts.crew.filter(
        ({department}: any) => department === 'Writing',
      )}
      showLine={false}
    />
  </View>
);

const renderScene = ({route}: any) => {
  switch (route.key) {
    case 'details':
      return <Details movie={route.movie} casts={route.casts} />;
    case 'review':
      return <RatingPager movie={route.movie} reviews={route.reviews} />;
    default:
      return null;
  }
};

const TabPager = (props: any) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'details',
      title: 'Movie Details',
      movie: props.movie,
      casts: props.casts,
    },
    {
      key: 'review',
      title: 'Rating & Reviews',
      movie: props.movie,
      reviews: props.reviews,
    },
  ]);

  return (
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
              style={{
                color,
                fontSize: 16,
                fontFamily: FONTFAMILY.poppins_medium,
              }}>
              {route.title}
            </Text>
          )}
          indicatorStyle={{backgroundColor: COLOR.White}}
          style={{backgroundColor: COLOR.Black}}
        />
      )}
      style={{height: 420}}
      initialLayout={{width: layout.width}}
    />
  );
};

export default TabPager;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',

//     color: COLOR.White,
//   },
//   padding: {
//     marginHorizontal: 20,
//     marginVertical: 10,
//   },
//   text: {
//     color: COLOR.White,
//     fontFamily: FONTFAMILY.poppins_semibold,
//     fontSize: 14,
//   },
//   containerGap28: {
//     gap: 28,
//   },
// });
