/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { View, Text, FlatList, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import inmobiliariaData from './src/data/inmobiliariaData.json';

const CustomImage = ({ imgUrl, rate }) => (
  <View>
    <ImageBackground source={{ uri: imgUrl }} style={styles.image} imageStyle={{ borderRadius: 20 }}>
      <RateContainer rate={rate} />
    </ImageBackground>
  </View >
)

const RateContainer = ({ rate }) => (
  <View style={styles.rateContainer}>
    <Icon name="star" size={20} color="#efbb31" />
    <Text style={{ color: '#7b622f', marginLeft: 5, fontWeight: 'bold' }}>{rate}</Text>
  </View>
)

const Item = ({ props }) => (
  <View style={styles.item}>
    <View style={styles.itemSection}>
      <CustomImage style={styles.itemSection} imgUrl={props.imgUrl} rate={props.rate} />
    </View>
    <View style={styles.itemSection}>
      <View>
        <Text style={styles.title}>{props.name}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Icon name="location-on" size={20} />
        <Text>{props.address}</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detailItem}>
          <Icon name="bathtub" size={20} />
          <Text style={styles.detailText}>{props.rooms}</Text>
        </View>
        <View style={styles.detailItem}>
          <Icon name="king-bed" size={20} />
          <Text style={styles.detailText}>{props.bathrooms}</Text>
        </View>
        <View style={styles.detailItem}>
          <Icon name="crop-square" size={20} />
          <Text style={styles.detailText}>{props.surface}</Text>
        </View>
      </View>
      <Text style={styles.title}>{props.rentalCostbyMonth}</Text>
      <View style={styles.favoriteIcon}>
        <Icon name="favorite" size={30} color="#00b076" />
      </View>
    </View >
  </View>
)

const App: () => Node = () => {
  const [data] = useState(inmobiliariaData);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item props={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f5fdff',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    borderRadius: 20,
    marginHorizontal: 25,
    marginVertical: 5,
    padding: 2,
  },
  itemSection: {
    flex: 0.5,
    padding: 4,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  image: {
    height: 160,
    width: 150,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbedbb',
    borderRadius: 30,
    marginHorizontal: 30,
    marginTop: '75%',
    padding: 10,
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detailItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 4,
  },
  detailText: {
    fontWeight: 'bold',
    marginLeft: 5
  },
  favoriteIcon: {
    alignSelf: 'flex-end',
  }
})

export default App;

