import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {baseImagePath} from '../../redux/reducers/ApiHandler';

const TicketCard = () => {
  const movies = useSelector((state: any) => state.movies);
  // const booking = useSelector((state: any) => state.booking);
  return (
    <View className="rounded-sm border-gray-400 border-2 py-4">
      <View className="flex-col">
        <View className="flex-row gap-2  px-4 pb-12">
          <Image
            className=""
            width={120}
            height={150}
            source={{
              uri: baseImagePath('w342', movies.selectMovie.poster_path),
            }}
          />
          <View className="flex-1 ">
            <Text className="text-white font-poppins_bold text-lg py-[0.5]">
              {movies.selectMovie.title}
            </Text>
            <Text className="text-white/50 font-poppins_regular text-xs py-[0.5]">
              {/* {'Adventure, Family, Fantasy, Romance'} */}
              {movies.selectMovie.genres
                .map((item: any) => item.name)
                .join(',')}
            </Text>
            <Text className="text-white/50 font-poppins_regular text-xs py-[0.5]">
              {`${Math.floor(movies.selectMovie.runtime / 60)}h ${
                movies.selectMovie.runtime -
                Math.floor(movies.selectMovie.runtime / 60) * 60
              }m`}
            </Text>
            <Text className="text-white/50 font-poppins_regular text-xs py-[0.5]">
              {'English IMDb 3D'}
            </Text>
            <Text className="text-white/50 font-poppins_regular text-xs py-[0.5]">
              {'Classic Tickets'}
            </Text>
          </View>
        </View>
        <View className="border-dashed border-t-[1px] border-white" />
        <View className="absolute rounded-full border-gray-400 border-r-[3px] bg-black h-[55] w-[55] -bottom-8 -left-8" />
        <View className="absolute rounded-full border-gray-400 border-l-[3px] bg-black h-[55] w-[55] -bottom-8 -right-8" />
      </View>
      {/* cinema details */}
      <View className="px-4">
        <View className="py-6">
          <Text className="text-white/50 font-poppins_medium">Cinema</Text>
          <Text className="text-white font-poppins_medium">
            Genesis Deluxe Lagos: Maryland mall
          </Text>
        </View>
        <View className="flex-row items-start justify-center gap-4">
          <View className="flex-1">
            <Text className="text-white/50 font-poppins_medium">Date</Text>
            <Text className="text-white font-poppins_medium">Nov 20, 2021</Text>
          </View>
          <View className="flex-1">
            <Text className="text-white/50 font-poppins_medium">Seat</Text>
            <Text className="text-white font-poppins_medium">F4,F5</Text>
          </View>
          <View className="flex-1">
            <Text className="text-white/50 font-poppins_medium">Start</Text>
            <Text className="text-white font-poppins_medium">5.40PM</Text>
          </View>
          <View className="flex-1">
            <Text className="text-white/50 font-poppins_medium">End</Text>
            <Text className="text-white font-poppins_medium">7.20PM</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TicketCard;
