import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

import styles from '../styles/styles';


const CreateCourse = ({ navigation, onAddCourse }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const createCourse = () => {
    onAddCourse({ title, rating, body, author });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={createStyles.input}
        placeholder='Title'
        value={title}
        onChangeText={setTitle}
      />
       <TextInput
        style={createStyles.input}
        placeholder='Body'
        value={body}
        onChangeText={setBody}
      />
      <TextInput
        style={createStyles.input}
        placeholder='Rating'
        value={rating}
        onChangeText={setRating}
      />
  <TextInput
        style={createStyles.input}
        placeholder='Author'
        value={author}
        onChangeText={setAuthor}
      />
      <Button title='Create Course' onPress={createCourse} />
    </View>
  );
};

export default CreateCourse;

const createStyles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});
