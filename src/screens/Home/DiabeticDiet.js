
import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import CardCreateCard from './CardDiabeticDiet';

const DiabeticDiet = () => {
  return (
    <View style={styles.cards}>
        <Text style={styles.titleTopBanner}>Diabetic Diet</Text>
        <CardCreateCard/>
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

export default DiabeticDiet;