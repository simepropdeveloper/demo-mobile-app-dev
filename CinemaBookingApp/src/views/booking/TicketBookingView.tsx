import * as React from 'react';
import {Text, View, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import Dropdown from '../../components/Dropdown';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FAAIcon from 'react-native-vector-icons/FontAwesome6';
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
const time = [
  '9.20 AM',
  '11.40 AM',
  '1.20 PM',
  '3.30 PM',
  '5.40 PM',
  '7.30 PM',
  '9.20 PM',
];
const generateDates = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let date = new Date();
  let lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  let arrayOfDate = [];
  for (let i = date.getDate(); i < lastDate.getDate(); i++) {
    let obj = {
      date: i,
      day: days[
        new Date(
          date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + i,
        ).getDay()
      ],
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
        taken: Boolean(Math.round(Math.random())),
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
  console.log(rowSeats);
  return rowSeats;
};
const TicketBookingView = ({navigation}: any) => {
  const [selectedLocation, setSelectedLocation] =
    React.useState<any>(undefined);
  const [selectedTime, setSelectedTime] = React.useState<any>(undefined);
  const [selectedDate, setSelectedDate] = React.useState<any>(undefined);
  const [selectedSeats, setSelectedSeats] = React.useState([]);
  const [price, setPrice] = React.useState(0);
  const [availDate, setAvailDate] = React.useState(generateDates());
  const [availSeats, setAvailSeats] = React.useState(generateSeats());

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

  const selectSeat = (index: number, subindex: number, seatNumber: String) => {
    if (!availSeats[index][subindex].taken) {
      let array: any = [...selectedSeats];
      let temp = [...availSeats];
      temp[index][subindex].selected = !temp[index][subindex].selected;
      if (!array.includes(seatNumber)) {
        if (selectedSeats.length < 6) {
          array.push(seatNumber);
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
        <View className="px-5 pt-5 pb-36">
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
                  <Text className="text-whiteRGBA50 font-poppins_regular text-xs">
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
                {id: 3, value: 'Surabaya'},
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
              data={[
                {id: 1, value: 'Cinema XXI Sun Plaza'},
                {id: 2, value: 'Cinema XXI Center Point'},
              ]}
              onSelect={setSelectedLocation}
            />
          </View>
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
              <Text className="font-poppins_medium text-whiteRGBA75">
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
              keyExtractor={(item: any) => item.date}
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
                    onPress={() => setSelectedDate(item)}>
                    <Text className="text-white font-poppins_semibold">
                      {item.day}
                    </Text>
                    <Text className="text-whiteRGBA75 font-poppins_medium">
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
              {time.map(item => (
                <TouchableOpacity
                  key={item}
                  className={`border-2 border-white rounded px-2 py-1 ${
                    selectedTime === item ? 'bg-gray-500' : ''
                  }`}
                  onPress={() => setSelectedTime(item)}>
                  <Text className="text-white font-poppins_medium">{item}</Text>
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
                <Text className="text-whiteRGBA75 font-poppins_medium text-center text-sm">
                  Available
                </Text>
              </View>
              <View className="flex-1 flex-row gap-1 items-center justify-center">
                <FAAIcon
                  name="square-xmark"
                  size={18}
                  color={'rgba(255,255,255,0.55)'}
                />
                <Text className="text-whiteRGBA75 font-poppins_medium text-center text-sm">
                  Unavailable
                </Text>
              </View>
              <View className="flex-1 flex-row items-center gap-1 justify-end">
                <FAIcon
                  name="square"
                  size={18}
                  color={'rgba(255,255,255,0.75)'}
                />
                <Text className="text-whiteRGBA75 font-poppins_medium text-center text-sm">
                  Selected
                </Text>
              </View>
            </View>
            <View className="py-5">
              <View className="w-full  border-white/75 border-t-8 rounded-full">
                <Text className="text-whiteRGBA75 text-xs font-poppins_medium text-center py-4">
                  Screen
                </Text>
              </View>

              <View className="flex-row items-center  ">
                <View className="gap-4 justify-center">
                  {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((item, idx) => (
                    <Text
                      className="font-poppins_medium text-whiteRGBA75 text-base"
                      key={`${item}-${idx}-1`}>
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
                              name="square-xmark"
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
                          )}
                        </TouchableOpacity>
                      ))}
                    </View>
                  ))}
                </View>
                <View className="gap-4 justify-center">
                  {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((item, idx) => (
                    <Text
                      className="font-poppins_medium text-whiteRGBA75 text-base"
                      key={`${item}-${idx}-2`}>
                      {item}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 ">
        <View className="bg-black py-4 ">
          {selectedSeats.length > 0 && (
            <View className="flex-row border-white/75 border-2 self-center mb-4 py-2">
              <View className="px-4 items-center justify-center">
                <Text className="text-white/75 font-poppins_medium">SEAT</Text>
                <View className="flex-row flex-wrap gap-2 ">
                  {selectedSeats.map(item => (
                    <View className=" rounded border-white border-[1px] px-1">
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
            <TouchableOpacity className="bg-white rounded flex-1 py-1">
              <Text className=" text-black font-poppins_bold text-lg text-center">
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-gray-500 rounded flex-1 py-1"
              onPress={() => navigation.push('BookingSummary')}>
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
