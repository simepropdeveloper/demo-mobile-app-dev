/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import HeaderUser from '../../components/container/HeaderUser';
import SearchBar from '../../components/container/SearchBar';
import CategoryText from '../../components/container/CategoryText';
import MovieCard from '../../components/card/MovieCard';
import {
  baseImagePath,
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
} from '../../api/ApiHandler';

const MovieView = ({navigation}: any) => {
  const [newMovieList, setNewMovieList] = React.useState([]);
  const [popularMovieList, setPopularMovieList] = React.useState<any>(null);
  const [recommendedMovieList, setRecommendedMovieList] =
    React.useState<any>(null);

  React.useEffect(() => {
    (async () => {
      let tempNewMovie = await getUpComingMovies();
      setNewMovieList(tempNewMovie.results);

      let tempPopular = await getPopularMovies();
      setPopularMovieList(tempPopular.results);

      let tempTopRated = await getTopRatedMovies();
      setRecommendedMovieList(tempTopRated.results);
    })();
  }, []);

  if (
    recommendedMovieList == null ||
    popularMovieList == null ||
    newMovieList == null
  ) {
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
  }

  return (
    <ScrollView bounces={false}>
      <View className="bg-black">
        <HeaderUser />
        <SearchBar />
        <CategoryText title={'New Releases'} subtitle={'View All'} />
        <FlatList
          data={newMovieList}
          keyExtractor={(item: any) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{gap: 36}}
          renderItem={({item, index}) => (
            <MovieCard
              cardFunction={() => {
                navigation.push('Booking', {movieid: item.id});
              }}
              isFirst={index === 0 ? true : false}
              isLast={index === newMovieList?.length - 1 ? true : false}
              title={item.original_title}
              imagePath={baseImagePath('w342', item.poster_path)}
            />
          )}
        />
        <CategoryText title={'Popular in cinemas'} subtitle={'View All'} />
        <FlatList
          data={popularMovieList}
          keyExtractor={(item: any) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{gap: 36}}
          renderItem={({item, index}) => (
            <MovieCard
              cardFunction={() => {
                navigation.push('Booking', {movieid: item.id});
              }}
              isFirst={index === 0 ? true : false}
              isLast={index === popularMovieList?.length - 1 ? true : false}
              title={item.original_title}
              imagePath={baseImagePath('w342', item.poster_path)}
            />
          )}
        />
        <CategoryText title={'Recommended for you'} subtitle={'View All'} />
        <FlatList
          data={recommendedMovieList}
          keyExtractor={(item: any) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{gap: 36}}
          renderItem={({item, index}) => (
            <MovieCard
              cardFunction={() => {
                navigation.push('Booking', {movieid: item.id});
              }}
              isFirst={index === 0 ? true : false}
              isLast={index === recommendedMovieList?.length - 1 ? true : false}
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
