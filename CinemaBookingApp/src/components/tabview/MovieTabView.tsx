/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import {Text} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import RatingPager from '../pager/RatingPager';
import MovieDetailsPager from '../pager/MovieDetailsPager';

const renderScene = ({route}: any) => {
  switch (route.key) {
    case 'details':
      return <MovieDetailsPager movie={route.movie} casts={route.casts} />;
    case 'review':
      return <RatingPager movie={route.movie} reviews={route.reviews} />;
    default:
      return null;
  }
};

const MovieTabView = (props: any) => {
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
      renderTabBar={propsTab => (
        <TabBar
          {...propsTab}
          renderLabel={({route, color}) => (
            <Text
              className={'text-base font-poppins_medium '}
              style={{
                color,
              }}>
              {route.title}
            </Text>
          )}
          indicatorStyle={{backgroundColor: 'white'}}
          style={{backgroundColor: 'black'}}
        />
      )}
      className="h-[420px]"
      initialLayout={{width: layout.width}}
    />
  );
};

export default MovieTabView;
