import * as React from 'react';
import { FlatList, Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const Item = ({ name, image, price }) =>
{
    return (
        <View style={styles.item}>
            <Image style={styles.imageCard} source={{ uri: image }} />
            <Text style={styles.titleCard}>{name}</Text>
            <Text>{price}</Text>
        </View>
    );
}
const CardAllProducts = ({navigation}) =>
{
    const products = [
        {
            id: '1',
            name: 'Lemon',
            image: 'https://i.pinimg.com/236x/05/80/38/05803879fb95f6f88547b3b333bf44d6.jpg',
            price: 12
        },
        {
            id: '2',
            name: 'Mango',
            image: 'https://i.pinimg.com/236x/00/8a/4b/008a4b6f14ef6a223bc1b77ed9a1bf61.jpg',
            price: 12
        },
        {
            id: '3',
            name: 'Apple',
            image: 'https://i.pinimg.com/236x/ae/8f/64/ae8f64663da204a539f33b7657d09b92.jpg',
            price: 12
        },
        {
            id: '4',
            name: 'Orange',
            image: 'https://i.pinimg.com/236x/c1/23/78/c12378273be5c4502f10d73f943f6584.jpg',
            price: 12
        },
        {
            id: '5',
            name: 'Banana',
            image: 'https://i.pinimg.com/236x/67/ff/04/67ff0431ed4ecbf10ebed90c15eb6d0a.jpg',
            price: 12
        },
        {
            id: '6',
            name: 'Coconut',
            image: 'https://i.pinimg.com/236x/66/34/e9/6634e99ee0fa7dd16dba9952ae0d188b.jpg',
            price: 12
        },
        {
            id: '7',
            name: 'Cherry',
            image: 'https://i.pinimg.com/236x/71/7b/ad/717bad809188856cae778a8c23942869.jpg',
            price: 12
        },
        {
            id: '8',
            name: 'Guava',
            image: 'https://i.pinimg.com/236x/46/84/1a/46841a9283d59469e89356c2024f687b.jpg',
            price: 12
        },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity
        onPress={() => {
            navigation.navigate('ProductDetail', {headerTitle: 'Product 2'});
          }}
            style={styles.item}>
            <Image style={styles.imageCard} source={{ uri: item.image }} />
            <Text style={styles.titleCard}>{item?.name}</Text>
            <Text style={styles.priceCard}>${item?.price}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.cards}>
            <FlatList style={styles.card}
                numColumns={2}
                data={products}
                renderItem={renderItem}
            />
        </View>
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
        width: 150,
        height: 150,
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
    },
    scrollView: {
        marginHorizontal: 20,
    },
    cards: {
        alignItems: 'center',
    },
    priceCard: {
        
    }
});

export default CardAllProducts;