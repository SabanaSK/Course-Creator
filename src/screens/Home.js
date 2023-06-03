import React from 'react';
import { FlatList, View } from 'react-native';
import { useState, useContext } from 'react';

import WelcomeCard from '../components/WelcomeCard';
import CourseItem from '../components/CourseItem';
import styles from '../styles/styles';
import { FilterContext } from '../context/FilterContext';

const Home = ({ data }) => {
  const { filteredData } = useContext(FilterContext);

  return (
      <View style={styles.container} >
        <WelcomeCard />
        <View style={styles.listContainer}>
          <FlatList
            data={filteredData}
            renderItem={({ item }) => <CourseItem item={item} />}
             contentContainerStyle={styles.listContent}

          />
        </View>
       </View>
  );
};

export default Home;
