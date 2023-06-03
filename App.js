import { View, Pressable, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import Home from './src/screens/Home';
import CreateCourse from './src/screens/CreateCourse';
import Filter from './src/screens/Filter';
import { courses } from './data/data';
import {CourseDetailsDrawer} from './routes/drawerNavigation';
import { FilterProvider } from './src/context/FilterContext';

const Stack = createNativeStackNavigator();

const App = () => {
 const [filter, setFilter] = useState(null)
 const [data, setData] = useState(courses);

    const addCourse = (course) => {
    setData((prevData) => [
        ...prevData,
        {...course, key: Math.random().toString() },
        ]);
    };

    return (
    <NavigationContainer>
        <FilterProvider>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={screenOptions}
          >
           <Stack.Screen
                name='Drawer'
                component={CourseDetailsDrawer}
           />
            <Stack.Screen
              name="Home"
              children={(props) => <Home {...props} data={data} />}
              options={({ navigation }) => ({
                title: 'All Course',
                headerLeft: () => (
                  <Pressable
                    style={style.button}
                    onPress={() => navigation.navigate('Create Course')}
                  >
                    <Text style={style.buttonText}>Create Course</Text>
                  </Pressable>
                ),
                headerRight: () => (
                  <Pressable
                    style={style.button}
                    onPress={() => navigation.navigate('Filter')}
                  >
                    <Text style={style.buttonText}>Filter</Text>
                  </Pressable>
                ),
              })}
            />
            <Stack.Screen
              name="Create Course"
              children={(props) => <CreateCourse {...props} onAddCourse={addCourse} />}
            />
            <Stack.Screen
              name="Filter"
              children={(props) => <Filter {...props} onApplyFilter={setFilter} />}
            />
          </Stack.Navigator>
        </FilterProvider>
        </NavigationContainer>
      );
    };

    const style = {
      button: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: '#000',
      },
    };

    const screenOptions = {
      headerTintColor: 'black',
      headerTitleAlign: 'center',
      headerStyle: {
        shadowColor: '#000',
        shadowOffset: {
         width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
    };

export default App;