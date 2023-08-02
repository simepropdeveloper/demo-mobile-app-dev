import * as React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';

import {
  baseImagePath,
  getMovieCasts,
  getMovieDetails,
  getMovieReviews,
} from '../api/ApiHandler';
import {COLOR, FONTFAMILY} from '../themes/themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import Genre from '../components/Genre';
import TabPager from '../routes/TabPager';
import Star from '../components/Star';

const DetailMovieView = ({navigation, route}: any) => {
  // const [urlTrailer, setUrlTrailer] = React.useState('');
  const [movieDetails, setMovieDetails] = React.useState<any>(null);
  const [movieCasts, setMovieCasts] = React.useState<any>(null);
  const [movieReviews, setMovieReviews] = React.useState<any>(null);

  React.useEffect(() => {
    (async () => {
      let temp = await getMovieDetails(route.params.movieid);
      setMovieDetails(temp);

      let tempCasts = await getMovieCasts(route.params.movieid);
      setMovieCasts(tempCasts);

      let tempReviews = await getMovieReviews(route.params.movieid);
      setMovieReviews(tempReviews);
    })();
  }, [route.params.movieid]);

  if (movieDetails === null || movieCasts === null || movieReviews === null) {
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <StatusBar hidden />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={COLOR.White} />
        </View>
      </ScrollView>
    );
  }
  const {width} = Dimensions.get('window');
  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={[styles.container]}
        bounces={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Image
          width={width}
          height={200}
          source={{uri: baseImagePath('w342', movieDetails.backdrop_path)}}
        />
        <View style={styles.detailMovieContainer}>
          <View style={styles.movieContainer}>
            <Image
              style={styles.image}
              width={120}
              height={180}
              source={{uri: baseImagePath('w342', movieDetails.poster_path)}}
            />
            <View style={[styles.margin20, {flex: 1}]}>
              <View style={styles.rowContainer}>
                <Text style={[styles.textTitle, {flex: 1}]}>
                  {movieDetails.original_title}
                </Text>
                <Icon
                  name="heart-o"
                  color={COLOR.White}
                  size={20}
                  // style={{flex: 1}}
                />
              </View>

              <View style={[styles.rowContainer, {flexWrap: 'wrap'}]}>
                {movieDetails.genres.map((item: {name: any; id: any}) => {
                  return <Genre genre={item.name} key={item.id} />;
                })}
              </View>

              <View style={[styles.rowContainer, {gap: 10, marginVertical: 5}]}>
                <View style={styles.rowContainer}>
                  <Icon size={15} name="calendar-o" color={COLOR.WhiteRGBA75} />
                  <Text style={[styles.text, styles.margin5]}>
                    {movieDetails.release_date}
                  </Text>
                </View>
                <View style={styles.rowContainer}>
                  <Icon size={15} name="tv" color={COLOR.WhiteRGBA75} />
                  <Text style={[styles.text, styles.margin5]}>
                    {movieDetails.adult ? '15+' : '13+'}
                  </Text>
                </View>
                <View style={styles.rowContainer}>
                  <Icon size={15} name="clock-o" color={COLOR.WhiteRGBA75} />
                  <Text style={[styles.text, styles.margin5]}>
                    {`${Math.floor(movieDetails.runtime / 60)}h ${
                      movieDetails.runtime -
                      Math.floor(movieDetails.runtime / 60) * 60
                    }m`}
                  </Text>
                </View>
              </View>

              <View style={[styles.rowContainer, {gap: 3, marginVertical: 5}]}>
                <Star
                  rate={movieDetails.vote_average}
                  color={COLOR.WhiteRGBA50}
                />
                <Text style={styles.text}>
                  {`${(movieDetails.vote_average / 2).toFixed(2)}/5 (${
                    movieReviews.total_results
                  })`}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TabPager
          movie={movieDetails}
          casts={movieCasts}
          reviews={movieReviews}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push('Payment')}>
          <Text style={[styles.textTitle, {textAlign: 'center'}]}>
            Book Ticket
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: COLOR.WhiteRGBA32,
  },
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
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: COLOR.WhiteRGBA75,
    fontSize: 11,
  },
  image: {
    borderRadius: 10,
    alignSelf: 'center',
  },
  textTitle: {
    color: COLOR.White,
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: 20,
  },
  detailMovieContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.Black,
    marginTop: -20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  margin20: {
    marginLeft: 10,
  },
  margin5: {
    marginLeft: 5,
  },
});

export default DetailMovieView;
