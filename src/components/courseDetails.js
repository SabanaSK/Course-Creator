import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList,Image } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Directions, FlingGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../styles/styles';

const CourseDetails = ({ route, navigation}) => {
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
         <View style={style.container} >
        <FlatList
                    data={[item]} // Wrap the item in an array to pass it as a data source
                    keyExtractor={(item) => item.key} // Make sure to specify a unique key for the item
                    renderItem={({ item }) => (
                      <>
                        <Image source={item.image} style={style.image} />
                        <Text style={styles.titleText}>{item.title}</Text>
                        <Text style={styles.paragraph}>{item.rating}</Text>
                        <Text style={styles.paragraph}>{item.h2}</Text>
                        <Text style={styles.paragraph}>{item.author}</Text>
                        <TouchableOpacity
                          onPress={() => setIsCollapsed(!isCollapsed)}
                          style={styles.header}
                        >
                          <Text style={styles.paragraph}>{item.h3}</Text>
                          <Icon
                            name={isCollapsed ? 'chevron-down-outline' : 'chevron-up-outline'}
                            size={24}
                          />
                        </TouchableOpacity>
                        <Collapsible collapsed={isCollapsed}>
                          <Text style={styles.paragraph}>{item.body}</Text>
                        </Collapsible>
                      </>
                    )}
                  />
         </View>
       </FlingGestureHandler>
     </GestureHandlerRootView>
   );
 };

export default CourseDetails;

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,},
    image: {
    width: 350,
    height: 350,
    }

});

