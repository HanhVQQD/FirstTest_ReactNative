import { StyleSheet, Image, View, Text} from 'react-native';

const TopProfile = () => {
  return (
    <View style={styles.topProfile}>
      <Image
        style={styles.imgProfile}
        source={require('../../assets/images/profile.jpg')}
      />
      <Text style={styles.nameClient}>Hi, Ben Clien</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topProfile: {
    flex: 1
  },
  imgProfile: {
    width: 100,
    height: 62,
    borderRadius: 200,
  },
  nameClient: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 26,
    color: "black",
  }
});

export default TopProfile;
