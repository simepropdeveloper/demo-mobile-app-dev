import * as React from 'react';
import {Text, View, Modal, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props {
  label: string;
  data: Array<{id: number; value: string}>;
  onSelect: (item: {id: number; value: string}) => void;
}
const Dropdown: React.FC<Props> = ({label, data, onSelect}) => {
  const [selectedItem, setSelectedItem] = React.useState<any>(null);
  const [visible, setVisible] = React.useState(false);
  const DropdownButton = React.useRef<any>();
  const [dropdownTop, setDropdownTop] = React.useState(0);
  const renderList = (): React.ReactElement<any, any> => (
    <Modal visible={visible} transparent={true} animationType="none">
      <View className=" px-5 w-full absolute" style={{top: dropdownTop}}>
        <FlatList
          data={data}
          keyExtractor={(item: any) => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              className="bg-gray-200"
              onPress={() => {
                setSelectedItem(item);
                setVisible(!visible);
                onSelect(item);
              }}>
              <Text className="text-black font-poppins_regular flex-1 px-5">
                {item.value}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </Modal>
  );
  const openDropDown = () => {
    if (visible) {
      setVisible(!visible);
    } else {
      DropdownButton.current.measure(
        (
          _fx: number,
          _fy: number,
          _w: number,
          h: number,
          _px: number,
          py: number,
        ) => {
          setDropdownTop(py + h);
        },
      );
      setVisible(true);
    }
  };
  return (
    <TouchableOpacity
      ref={DropdownButton}
      className="flex-row items-center bg-white rounded py-2 px-4"
      onPress={openDropDown}>
      {renderList()}
      <Text className="text-black font-poppins_regular flex-1">
        {selectedItem !== null ? selectedItem.value : label}
      </Text>
      <Icon name="angle-down" size={20} color="black" />
    </TouchableOpacity>
  );
};

export default Dropdown;
