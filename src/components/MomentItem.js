import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Pressable, Modal, } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        <Pressable
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
                        <Text style={styles.textButton}>
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
                  <View style={styles.iconContent} key={index}>
                    <Icon name="check" size={24} color="#FF00DC" />
                    <Text style={styles.details}>{detailObj.detail}</Text>
                  </View>
                ))}
              </>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        padding: 16,
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
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
        marginLeft: 8,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconContent: {
       flexDirection: 'row',
       alignItems: 'center' ,
       paddingTop: 10,
       },
        cancelButton: {
                backgroundColor: '#FF00DC',
               width: 150,
               padding: 10,
               alignItems: 'center',
               alignSelf: 'center',
                borderRadius: 10,
           },
           textButton: {
               fontSize: 25,
                fontWeight: 'bold',
               color: 'white',
           },
});

export default MomentItem;
