
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Banner = () => {
  return (
    <View style={styles.banner}>
        <View>
          <Icon name="rocket" size={30} color="#900" />
            <Text style={styles.titleTopBanner}>Diabetes Care</Text>
        </View>
        <View>
            <Image style={styles.imageBig} source = {require('../../assets/images/Hinh1.png')} />
            <View style={styles.textOnImage}>
              <Text style={styles.textOnImageTitle}>Save extra on every order</Text>
              <Text>Etiam mollis metus non faucibus sollicitudin. </Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginLeft: 16,
  },

  topBanner: {
    justifyContent: "center",
    textAlign: "center",
    display: "flex", 
  },

  titleTopBanner: {
    fontSize: 16,
    color: "red",
  },
  
  imageBig: {
    width: 361,
    height: 203,
    marginTop: 14,
  },

  textOnImage: {
    position: 'absolute',
    top: 50,
    left: 40,
    width: 150,
  }, 

  textOnImageTitle: {
    fontSize: 18,
    color: "#1987FB",
    fontWeight: "700",
  },

  textOnImageP: {
    fontSize: 12,
    color: "#1987FB",
    fontWeight: "300",
  },
});

export default Banner;