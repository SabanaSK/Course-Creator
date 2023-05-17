import { Text, View } from 'react-native';
import styles from '../styles/styles';

const CourseDetails = ({ route }) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            {/* from the navigation props, we can get what we want from the object*/}
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.paragraph}>{item.body}</Text>
            <Text style={styles.paragraph}>{item.rating}</Text>
        </View>
    );
};

export default CourseDetails;
