import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopProfile from './TopProfile';

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Text style={styles.Title}>My Profileee</Text>
      <View>
        <TopProfile />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    marginLeft: 23,
    marginRight: 31,
    marginTop: 16,
  },
  Title: {
    fontWeight: '700',
    fontSize: 16,
    color: 'red',
    marginBottom: 26,
  },
});