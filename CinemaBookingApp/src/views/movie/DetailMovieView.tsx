/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Text, View} from 'react-native';

import {
  baseImagePath,
  getMovieCasts,
  getMovieDetails,
  getMovieReviews,
} from '../../redux/reducers/ApiHandler';

import Icon from 'react-native-vector-icons/FontAwesome';

import MovieTabView from '../../components/tabview/MovieTabView';
import Genre from '../../components/container/Genre';
import Star from '../../components/container/Star';
import YoutubeIframe from 'react-native-youtube-iframe';
import {useDispatch, useSelector} from 'react-redux';
import {
  getLoadBegin,
  getLoadError,
  getMovieShow,
} from '../../redux/slices/showSlice';

const DetailMovieView = ({navigation}: any) => {
  const movies = useSelector((state: any) => state.movies);
  const shows = useSelector((state: any) => state.shows);
  const dispatch = useDispatch();
  const [urlTrailer, setUrlTrailer] = React.useState('');
  const [movieDetails, setMovieDetails] = React.useState<any>(null);
  const [movieCasts, setMovieCasts] = React.useState<any>(null);
  const [movieReviews, setMovieReviews] = React.useState<any>(null);
  const [noShow, setNoShow] = React.useState(false);
  React.useEffect(() => {
    const getShowById = async () => {
      try {
        dispatch(getLoadBegin());
        let response = await fetch(
          `http://192.168.1.7:8000/api/show_movie/${movies.selectMovie.id}`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          },
        );
        let json = await response.json();
        dispatch(getMovieShow(json.results));
      } catch (error) {
        dispatch(getLoadError(error));
      }
    };
    (async () => {
      await getShowById();
      let temp = await getMovieDetails(movies.selectMovie.id);
      setMovieDetails(temp);
      setUrlTrailer(
        temp.videos.results.length !== 0 ? temp.videos.results[0].key : '',
      );

      let tempCasts = await getMovieCasts(movies.selectMovie.id);
      setMovieCasts(tempCasts);

      let tempReviews = await getMovieReviews(movies.selectMovie.id);
      setMovieReviews(tempReviews);
    })();
  }, [dispatch, movies.selectMovie]);

  React.useEffect(() => {
    if (shows.error === null && shows.movieShow.length !== 0) {
      setNoShow(false);
    } else {
      setNoShow(true);
    }
  }, [shows.error, shows.movieShow.length]);
  if (
    movieDetails === null ||
    movieCasts === null ||
    movieReviews === null ||
    shows.movieShow.loading
  ) {
    return (
      <ScrollView
        className="bg-black"
        bounces={false}
        contentContainerStyle={{flex: 1}}>
        <StatusBar hidden />
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size={'large'} color="white" />
        </View>
      </ScrollView>
    );
  }
  const {width} = Dimensions.get('window');
  return (
    <View className="bg-black flex-1">
      <ScrollView bounces={false}>
        {urlTrailer !== '' ? (
          <YoutubeIframe
            videoId={urlTrailer}
            height={250}
            width={width}
            initialPlayerParams={{
              modestbranding: true,
            }}
          />
        ) : (
          <Image
            width={width}
            height={200}
            source={{uri: baseImagePath('w342', movieDetails.backdrop_path)}}
          />
        )}

        <View className="-mt-8 rounded-tl-2xl border-gray-500 rounded-tr-2xl bg-black justify-center items-center">
          <View className="flex-row m-5">
            <Image
              className="rounded-lg self-center"
              width={120}
              height={180}
              source={{uri: baseImagePath('w342', movieDetails.poster_path)}}
            />
            <View className="ml-3 flex-1 ">
              <View className="flex-row items-center mb-1">
                <Text className=" font-poppins_bold text-white text-lg flex-1">
                  {movieDetails.original_title}
                </Text>
                <Icon name="heart-o" color="white" size={20} />
              </View>

              <View className="flex-row items-center flex-wrap mb-2">
                {movieDetails.genres.map((item: {name: any; id: any}) => {
                  return <Genre genre={item.name} key={item.id} />;
                })}
              </View>

              <View className="flex-row items-center gap-2 mb-2">
                <View className="flex-row items-center">
                  <Icon
                    size={15}
                    name="calendar-o"
                    color="rgba(255,255,255,0.75)"
                  />
                  <Text className="text-white/75 text-xs ml-1">
                    {movieDetails.release_date}
                  </Text>
                </View>
                <View className="flex-row items-center">
                  <Icon size={15} name="tv" color="rgba(255,255,255,0.75)" />
                  <Text className="text-white/75 text-xs ml-1">
                    {movieDetails.adult ? '15+' : '13+'}
                  </Text>
                </View>
                <View className="flex-row items-center">
                  <Icon
                    size={15}
                    name="clock-o"
                    color="rgba(255,255,255,0.75)"
                  />
                  <Text className="text-white/75 text-xs ml-1">
                    {`${Math.floor(movieDetails.runtime / 60)}h ${
                      movieDetails.runtime -
                      Math.floor(movieDetails.runtime / 60) * 60
                    }m`}
                  </Text>
                </View>
              </View>

              <View className="flex-row items-center  mb-2 ">
                <Star
                  rate={movieDetails.vote_average}
                  color="rgba(255,255,255,0.50)"
                />
                <Text className="text-white/75 text-xs px-1">
                  {`${(movieDetails.vote_average / 2).toFixed(2)}/5 (${
                    movieReviews.total_results
                  })`}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <MovieTabView
          movie={movieDetails}
          casts={movieCasts}
          reviews={movieReviews}
        />
      </ScrollView>
      <TouchableOpacity
        className="rounded-md px-5 py-1 mx-5 mt-2 mb-5  bg-white/40 "
        onPress={() => (!noShow ? navigation.push('TicketBooking') : '')}>
        <Text className="text-center font-poppins_bold text-white text-lg">
          {shows.loading
            ? 'Loading...'
            : noShow
            ? 'No show found'
            : 'Book Ticket'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailMovieView;
