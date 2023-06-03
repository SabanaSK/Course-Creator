import { useState, useContext } from 'react';
import { Button, View, Text } from 'react-native';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';

import { courses } from '../../data/data';
import filterList from '../../data/filterList';
import RadioButton from '../components/RadioButton';
import { FilterContext } from '../FilterContext';

const Filter = ({ navigation }) => {
   const [data, setData] = useState(courses);
    const [filterType, setFilterType] = useState(filterList)
    const [selectedOption, setSelectedOption] = useState(filterType[0]); // Set the initial selected option
    const { setFilteredData } = useContext(FilterContext);

const handleSelectionChange = (option) => {
    setSelectedOption(option);
  };

  const applyFilter = () => {
    const filteredData = data.filter(item => {
      return item.type === selectedOption;
    });
    setFilteredData(filteredData);
    navigation.goBack();
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
