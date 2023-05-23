import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Directions, FlingGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../styles/styles';

const CourseDetails = ({ route, navigation }) => {
  const { item } = route.params;

 const [isCollapsed, setIsCollapsed] = useState(true);

  const onSwipeRight = () => {
    // Navigate to CourseMoments screen with moments as parameter
    navigation.navigate('Course Moments', { moments: item.moments });
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <FlingGestureHandler
        direction={Directions.RIGHT}
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.state === 5) {
            onSwipeRight();
          }
        }}
      >
        <View style={styles.container}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.paragraph}>{item.rating}</Text>
          <Text style={styles.paragraph}>{item.h2}</Text>
          <Text style={styles.paragraph}>{item.author}</Text>
   <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)} style={styles.header}>
               <Text style={styles.paragraph}>{item.h3}</Text>
               <Icon name={isCollapsed ? "chevron-down-outline" : "chevron-up-outline"} size={24} />
             </TouchableOpacity>
             <Collapsible collapsed={isCollapsed}>
               <Text style={styles.paragraph}>{item.body}</Text>
             </Collapsible>
        </View>
      </FlingGestureHandler>
    </GestureHandlerRootView>
  );
};

export default CourseDetails;
