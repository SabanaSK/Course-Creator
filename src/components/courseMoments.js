import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';


const CourseMoments = ({ route }) => {
  const { moments } = route.params;
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

  const renderMoment = ({ item }) => {
    const isSelected = selectedMomentId === item.id;

    return (
      <TouchableOpacity
        onPress={() => handlePress(item.id)}
        onLongPress={() => handleLongPress(item.id)}
        style={[
          styles.cardContainer,
          isSelected && styles.selectedCard,
        ]}
      >
        <Text style={styles.title}>{item.title}</Text>
        {isSelected && !isVideoPlaying && (
          <Text style={styles.details}>{item.details}</Text>
        )}
        {isSelected && isVideoPlaying && (
          <WebView
            source={{ uri: item.videoUrl }}
            style={styles.videoPlayer}
          />
        )}
      </TouchableOpacity>
    );
  };



  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{`${moments.length} Videos`}</Text>

        <FlatList
          data={moments}
          keyExtractor={(item) => item.id}
          renderItem={renderMoment}
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
  cardContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 20,
    borderRadius: 8,
    paddingVertical: 20,
    shadowColor: '#000000',
       shadowOffset: {
         width: 0,
         height: 2,
       },
       shadowOpacity: 0.2,
       shadowRadius: 8,
       elevation: 6,
     },
  selectedCard: {
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    marginBottom: 8,
  },
    videoPlayer: {
      width: '100%',
      height: 200,
    },
});

export default CourseMoments;
