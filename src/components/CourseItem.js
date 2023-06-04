import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

const CourseItem = ({ item }) => {
        const navigation = useNavigation();

  return (
 <TouchableOpacity onPress={() => navigation.navigate('Drawer', {
     screen: 'Course Details',
     params: { item },
 })}
 >
      <View style={styles.courseContainer}>
        <Image
          source={typeof item.image === 'string' ? { uri: item.image } : item.image}
          style={styles.image}
        />
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.paragraph}>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CourseItem;
