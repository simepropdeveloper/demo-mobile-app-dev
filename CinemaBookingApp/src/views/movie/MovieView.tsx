import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {COLOR} from '../../themes/themes';
import HeaderUser from '../../components/HeaderUser';
import SearchBar from '../../components/SearchBar';
import CategoryText from '../../components/CategoryText';
import MovieCard from '../../components/card/MovieCard';
import {
  baseImagePath,
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
} from '../../api/ApiHandler';

// const {width} = Dimensions.get('window');

const MovieView = ({navigation}: any) => {
  const [newMovieList, setNewMovieList] = React.useState([]);
  const [popularMovieList, setPopularMovieList] = React.useState<any>(null);
  const [recommendedMovieList, setRecommendedMovieList] =
    React.useState<any>(null);

  React.useEffect(() => {
    (async () => {
      let tempPopular = await getPopularMovies();
      setPopularMovieList(tempPopular.results);

      let tempTopRated = await getTopRatedMovies();
      setRecommendedMovieList(tempTopRated.results);

      let tempNewMovie = await getUpComingMovies();
      setNewMovieList(tempNewMovie.results);
    })();
  }, []);

  if (
    recommendedMovieList == null ||
    popularMovieList == null ||
    newMovieList == null
  ) {
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <StatusBar hidden />

        <HeaderUser />
        <SearchBar />

        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={COLOR.White} />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container} bounces={false}>
      <HeaderUser />
      <SearchBar />
      <CategoryText title={'New Releases'} subtitle={'View All'} />
      <FlatList
        data={newMovieList}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.containerGap36}
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
        contentContainerStyle={styles.containerGap36}
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
        contentContainerStyle={styles.containerGap36}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.Black,
    display: 'flex',
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    flex: 1,
  },
  containerGap36: {
    gap: 36,
  },
});

export default MovieView;
