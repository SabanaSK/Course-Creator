import React from 'react';
import { Text, View } from 'react-native';
import { Directions, FlingGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import styles from '../styles/styles';

const CourseDetails = ({ route, navigation }) => {
  const { item } = route.params;

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
          <Text style={styles.paragraph}>{item.h3}</Text>
          <Text style={styles.paragraph}>{item.body}</Text>
        </View>
      </FlingGestureHandler>
    </GestureHandlerRootView>
  );
};

export default CourseDetails;
