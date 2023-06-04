import React, { useState, useContext } from 'react';
import { Button, TextInput, View, StyleSheet, ScrollView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

import styles from '../styles/styles';
import { FilterContext } from '../context/FilterContext';
import filterList from '../../data/filterList';

const CreateCourse = ({ navigation, onAddCourse }) => {
  const { addCourse, filteredData } = useContext(FilterContext);

  const [filterType] = useState(filterList);
  const [courseData, setCourseData] = useState({
    title: '',
    type: '',
    h2: '',
    contents: [],
    h3: '',
    body: '',
    author: '',
    image: '',
    key: '',
    moments: [],
  });

   const [contentData, setContentData] = useState({
        content: ''
      });

  const [momentData, setMomentData] = useState({
      id: '',
      title: '',
      h1: '',
      details: [],
      videoUrl: ''
    });

  const handleChange = (key, value) => {
    setCourseData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleContentChange = (key, value) => {
        setContentData((prevData) => ({
          ...prevData,
          [key]: value,
        }));
      };

  const handleMomentChange = (key, value) => {
      setMomentData((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    };

    const addContent = () => {
      setCourseData((prevData) => ({
        ...prevData,
        contents: [...prevData.contents, contentData]
      }));
      // Reset contentData after adding
      setContentData({ content: '' });
    };

    const addMoment = () => {
        setCourseData((prevData) => ({
          ...prevData,
          moments: [...prevData.moments, momentData]
        }));
        // Reset momentData after adding
        setMomentData({ id: '', title: '', h1: '', details: [], videoUrl: '' });
      };

  const createCourse = () => {
    onAddCourse(courseData);
    addCourse(courseData);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
    <ScrollView>
      {/* Add fields for the content data */}
            <TextInput
            style={createStyles.input}
              placeholder='Content'
              value={contentData.content}
              onChangeText={(content) => handleContentChange('content', content)}
            />
      <Button title='Add Content' onPress={addContent} />

       {/* Add fields for the moment data */}
      <TextInput
      style={createStyles.input}
        placeholder='Moment Title'
        value={momentData.title}
        onChangeText={(text) => handleMomentChange('title', text)}
      />

      <TextInput
      style={createStyles.input}
        placeholder='H1'
        value={momentData.h1}
        onChangeText={(text) => handleMomentChange('h1', text)}
      />

      <TextInput
      style={createStyles.input}
        placeholder='Moment Video URL'
        value={momentData.videoUrl}
        onChangeText={(text) => handleMomentChange('videoUrl', text)}
      />


      {/* When user finishes entering data for one moment, they can click this button to add it to the moments array */}
      <Button title='Add Moment' onPress={addMoment} />

      {/* Add fields for the Course */}
            <TextInput
              style={createStyles.input}
              placeholder='Title'
              value={courseData.title}
              onChangeText={(text) => handleChange('title', text)}
            />
          <SelectList
              setSelected={(val) => handleChange('type', val)}
              data={filterType}
              save="value"
          />
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
            <TextInput
              style={createStyles.input}
              placeholder='Image URL'
              value={courseData.image}
              onChangeText={(image) => handleChange('image', image)}
            />

      <Button title='Create Course' onPress={createCourse} />
      </ScrollView>
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
