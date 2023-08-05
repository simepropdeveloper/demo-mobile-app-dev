import * as React from 'react';
import {View} from 'react-native';
import ListDetailsMovie from '../container/ListDetailsMovie';

interface Props {
  movie: any;
  casts: any;
}

const MovieDetailsPager: React.FC<Props> = ({movie, casts}) => {
  return (
    <View className="pt-2">
      <ListDetailsMovie
        title="Full synopsis"
        description={movie.overview}
        showLine={true}
      />
      <ListDetailsMovie
        title="Casts"
        description={casts.cast}
        showLine={true}
      />
      <ListDetailsMovie
        title="Director"
        description={casts.crew.filter(({job}: any) => job === 'Director')}
        showLine={true}
      />
      <ListDetailsMovie
        title="Writers"
        description={casts.crew.filter(
          ({department}: any) => department === 'Writing',
        )}
        showLine={false}
      />
    </View>
  );
};

export default MovieDetailsPager;
