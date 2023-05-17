import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/styles';


const Home = ({ navigation, data }) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('View Details', { item })
                        }
                    >
                        <Text style={styles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            ></FlatList>
        </View>
    );
};

export default Home;
