import React, { createContext, useState } from 'react';

export const FilterContext = createContext();
import { courses } from '../../data/data';

export const FilterProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState(courses);
  const [originData, setOriginData] = useState(courses);

  const addCourse = (course) => {
    setOriginData((prev) => [...prev, course]);
    setFilteredData((prev) => [...prev, course]);
  };

   const value = {
      filteredData,
      setFilteredData,
      addCourse,
      originData
   };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};
