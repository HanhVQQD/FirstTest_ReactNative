
import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import CardAllProducts from './CardAllProduct';
import CardCreateCard from './CardDiabeticDiet';
// import React, {useEffect} from 'react';

const AllProducts = ({route, navigation}) => {
  return (
    <View style={styles.cards}>
        <Text style={styles.titleTopBanner}>All Products</Text>
        <CardAllProducts/>
    </View>
  );
}

const styles = StyleSheet.create({
  cards: {
    marginLeft: 14,
    marginTop: 10,
  },
  titleTopBanner: {
    fontSize: 16,
    color: "#090F47",
    fontWeight: "600",
    lineHeight: 20.6,
  },
});

export default AllProducts;