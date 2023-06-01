import React from 'react';
import { FlatList, View } from 'react-native';
import { useState } from 'react';
import CourseItem from '../components/CourseItem';
import styles from '../styles/styles';

const Home = ({ navigation, data }) => {
  return (
    <View style={styles.container}>

      <FlatList
        data={data}
        renderItem={({ item }) => <CourseItem navigation={navigation} item={item} data={data} />}
      />
    </View>
  );
};

export default Home;
