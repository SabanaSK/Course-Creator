import React, { useState, useContext } from 'react';
import { Button, TextInput, View, StyleSheet, Picker  } from 'react-native';

import styles from '../styles/styles';
import { FilterContext } from '../context/FilterContext';

const CreateCourse = ({ navigation, onAddCourse }) => {
  const [courseData, setCourseData] = useState({
    title: '',
    type: '',
    h2: '',
    contents: [],
    h3: '',
    body: '',
    author: '',
    image: null,
    key: '',
    moments: [],
  });

  const { addCourse, filterType } = useContext(FilterContext);

  const handleChange = (key, value) => {
    setCourseData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const createCourse = () => {
    onAddCourse(courseData);
    addCourse(courseData);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={createStyles.input}
        placeholder='Title'
        value={courseData.title}
        onChangeText={(text) => handleChange('title', text)}
      />
      <Picker
              style={createStyles.picker}
              selectedValue={selectedType}
              onValueChange={(itemValue) => setSelectedType(itemValue)}
            >
              <Picker.Item label="Select Type" value="" />
              {filterType.map((type, index) => (
              <Picker.Item label={type} value={type} />
                ))}
            </Picker>
      {/* Render input fields for other properties */}
      <TextInput
        style={createStyles.input}
        placeholder='Subtitle'
        value={courseData.h2}
        onChangeText={(text) => handleChange('h2', text)}
      />
      <TextInput
        style={createStyles.input}
        placeholder='Course Description'
        value={courseData.h3}
        onChangeText={(text) => handleChange('h3', text)}
      />
      <TextInput
        style={createStyles.input}
        placeholder='Body'
        value={courseData.body}
        onChangeText={(text) => handleChange('body', text)}
      />
      <TextInput
        style={createStyles.input}
        placeholder='Author'
        value={courseData.author}
        onChangeText={(text) => handleChange('author', text)}
      />

      {/* Add additional TextInput components for other properties like 'h2', 'h3', 'body', 'author' */}
      {/* Example: */}
      {/* <TextInput
        style={createStyles.input}
        placeholder='Subtitle'
        value={courseData.h2}
        onChangeText={(text) => handleChange('h2', text)}
      /> */}
      {/* Continue adding input fields for the remaining properties */}

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
