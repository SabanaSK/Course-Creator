import CourseDetailsContent from '../components/CourseDetailsContent';

const CourseDetails = ({ route, navigation }) => {
 const { item } = route.params;
 const onSwipeRight = () => {
    navigation.openDrawer();
  };
const onSwipeLeft = () => {
    navigation.navigate('Course Moments', {moments: item.moments});
  };
   return <CourseDetailsContent item={item} onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft}/>;
 };


export default CourseDetails;
