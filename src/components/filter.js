import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';

const Filter = ({ navigation, onApplyFilter }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [rating, setRating] = useState('');

  const applyFilter = () => {
    onApplyFilter({ title, body, rating });
    navigation.goBack();
  };

  return (
    <View>
      <CircleCheckBox
            checked={title}
             onToggle={setTitle}
             labelPosition={LABEL_POSITION.RIGHT}
             label='Title'
          />
      <CircleCheckBox
                  checked={body}
                   onToggle={setBody}
                   labelPosition={LABEL_POSITION.RIGHT}
                   label='Body'
                />
      <CircleCheckBox
                 checked={rating}
                  onToggle={setRating}
                  labelPosition={LABEL_POSITION.RIGHT}
                  label='Rating'
               />
      <Button title='Apply Filter' onPress={applyFilter} />
    </View>
  );
};

export default Filter;
