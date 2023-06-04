import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const RadioButton = ({ id, option, selectedOption, onSelectionChange }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => onSelectionChange(option)}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 10,
              borderWidth: 1,
                borderColor: '#000',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {option === selectedOption && (
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  backgroundColor: 'blue',
                }}
              />
            )}
          </View>
          <Text style={{ marginLeft: 10 }}>{option}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};



export default RadioButton;
