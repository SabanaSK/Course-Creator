import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Directions, FlingGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from '../styles/styles';

const CourseDetailsContent = ({ onSwipeRight } ) => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params;
    const scrollRef = useRef();
    const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FlingGestureHandler
        direction={Directions.RIGHT}
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.state === 5) {
            onSwipeRight();
          }
        }}
      >
        <View style={style.container}>
          <FlatList
            data={[item]}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <>
                <Image source={item.image} style={style.image} />
                <Text style={style.titleText}>{item.title}</Text>
                <Text style={style.h2}>{item.h2}</Text>
                {item.contents.map((contentObj, index) => (
                  <Text key={index} style={style.content}>
                    {contentObj.content}
                  </Text>
                ))}
                <TouchableOpacity
                  onPress={() => setIsCollapsed(!isCollapsed)}
                  style={styles.header}
                >
                  <Text style={style.h3}>{item.h3}</Text>
                  <Icon
                    name={isCollapsed ? 'chevron-down-outline' : 'chevron-up-outline'}
                    size={24}
                  />
                </TouchableOpacity>
                <Collapsible collapsed={isCollapsed}>
                  <Text style={style.paragraph}>{item.body}</Text>
                </Collapsible>
              </>
            )}
          />
        </View>
      </FlingGestureHandler>
    </GestureHandlerRootView>
  );
};

export default CourseDetailsContent;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 15,
  },
  titleText: {
    fontSize: 30,
    marginTop: 30,
  },
  h2: {
    fontSize: 20,
    marginTop: 20,
  },
  h3: {
    fontSize: 17,
    marginTop: 20,
  },
  paragraph: {
    fontSize: 15,
    marginTop: 5,
  },
});
