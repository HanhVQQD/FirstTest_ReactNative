import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DiabeticDiet from './DiabeticDiet';
import AllProducts from './AllProducts';
import Banner from './Banner';

const Home = () => {
  return (
    <View>
      <Banner/>
      <View>
        <DiabeticDiet/>
      </View>
      <AllProducts/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
