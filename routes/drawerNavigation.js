import { useLayoutEffect } from 'react';
import { useNavigation, useRoute} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';

import CourseDetails from '../src/screens/CourseDetails';
import CourseMoments from '../src/screens/CourseMoments';

const Drawer = createDrawerNavigator();

export const CourseDetailsDrawer = () => {
const route = useRoute();
const navigation = useNavigation();
const { item } = route.params;

   useLayoutEffect(() => {
       navigation.setOptions({ title: 'Course Details' });
   }, []);

  return (
    <Drawer.Navigator
    screenOptions={{
    headerShown: false,
    }}
    >
      <Drawer.Screen name="Course Details" component={CourseDetails} />
      <Drawer.Screen name="Course Moments" component={CourseMoments} />
    </Drawer.Navigator>
  );
};


