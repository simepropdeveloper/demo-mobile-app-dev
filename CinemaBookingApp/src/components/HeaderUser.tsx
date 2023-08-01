import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLOR, FONTFAMILY} from '../themes/themes';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderUser = () => {
  return (
    <View style={styles.containerHeaderUser}>
      <Image
        source={{
          uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png?f=webp',
        }}
        style={[styles.avatarUser]}
      />
      <View style={styles.flex1}>
        <View style={styles.userInfoContainer}>
          <Text style={styles.titleUser}>Hello, Raymond</Text>
          <TouchableOpacity style={styles.notifButton}>
            <Icon name="notifications-outline" color={COLOR.White} size={25} />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitleUser}>
          Want to go see a movie? Get your ticket today
        </Text>
      </View>
    </View>
  );
};

export default HeaderUser;

const styles = StyleSheet.create({
  containerHeaderUser: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },

  avatarUser: {
    width: 70,
    height: 70,
    margin: 10,
    borderRadius: 400 / 2,
  },
  titleUser: {
    color: COLOR.White,
    fontSize: 18,
    fontFamily: FONTFAMILY.poppins_black,
  },
  subtitleUser: {
    color: COLOR.White,
    fontSize: 12,
    fontFamily: FONTFAMILY.poppins_regular,
  },
  flex1: {
    flex: 1,
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notifButton: {
    marginHorizontal: 10,
    marginVertical: 6,
  },
});
