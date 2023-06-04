import React, { useState, useContext } from 'react';
import { Button, TextInput, View, StyleSheet, ScrollView, Text } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

import styles from '../styles/styles';
import { FilterContext } from '../context/FilterContext';
import filterList from '../../data/filterList';

const CreateCourse = ({ navigation, onAddCourse }) => {
  const { addCourse, filteredData } = useContext(FilterContext);
  const [filterType] = useState(filterList);
   const [contentCount, setContentCount] = useState(0);
    const [momentCount, setMomentCount] = useState(0);
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
      setContentData({ content: '' });
        setContentCount((prevCount) => prevCount + 1);
    };

    const addMoment = () => {
        setCourseData((prevData) => ({
          ...prevData,
          moments: [...prevData.moments, momentData]
        }));
        setMomentData({ id: '', title: '', h1: '', details: [], videoUrl: '' });
          setMomentCount((prevCount) => prevCount + 1);
      };

  const createCourse = () => {
    onAddCourse(courseData);
    addCourse(courseData);
    navigation.goBack();
  };

 let notificationText = 'No content added';
  if (contentCount === 1) {
    notificationText = 'One content is added';
  } else if (contentCount > 1) {
    notificationText = `${contentCount} contents are added`;
  }

  let momentNotificationText = 'No moments added';
  if (momentCount === 1) {
    momentNotificationText = 'One moment is added';
  } else if (momentCount > 1) {
    momentNotificationText = `${momentCount} moments are added`;
  }

  return (
    <View style={styles.container}>
    <ScrollView>

            <TextInput
            style={createStyles.input}
              placeholder='Content'
              value={contentData.content}
              onChangeText={(content) => handleContentChange('content', content)}
            />
      <Button title='Add Content' onPress={addContent} style={createStyles.button}/>

<Text style={createStyles.notification}>{notificationText}</Text>

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

      <Button title='Add Moment' onPress={addMoment}  style={createStyles.button}/>
 <Text style={createStyles.notification}>{momentNotificationText}</Text>

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

      <Button title='Create Course' onPress={createCourse} style={createStyles.button} />
      </ScrollView>
    </View>
  );
};

export default CreateCourse;

const createStyles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
  },
    button: {
        marginBottom: 20,
        marginTop: 20,
    },
     notification: {
        color: 'green',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
      },
});
