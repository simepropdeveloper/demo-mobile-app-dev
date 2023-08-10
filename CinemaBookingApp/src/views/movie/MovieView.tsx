/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';
import HeaderUser from '../../components/container/HeaderUser';
import SearchBar from '../../components/container/SearchBar';
import CategoryText from '../../components/container/CategoryText';
import MovieCard from '../../components/card/MovieCard';
import {baseImagePath} from '../../redux/reducers/ApiHandler';
import {useDispatch, useSelector} from 'react-redux';
import {setMovieIdSelected} from '../../redux/slices/movieSlice';

const MovieView = ({navigation}: any) => {
  const movies = useSelector((state: any) => state.movies);
  const dispatch = useDispatch();
  if (movies.loading) {
    return (
      <ScrollView
        className="bg-black"
        bounces={false}
        contentContainerStyle={{flex: 1}}>
        <StatusBar hidden />

        <HeaderUser />
        <SearchBar />

        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size={'large'} color="white" />
        </View>
      </ScrollView>
    );
  } else if (movies.error) {
    return (
      <ScrollView
        className="bg-black"
        bounces={false}
        contentContainerStyle={{flex: 1}}>
        <StatusBar hidden />

        <HeaderUser />
        <SearchBar />

        <View className="flex-1 justify-center items-center">
          <Text className="text-white font-poppins_bold text-center text-lg">
            Something went wrong
          </Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView bounces={false}>
      <View className="bg-black">
        <HeaderUser />
        <SearchBar />
        <CategoryText title={'New Releases'} subtitle={'View All'} />
        <FlatList
          data={[...movies.movieList]
            .sort(
              (a: any, b: any) =>
                new Date(a.release_date).valueOf() -
                new Date(b.release_date).valueOf(),
            )
            .reverse()}
          keyExtractor={(item: any) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{gap: 36}}
          renderItem={({item, index}) => (
            <MovieCard
              cardFunction={() => {
                navigation.push('Booking');
                dispatch(setMovieIdSelected(item));
              }}
              isFirst={index === 0 ? true : false}
              isLast={index === movies.movieList?.length - 1 ? true : false}
              title={item.original_title}
              imagePath={baseImagePath('w342', item.poster_path)}
            />
          )}
        />
        <CategoryText title={'Popular in cinemas'} subtitle={'View All'} />
        <FlatList
          data={[...movies.movieList]
            .sort((a: any, b: any) => a.popularity - b.popularity)
            .reverse()}
          keyExtractor={(item: any) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{gap: 36}}
          renderItem={({item, index}) => (
            <MovieCard
              cardFunction={() => {
                navigation.push('Booking');
                dispatch(setMovieIdSelected(item));
              }}
              isFirst={index === 0 ? true : false}
              isLast={index === movies.movieList?.length - 1 ? true : false}
              title={item.original_title}
              imagePath={baseImagePath('w342', item.poster_path)}
            />
          )}
        />
        <CategoryText title={'Recommended for you'} subtitle={'View All'} />
        <FlatList
          data={[...movies.movieList]
            .sort((a: any, b: any) => a.vote_average - b.vote_average)
            .reverse()}
          keyExtractor={(item: any) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{gap: 36}}
          renderItem={({item, index}) => (
            <MovieCard
              cardFunction={() => {
                navigation.push('Booking');
                dispatch(setMovieIdSelected(item));
              }}
              isFirst={index === 0 ? true : false}
              isLast={index === movies.movieList?.length - 1 ? true : false}
              title={item.original_title}
              imagePath={baseImagePath('w342', item.poster_path)}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default MovieView;
