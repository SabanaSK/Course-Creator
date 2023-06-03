import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

import CustomInput from '../components/CustomInput';
import styles from '../styles/styles';

const MainCourseForm = ({ onSubmit }) => {

  const saveMainHandler = (data) => {
    const { cTitle, cList1, cList2, cList3, image, tagInp, description } = data;
    const requiredFields = [cTitle, cList1, cList2, cList3, image, tagInp, description];
    if (requiredFields.some(field => !field)) {
      return setError('All fields must be filled');
    }

    onSubmit(data);
    reset();
  };

  const createCourse = () => {
      onSubmit({ title, rating, body, author });
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

const createStyles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default MainCourseForm;
