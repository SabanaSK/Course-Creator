import { useState } from 'react';
import { Button, View, Text } from 'react-native';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';

import { courses } from '../../data/data';
import filterList from '../../data/filterList';
import RadioButton from '../components/RadioButton';

const Filter = ({ navigation }) => {
   const [data, setData] = useState(courses);
    const [filterType, setFilterType] = useState(filterList)
    const [selectedOption, setSelectedOption] = useState(filterType[0]); // Set the initial selected option

const handleSelectionChange = (option) => {
    setSelectedOption(option);
  };

  const applyFilter = () => {
    const filteredData = data.filter(item => {
      return item.type === selectedOption;
    });
    navigation.navigate('Home', { data: filteredData });
  };


  return (
    <View>
      {filterType.map((type, index) => (
        <RadioButton
          option={type}
          selectedOption={selectedOption}
          onSelectionChange={handleSelectionChange}
        />
      ))}

      <Button title='Apply Filter' onPress={applyFilter} />
    </View>
  );
};

export default Filter;
