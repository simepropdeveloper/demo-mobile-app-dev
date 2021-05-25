import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BillDetail = ({ bill }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Ionicons name="document" size={25} style={styles.documentIcon} color="#eb3623" />
      <View style={styles.listItem}>
        <View style={styles.upperRow}>
          <Text style={styles.fileName}>{bill.fileName}</Text>
          {
            bill.status === 'Pending'
              ? (
                <View style={styles.yellowTag}>
                  <Text style={styles.yellowTagText}>Pending</Text>
                </View>
              )
              : null
          }
          <Text style={styles.smallText}>{bill.description}</Text>
        </View>
        <View style={styles.lowerRow}>
          <Text style={styles.smallText}>{bill.value}</Text>
          <Text style={styles.smallText}>{bill.time} {bill.date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexGrow: 1,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderColor: '#eeeeee',
    paddingRight: 15,
  },
  upperRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  lowerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  yellowTag: {
    padding: 3,
    paddingHorizontal: 7,
    borderRadius: 30,
    backgroundColor: '#ffd200'
  },
  yellowTagText: {
    fontSize: 10,
    color: 'white'
  },
  documentIcon: {
    paddingHorizontal: 15,
    alignSelf: 'center'
  },
  fileName: {
    fontSize: 12,
    color: '#eb3623'
  },
  smallText: {
    fontSize: 12
  }
});

export default BillDetail;
