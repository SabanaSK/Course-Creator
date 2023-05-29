import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import { useState } from 'react';

import styles from '../styles/styles';


const Home = ({ navigation, data }) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Course Detail', { item, data })
                        }
                    >
                  <View style={styles.courseContainer}>
                   <Image source={item.image} style={styles.image} />
                        <Text style={styles.titleText}>{item.title}</Text>
                        <Text style={styles.paragraph}>{item.author}</Text>

                        </View>
                    </TouchableOpacity>
                )}

            ></FlatList>
        </View>
    );
};

export default Home;
