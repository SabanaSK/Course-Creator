import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const MomentItem = ({ item, isSelected, isVideoPlaying, handlePress, handleLongPress }) => (
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
      <>
        <Text style={styles.h1}>{item.h1}</Text>
        {item.details.map((detailObj, index) => (
          <Text key={index} style={styles.details}>{detailObj.detail}</Text>
        ))}
      </>
    )}
    {isSelected && isVideoPlaying && (
      <WebView
        source={{ uri: item.videoUrl }}
        style={styles.videoPlayer}
      />
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
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
  h1: {
    fontSize: 16,
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

export default MomentItem;
