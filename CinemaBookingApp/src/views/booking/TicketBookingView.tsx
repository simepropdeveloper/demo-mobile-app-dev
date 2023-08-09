/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {Text, View, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import Dropdown from '../../components/container/Dropdown';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FAAIcon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {Pusher, PusherEvent} from '@pusher/pusher-websocket-react-native';
import {
  getLoadBegin,
  getLoadError,
  getMovieShow,
} from '../../redux/slices/showSlice';

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const generateDates = (availDates: any) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // let date = new Date();
  // let lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  let arrayOfDate = [];
  for (let i = 0; i < availDates.length; i++) {
    let obj = {
      date: new Date(availDates[i]).getDate(),
      day: days[new Date(availDates[i]).getDay()],
      all: availDates[i],
      // all: new Date(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + i)
      //   .toISOString()
      //   .split('T')[0],
    };
    arrayOfDate.push(obj);
  }
  return arrayOfDate;
};

const generateSeats = () => {
  let numRow = 8;
  let numColumn = 6;
  let rowSeats = [];
  for (let i = 0; i < numRow; i++) {
    let columnSeats = [];
    for (let j = 0; j < numColumn; j++) {
      let seatObject = {
        number: String.fromCharCode(i + 65) + (j + 1),
        taken: false,
        selected: false,
      };
      columnSeats.push(seatObject);
    }
    if (i === 0) {
      numColumn += 2;
    }
    if (i === 6) {
      numColumn -= 2;
    }
    rowSeats.push(columnSeats);
  }
  return rowSeats;
};
const TicketBookingView = ({navigation}: any) => {
  const url = 'http://192.168.1.7:8000';
  const shows = useSelector((state: any) => state.shows);
  const movies = useSelector((state: any) => state.movies);
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] =
    React.useState<any>(undefined);
  const [selectedTime, setSelectedTime] = React.useState<any>(undefined);
  const [selectedCinema, setSelectedCinema] = React.useState<any>(undefined);
  const [selectedDate, setSelectedDate] = React.useState<any>(undefined);
  const [selectedSeats, setSelectedSeats] = React.useState([]);
  const [price, setPrice] = React.useState(0);
  const [availDate, setAvailDate] = React.useState([]);
  const [availSeats, setAvailSeats] = React.useState(generateSeats());
  const [availTime, setAvailTime] = React.useState<any>([]);
  const [cinemas, setCinemas] = React.useState<any>([]);
  const pusher = Pusher.getInstance();

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Ticket Booking',
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTitleStyle: {color: 'white'},
      headerTintColor: 'white',
    });
  }, [navigation]);

  React.useEffect(() => {
    const getCinemaById = async () => {
      try {
        let response = await fetch(
          `${url}/api/cinema/${selectedLocation.value}`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          },
        );
        let json = await response.json();
        let temp = [];
        for (let i = 0; i < json.results.length; i++) {
          let obj = {
            id: json.results[i].cinema_id,
            value: json.results[i].cinema_name,
          };
          temp.push(obj);
        }
        setCinemas(temp);
      } catch (error) {}
    };
    (async () => {
      await getCinemaById();
    })();
  }, [selectedLocation]);

  React.useEffect(() => {
    (async () => {
      await pusher.init({
        apiKey: 'f47dc8a2490a4a2e079b',
        cluster: 'ap1',
      });

      await pusher.connect();
      await pusher.subscribe({
        channelName: 'seat-store',
        onEvent: (event: PusherEvent) => {
          console.log(`Event received: ${event}`);
        },
      });
    })();
  }, [pusher]);

  React.useEffect(() => {
    (async () => {
      if (selectedCinema !== undefined) {
        try {
          dispatch(getLoadBegin());
          let response = await fetch(
            `${url}/api/show_movie/${movies.selectMovie.id}`,
          );
          let json = await response.json();
          dispatch(
            getMovieShow(
              json.results
                .filter(
                  (item: any) => item.cinema_name === selectedCinema.value,
                )
                .sort(
                  (a: any, b: any) =>
                    new Date(a.date).valueOf() - new Date(b.date).valueOf(),
                )
                .reverse(),
            ),
          );
          let dates: any = [];
          shows.movieShow.map((item: any) => dates.push(item.date));

          setAvailDate(generateDates([...new Set(dates)]));
        } catch (error) {
          dispatch(getLoadError(error));
        }
      }
    })();
  }, [selectedCinema]);

  React.useEffect(() => {
    if (selectedDate !== undefined) {
      const time: any = [];
      shows.movieShow.map((item: any) => {
        if (item.date === selectedDate.all) {
          time.push(item.start_time);
        }
      });
      setAvailTime([...new Set(time)]);
    }
  }, [selectedDate]);
  React.useEffect(() => {
    if (selectedTime !== undefined) {
      let num = shows.movieShow.filter(
        (el: any) => el.start_time === selectedTime,
      );
      let tempSeat = availSeats;
      tempSeat.map(seat => {
        seat.map(subseat => {
          let x = num.find((i: any) => i.seat_number === subseat.number);
          if (x.seat_number === subseat.number) {
            if (x.status === 'booked') {
              subseat.taken = true;
            } else if (x.status === 'selected') {
              subseat.selected = true;
            } else {
              subseat.selected = false;
              subseat.taken = false;
            }
          }
        });
      });
      setAvailSeats(tempSeat);
    }
  }, [selectedTime]);

  const getHallId = (seatNum: any) => {
    let hallId = '';
    shows.movieShow.find((a: any) => {
      if (
        a.start_time === selectedTime &&
        a.cinema_name === selectedCinema.value &&
        a.date === selectedDate.all
      ) {
        hallId = a.cinema_hall_id;
      }
    });
    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({status: 'selected', seat_number: seatNum}),
    };
    fetch(`${url}/api/update_seat/${hallId}`, requestOptions).then(response => {
      console.log(response.json());
    });
  };
  const selectSeat = (index: number, subindex: number, seatNumber: String) => {
    if (!availSeats[index][subindex].taken) {
      let array: any = [...selectedSeats];
      let temp = [...availSeats];
      temp[index][subindex].selected = !temp[index][subindex].selected;
      if (!array.includes(seatNumber)) {
        if (selectedSeats.length < 6) {
          array.push(seatNumber);
          getHallId(seatNumber);

          setSelectedSeats(array);
        }
      } else {
        const tempindex = array.indexOf(seatNumber);
        if (tempindex > -1) {
          array.splice(tempindex, 1);
          setSelectedSeats(array);
        }
      }
      setPrice(array.length * 10);
      setAvailSeats(temp);
    }
  };

  return (
    <View className="flex-1 bg-black">
      <ScrollView>
        <View className="p-5 flex-[0.8]">
          <Text className="font-poppins_semibold text-white text-sm">
            Where would you like to see the movie? Kindly select as appropiate
          </Text>
          <FlatList
            keyExtractor={(item: any) => item}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            data={[
              'NGN 2000 - NGN 5000',
              'NGN 1500 - NGN 4500',
              'NGN 3500 - NGN 4500',
            ]}
            horizontal={true}
            className="py-5"
            contentContainerStyle={{gap: 20}}
            renderItem={({item}) => (
              <View className="bg-gray-600  rounded px-2 h-[100] justify-end">
                <View className="pb-1">
                  <Text className="text-white/50 font-poppins_regular text-xs">
                    Ticket from
                  </Text>
                  <Text className="text-white font-poppins_medium flex text-sm">
                    {item}
                  </Text>
                </View>
              </View>
            )}
          />
          <View>
            <Text className="font-poppins_medium text-white">Location</Text>
            <Dropdown
              label="Select Location"
              data={[
                {id: 1, value: 'Medan'},
                {id: 2, value: 'Jakarta'},
              ]}
              onSelect={setSelectedLocation}
            />
          </View>
          <View className="py-2">
            <Text className="font-poppins_medium text-white">
              Cinema Location
            </Text>
            <Dropdown
              label="Select Cinema Hall"
              data={cinemas}
              onSelect={setSelectedCinema}
            />
          </View>
          <View>
            {/* select date */}
            <View>
              <Text className="font-poppins_medium text-white">
                Select a date
              </Text>
              <View className="flex-row items-center gap-3">
                <FAIcon
                  name="caret-left"
                  size={15}
                  color="rgba(255,255,255,0.75)"
                />
                <Text className="font-poppins_medium text-white/75">
                  {month[new Date().getMonth()]}
                </Text>
                <FAIcon
                  name="caret-right"
                  size={15}
                  color="rgba(255,255,255,0.75)"
                />
              </View>
              <FlatList
                className="py-2"
                data={availDate}
                keyExtractor={(item: any) => item}
                horizontal
                bounces={false}
                contentContainerStyle={{gap: 10}}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      className={`items-center p-1 min-w-[40] ${
                        selectedDate !== undefined &&
                        selectedDate.date === item.date
                          ? 'bg-gray-500 rounded-full'
                          : ''
                      }`}
                      onPress={() => {
                        setSelectedDate(item);
                      }}>
                      <Text className="text-white font-poppins_semibold">
                        {item.day}
                      </Text>
                      <Text className="text-white/75 font-poppins_medium">
                        {item.date}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            {/* select time */}
            <View>
              <Text className="font-poppins_medium text-white">
                Available Time
              </Text>
              <View className="flex-row flex-wrap gap-4 py-2">
                {availTime.map((item: any) => (
                  <TouchableOpacity
                    key={item}
                    className={`border-2 border-white rounded px-2 py-1 ${
                      selectedTime === item ? 'bg-gray-500' : ''
                    }`}
                    onPress={() => setSelectedTime(item)}>
                    <Text className="text-white font-poppins_medium">
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            {/* select seat */}
            <View className="py-4">
              <Text className="text-white font-poppins_medium text-center">
                Select Seat
              </Text>
              <View className="flex-row py-2">
                <View className="flex-1 flex-row items-center justify-start gap-1">
                  <FAIcon
                    name="square"
                    size={18}
                    color={'rgba(255,255,255,0.35)'}
                  />
                  <Text className="text-white/75 font-poppins_medium text-center text-sm">
                    Available
                  </Text>
                </View>
                <View className="flex-1 flex-row gap-1 items-center justify-center">
                  <FAAIcon
                    name="closesquare"
                    size={18}
                    color={'rgba(255,255,255,0.55)'}
                  />
                  <Text className="text-white/75 font-poppins_medium text-center text-sm">
                    Unavailable
                  </Text>
                </View>
                <View className="flex-1 flex-row items-center gap-1 justify-end">
                  <FAIcon
                    name="square"
                    size={18}
                    color={'rgba(255,255,255,0.75)'}
                  />
                  <Text className="text-white/75 font-poppins_medium text-center text-sm">
                    Selected
                  </Text>
                </View>
              </View>
              <View className="py-5">
                <View className="w-full  border-white/75 border-t-8 rounded-full">
                  <Text className="text-white/75 text-xs font-poppins_medium text-center py-4">
                    Screen
                  </Text>
                </View>

                <View className="flex-row items-center  ">
                  <View className="gap-4 justify-center">
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(item => (
                      <Text className="font-poppins_medium text-white/75 text-base">
                        {item}
                      </Text>
                    ))}
                  </View>
                  <View className="  items-center justify-center flex-1">
                    {availSeats.map((item, index) => (
                      <View className="flex-row items-center justify-center gap-4 py-2">
                        {item.map((subItem, subIndex) => (
                          <TouchableOpacity
                            key={subItem.number}
                            onPress={() =>
                              selectSeat(index, subIndex, subItem.number)
                            }>
                            {subItem.taken ? (
                              <FAAIcon
                                name="closesquare"
                                size={22}
                                color={'rgba(255,255,255,0.55)'}
                              />
                            ) : (
                              <FAIcon
                                name="square"
                                size={23}
                                color={
                                  subItem.selected
                                    ? 'rgba(255,255,255,0.75)'
                                    : 'rgba(255,255,255,0.35)'
                                }
                              />
                              // <Text className="text-white">{subItem.number}</Text>
                            )}
                          </TouchableOpacity>
                        ))}
                      </View>
                    ))}
                  </View>
                  <View className="gap-4 justify-center">
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(item => (
                      <Text className="font-poppins_medium text-white/75 text-base">
                        {item}
                      </Text>
                    ))}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 flex-[0.2]">
        <View className="bg-black py-4 ">
          {selectedSeats.length > 0 && (
            <View className="flex-row border-white/75 border-2 self-center mb-4 py-2">
              <View className="px-4 items-center justify-center">
                <Text className="text-white/75 font-poppins_medium">SEAT</Text>
                <View className="flex-row flex-wrap gap-2 ">
                  {selectedSeats.map(item => (
                    <View
                      className=" rounded border-white border-[1px] px-1"
                      key={item}>
                      <Text className="text-white font-poppins_medium text-xs">
                        {item}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
              <View className="h-full border-l-2 border-white/75" />
              <View className="px-4 items-center justify-center">
                <Text className="text-white/75 font-poppins_medium">
                  SUB-TOTAL
                </Text>
                <Text className="text-white font-poppins_semibold">
                  $ {price}
                </Text>
              </View>
            </View>
          )}
          <View className="flex-row gap-4 px-5 ">
            <TouchableOpacity
              className="bg-white rounded flex-1 py-1"
              onPress={() => navigation.goBack()}>
              <Text className=" text-black font-poppins_bold text-lg text-center">
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-gray-500 rounded flex-1 py-1"
              onPress={() => {
                // dispatch(
                //   setBooking({
                //     date: selectedDate,
                //     cinema: selectedCinema,
                //     seats: selectedSeats,
                //     startTime: selectedTime,
                //   }),
                // );
                navigation.push('BeverageFood');
              }}>
              <Text className=" text-white font-poppins_bold text-lg text-center">
                Proceed
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TicketBookingView;
