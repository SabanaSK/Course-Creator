import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MomentItem from '../components/MomentItem';

const CourseMoments = ({ route }) => {
  const { item } = route.params;
  const [selectedMomentId, setSelectedMomentId] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePress = (id) => {
    setSelectedMomentId(id);
    setIsVideoPlaying(false);
  };

  const handleLongPress = (id) => {
    setSelectedMomentId(id);
    setIsVideoPlaying(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{`${moments.length} Videos`}</Text>

      <FlatList
        data={moments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MomentItem
            item={item}
            isSelected={selectedMomentId === item.id}
            isVideoPlaying={isVideoPlaying}
            handlePress={handlePress}
            handleLongPress={handleLongPress}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 40,
  },
});

export default CourseMoments;
