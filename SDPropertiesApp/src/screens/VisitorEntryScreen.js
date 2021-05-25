import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  Switch,
  TouchableOpacity
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DatePicker } from 'react-native-woodpicker';
import { Context } from '../context/PropertyContext';

const VisitorEntryScreen = ({ navigation, route }) => {
  const { addVisitor, editVisitor } = useContext(Context);
  let initialValues = route.params;

  if (!initialValues) {
    initialValues = {
      house: '',
      name: '',
      plateNo: '',
      mobileNo: '',
      entryType: 'Single Entry',
      entryDate: new Date().toDateString(),
      approvalUponArrival: true
    };
  }

  const [house, setHouse] = useState(initialValues.house);
  const [name, setName] = useState(initialValues.name);
  const [plateNo, setPlateNo] = useState(initialValues.plateNo);
  const [mobileNo, setMobileNo] = useState(initialValues.mobileNo);
  const [entryType, setEntryType] = useState(initialValues.entryType);
  const [entryDate, setEntryDate] = useState(new Date(initialValues.entryDate));
  const [approvalUponArrival, setApprovalUponArrival] = useState(initialValues.approvalUponArrival);

  const onSubmit = () => {
    if (initialValues.id) {
      editVisitor(
        initialValues.id,
        house,
        name,
        plateNo,
        mobileNo,
        entryType,
        entryDate,
        approvalUponArrival
      );
    } else {
      addVisitor(
        house,
        name,
        plateNo,
        mobileNo,
        entryType,
        entryDate,
        approvalUponArrival,
        () => navigation.navigate('Dashboard')
      );
    }
  };

  const formValidation = () => {
    if (!house || !name || !plateNo || !mobileNo || !entryType) {
      return true;
    }
    return false;
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <Text style={styles.title}>Visitor Entry</Text>
        <View style={styles.inputContainer}>
          <Text>House</Text>
          <RNPickerSelect
            value={house}
            onValueChange={(value) => setHouse(value)}
            style={{ ...pickerStyles, iconContainer: { top: 10, right: 10 } }}
            items={[
              { label: 'Lars Homestead 2', value: 'Lars Homestead 2' },
              { label: 'Lars Homestead 4', value: 'Lars Homestead 4' },
              { label: 'Lars Homestead 9', value: 'Lars Homestead 9' },
            ]}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <Ionicons name="caret-down-outline" size={15} color="#5e5e5e" />;
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Name</Text>
          <View style={styles.inputWithIconContainer}>
            <TextInput
              value={name}
              onChangeText={(value) => setName(value)}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Visitor's Name"
              style={styles.inputWithIcon}
            />
            <Ionicons name="person-circle" size={30} color="#5e5e5e" />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text>Vehicle Plate Number</Text>
          <TextInput
            value={plateNo}
            onChangeText={(value) => setPlateNo(value)}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Plate Number"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Mobile Number</Text>
          <TextInput
            value={mobileNo}
            onChangeText={(value) => setMobileNo(value)}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Mobile No."
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Entry Type</Text>
          <View style={styles.inputWithIconContainer}>
            <RNPickerSelect
              value={entryType}
              onValueChange={(value) => setEntryType(value)}
              style={{ ...pickerWithIconStyles, iconContainer: { top: 10, right: 10 } }}
              useNativeAndroidPickerStyle={false}
              items={[
                { label: 'Single Entry', value: 'Single Entry' },
                { label: 'Multiple Entry', value: 'Multiple Entry' }
              ]}
              Icon={() => {
                return <Ionicons name="caret-down-outline" size={15} color="#5e5e5e" />;
              }}
            />
            <Ionicons name="information-circle-outline" size={30} color="#5e5e5e" />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text>Entry Date</Text>
          <DatePicker
            date={entryDate}
            value={entryDate}
            minDate={entryDate}
            placeholder={entryDate.toDateString()}
            onDateChange={(value) => setEntryDate(value)}
            style={styles.datePicker}
            title=""
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.switchContainer}>
            <Text>Approval Upon Arrival</Text>
            <Switch
              value={approvalUponArrival}
              onValueChange={(value) => setApprovalUponArrival(value)}
              style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
              trackColor={{ false: '#cccccc', true: '#fcc7bd' }}
              thumbColor={approvalUponArrival ? '#ff431f' : '#aaaaaa'}
            />
          </View>
        </View>
        <TouchableOpacity onPress={onSubmit} disabled={formValidation()}>
          <View style={styles.inputContainer}>
            <View style={formValidation() ? styles.buttonDisabled : styles.button}>
              <Text style={styles.buttonText}>SUBMIT</Text>
            </View>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    fontWeight: '500',
    paddingTop: 30,
    marginHorizontal: 20,
    marginBottom: 20
  },
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 15
  },
  inputWithIconContainer: {
    flexDirection: 'row'
  },
  input: {
    paddingVertical: 10,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1
  },
  inputWithIcon: {
    flexGrow: 1,
    paddingVertical: 10,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    marginRight: 10
  },
  datePicker: {
    paddingVertical: 10,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#ff431f',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center'
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  }
});

const pickerStyles = StyleSheet.create({
  inputIOS: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    paddingRight: 30,
  },
  inputAndroid: {
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#cccccc',
    paddingRight: 30,
  },
});

const pickerWithIconStyles = StyleSheet.create({
  inputIOS: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    paddingRight: 30,
    marginRight: 10
  },
  inputAndroid: {
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#cccccc',
    paddingRight: 30,
    marginRight: 10
  },
});

export default VisitorEntryScreen;
