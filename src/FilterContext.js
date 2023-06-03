import React, { createContext, useState } from 'react';

export const FilterContext = createContext();
import { courses } from '../data/data';

export const FilterProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState(courses);

  return (
    <FilterContext.Provider value={{ filteredData, setFilteredData }}>
      {children}
    </FilterContext.Provider>
  );
};
