import CourseDetailsContent from '../components/CourseDetailsContent';

const CourseDetails = ({ route, navigation }) => {
 const { item } = route.params;
 const onSwipeRight = () => {
    navigation.openDrawer();
  };

   return <CourseDetailsContent item={item} onSwipeRight={onSwipeRight} />;
 };


export default CourseDetails;
