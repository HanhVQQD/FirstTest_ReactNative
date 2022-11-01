import * as React from 'react';
import { FlatList, Text, View, StyleSheet, ScrollView, Image } from 'react-native';

const Item = ({ name, image }) => {
  return (
    <View style={styles.item}>
      <Image style={styles.imageCard} source={{uri: image}}/>
      <Text style={styles.titleCard}>{name}</Text>
    </View>
  );
}
export default function CardCreateCard() {

  const products = [
    {
        id: '1',
        name: 'Coconut',
        image: 'https://i.pinimg.com/236x/66/34/e9/6634e99ee0fa7dd16dba9952ae0d188b.jpg'
    },
    {
        id: '2',
        name: 'Cherry',
        image: 'https://i.pinimg.com/236x/71/7b/ad/717bad809188856cae778a8c23942869.jpg'
    },
    {
        id: '3',
        name: 'Guava',
        image: 'https://i.pinimg.com/236x/46/84/1a/46841a9283d59469e89356c2024f687b.jpg'
    },
    {
        id: '4',
        name: 'Lemon',
        image: 'https://i.pinimg.com/236x/05/80/38/05803879fb95f6f88547b3b333bf44d6.jpg'
    },
    {
        id: '5',
        name: 'Mango',
        image: 'https://i.pinimg.com/236x/00/8a/4b/008a4b6f14ef6a223bc1b77ed9a1bf61.jpg'
    },
    {
        id: '6',
        name: 'Apple',
        image: 'https://i.pinimg.com/236x/ae/8f/64/ae8f64663da204a539f33b7657d09b92.jpg'
    },
    {
        id: '7',
        name: 'Orange',
        image: 'https://i.pinimg.com/236x/c1/23/78/c12378273be5c4502f10d73f943f6584.jpg'
    },
    {
        id: '8',
        name: 'Banana',
        image: 'https://i.pinimg.com/236x/67/ff/04/67ff0431ed4ecbf10ebed90c15eb6d0a.jpg'
    }
];

  const renderItem = ({ item }) => (
    <Item name={item.name} image = {item.image} />
  );

  return (
  <ScrollView>
      <View style={styles.container}>
      <FlatList style={styles.cards} horizontal={true}
        data={products}
        renderItem={renderItem}
      />
    </View>
  </ScrollView>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#F5F7FA',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 4,
    shadowColor: "#F5F7FA",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },

  imageCard: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 20,
  },
  titleCard: {
    color: 'black',
    fontSize: 13,
    fontWeight: '400',
    borderRadius: 20,
    padding: 5,
    lineHeight: 18,
  }
});