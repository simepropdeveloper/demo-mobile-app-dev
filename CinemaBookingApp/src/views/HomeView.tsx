import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Dimensions,
  FlatList,
} from 'react-native';
import {COLOR} from '../themes/themes';
import HeaderUser from '../components/HeaderUser';
import SearchBar from '../components/SearchBar';
import CategoryText from '../components/CategoryText';
import MovieCard from '../components/MovieCard';
import {
  baseImagePath,
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
} from '../api/ApiHandler';

const {width} = Dimensions.get('window');

const HomeView = ({navigation}: any) => {
  const [newMovieList, setNewMovieList] = React.useState([]);
  const [popularMovieList, setPopularMovieList] = React.useState([]);
  const [recommendedMovieList, setRecommendedMovieList] = React.useState([]);

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
    recommendedMovieList.length === 0 &&
    recommendedMovieList == null &&
    popularMovieList.length === 0 &&
    popularMovieList == null &&
    newMovieList.length === 0 &&
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
      <CategoryText title={'New Releases'} />
      <FlatList
        data={newMovieList}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({item, index}) => (
          <MovieCard
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push('DetailMovie', {movieid: item.id});
            }}
            cardWidth={width / 3}
            isFirst={index === 0 ? true : false}
            isLast={index === newMovieList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseImagePath('w342', item.poster_path)}
          />
        )}
      />
      <CategoryText title={'Popular in cinemas'} />
      <FlatList
        data={popularMovieList}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({item, index}) => (
          <MovieCard
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push('DetailMovie', {movieid: item.id});
            }}
            cardWidth={width / 3}
            isFirst={index === 0 ? true : false}
            isLast={index === popularMovieList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseImagePath('w342', item.poster_path)}
          />
        )}
      />
      <CategoryText title={'Recommended for you'} />
      <FlatList
        data={recommendedMovieList}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({item, index}) => (
          <MovieCard
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push('DetailMovie', {movieid: item.id});
            }}
            cardWidth={width / 3}
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

export default HomeView;
