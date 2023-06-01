import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import styles from '../styles/styles';

const CourseItem = ({ navigation, item, data }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Course Detail', { item, data })}>
      <View style={styles.courseContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.paragraph}>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CourseItem;
