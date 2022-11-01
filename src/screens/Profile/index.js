import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopProfile from './TopProfile';
import Icon from 'react-native-vector-icons/AntDesign';

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Text style={styles.Title}>My Profileee</Text>
      <View>
        <TopProfile />
      </View>
      <View style={styles.content}>
        <Icon name="profile" size={18} color="black" />
        <Text style={styles.textProfile}>Private Account</Text>
        <Icon style={styles.rightIcon} name="right" size={16} color="black" />
      </View>
      <View style={styles.content1}>
        <Icon name="fork" size={18} color="black" />
        <Text style={styles.textProfile}>My Consults</Text>
        <Icon style={styles.rightIcon} name="right" size={16} color="black" />
      </View>
      <View style={styles.content1}>
        <Icon name="filetext1" size={18} color="black" />
        <Text style={styles.textProfile}>My orders</Text>
        <Icon style={styles.rightIcon} name="right" size={16} color="black" />
      </View>
      <View style={styles.content1}>
        <Icon name="clockcircleo" size={18} color="black" />
        <Text style={styles.textProfile}>Billing</Text>
        <Icon style={styles.rightIcon} name="right" size={16} color="black" />
      </View>
      <View style={styles.content1}>
        <Icon name="questioncircleo" size={18} color="black" />
        <Text style={styles.textProfile}>Faq</Text>
        <Icon style={styles.rightIcon} name="right" size={16} color="black" />
      </View>
      <View style={styles.content1}>
        <Icon name="setting" size={18} color="black" />
        <Text style={styles.textProfile}>Settings</Text>
        <Icon style={styles.rightIcon} name="right" size={16} color="black" />
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
    color: 'black',
    marginBottom: 26,
    lineHeight: 26,
  },
  
  content: {
    marginTop: 42,
    flexDirection: 'row',
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
  }, 

  textProfile: {
    marginLeft: 27,
    marginTop: -2,
    marginBottom: 20,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: "500",
  },

  content1: {
    marginTop: 18,
    flexDirection: 'row',
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
  }, 

  rightIcon: {
    paddingLeft: 175,
  }
});