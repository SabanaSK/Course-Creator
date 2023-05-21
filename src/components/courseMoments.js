// CourseMoments.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const CourseMoments = ({ route }) => {
  const { moments } = route.params;

  return (
    <View>
      <FlatList
        data={moments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            {/* Render other moment details */}
          </View>
        )}
      />
    </View>
  );
};

export default CourseMoments;
