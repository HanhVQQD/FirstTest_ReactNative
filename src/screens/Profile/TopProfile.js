import { StyleSheet, Image, View, Text} from 'react-native';

const TopProfile = () => {
  return (
    <View style={styles.topProfile}>
      <Image
        style={styles.imgProfile}
        source={require('../../assets/images/profile.jpg')}
      />
      <View style={styles.nameClients}>
        <Text style={styles.nameClient}>Hi, Ben Clien</Text>
        <Text style={styles.wellcome}>Welcome to Medtech</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topProfile: {
    flexDirection: 'row',
    marginTop: 15,
  },
  imgProfile: {
    width: 80,
    height: 80,
    borderRadius: 80/2,
  },
  nameClients: {
    marginLeft: 20,
  },
  nameClient: {
    marginTop: 15,
    marginBottom: 5,
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 26,
    color: "black",
  }, 
  wellcome: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
  }
});

export default TopProfile;
