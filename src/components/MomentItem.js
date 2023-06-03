import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Pressable, Modal, } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MomentItem = ({ item }) => {
    const [selectedMomentId, setSelectedMomentId] = useState(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const isSelected = selectedMomentId === item.id;

const handlePress = (id) => {
  if (selectedMomentId === id) {
    setSelectedMomentId(null);
    setIsVideoPlaying(false);
  } else {
    setSelectedMomentId(id);
    setIsVideoPlaying(false);
  }
};

    const handleLongPress = (id) => {
        setSelectedMomentId(id);
        setIsVideoPlaying(true);
        setModalVisible(true);
    };

    const onStateChange = (state) => {
        if (state === 'ended') {
            setIsVideoPlaying(false);
            setIsUnlocked(true);
        }
    };

    return (
        <Pressable // Replace TouchableOpacity with Pressable
            onPress={() => handlePress(item.id)}
            onLongPress={() => handleLongPress(item.id)}
            style={[
                styles.cardContainer,
                isSelected && styles.selectedCard,
            ]}
        >
            <Modal visible={modalVisible}>
                <View style={styles.modal}>
                    <YoutubePlayer
                        height={300}
                        play={true}
                        videoId={item.videoUrl}
                        onChangeState={onStateChange}
                    />
                    <Pressable
                        onPress={() => setModalVisible(false)}
                        style={styles.cancelButton}
                    >
                        <Text style={styles.buttonText}>
                            {isUnlocked ? 'DONE' : 'CANCEL'}
                        </Text>
                    </Pressable>
                </View>
            </Modal>
            <View style={styles.header}>
                <Text style={styles.title}>{item.title}</Text>
                <FontAwesome
                    name={isUnlocked ? "unlock" : "lock"}
                    size={24}
                    color="black"
                />
            </View>

            {isSelected && !isVideoPlaying && (
                <>
                    <Text style={styles.h1}>{item.h1}</Text>
                    {item.details.map((detailObj, index) => (
                        <Text key={index} style={styles.details}>{detailObj.detail}</Text>
                    ))}
                </>
            )}
        </Pressable>
    );
};

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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default MomentItem;
