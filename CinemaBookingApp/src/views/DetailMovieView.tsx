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
import YouTube from 'react-native-youtube';
import {baseImagePath, getMovieDetails} from '../api/ApiHandler';
import {COLOR, FONTFAMILY} from '../themes/themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import Genre from '../components/Genre';

const DetailMovieView = ({navigation, route}: any) => {
  const [urlTrailer, setUrlTrailer] = React.useState('');
  const [movieDetails, setMovieDetails] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let temp = await getMovieDetails(route.params.movieid);
      console.log(temp.videos.results[0].key);
      setMovieDetails(temp);
      setUrlTrailer('temp.videos.results[0].key');
      console.log(urlTrailer);
    })();
  }, [route.params.movieid, urlTrailer]);

  if (urlTrailer === '' && movieDetails === null) {
    console.log('hi');
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
    <ScrollView style={styles.container} bounces={false}>
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
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.push('TicketBooking', {movieid: movieDetails.id})
          }>
          <Text style={[styles.textTitle, {textAlign: 'center'}]}>
            Book Ticket
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: 20,
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
