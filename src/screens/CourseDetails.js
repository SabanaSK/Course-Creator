import React from 'react';
import CourseDetailsContent from '../components/CourseDetailsContent';

const CourseDetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;

  const onSwipeRight = () => {
    navigation.navigate('Course Moments', { moments: item.moments });
  };

  return <CourseDetailsContent item={item} onSwipeRight={onSwipeRight} />;
};

export default CourseDetailsScreen;
