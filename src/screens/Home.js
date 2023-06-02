import React from 'react';
import { FlatList, View } from 'react-native';
import { useState } from 'react';

import WelcomeCard from '../components/WelcomeCard';
import CourseItem from '../components/CourseItem';
import styles from '../styles/styles';

const Home = ({ data }) => {
  return (
  <View style={styles.container} >
  <WelcomeCard />
    <View >
      <FlatList
        data={data}
        renderItem={({ item }) => <CourseItem item={item} />}
      />
    </View>
    </View>
  );
};

export default Home;
