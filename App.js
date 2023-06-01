import * as SplashScreen from 'expo-splash-screen';
import { View, TouchableOpacity, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import Home from './src/screens/Home';
import CourseDetails from './src/screens/CourseDetails';
import CreateCourse from './src/screens/CreateCourse';
import Filter from './src/screens/Filter';
import CourseMoments from './src/screens/CourseMoments'
import { courses } from './src/data';


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
         <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerStyle: {
                        shadowColor: '#000',
                        shadowOffset:{
                        width:0,
                        height:2
                        },
                        shadowOpacity:0.25,
                        shadowRadius:3.84,
                        elevation:5,
                    },
                    headerTintColor: 'black',
                    headerTitleAlign: 'center',
                }}
            >
                <Stack.Screen
                    name='Home'
                    children={(props) => <Home {...props} data={data} />}
                    options={({ navigation}) => ({
                        title: 'All Course',
                        headerLeft: () => (
                       <TouchableOpacity
                                      style={{ backgroundColor: '#FFFFFF', padding: 10, borderRadius: 5 }}
                                      onPress={() => navigation.navigate('Create Course')}
                                  >
                                      <Text style={{ color: '#000' }}>Create Course</Text>
                                  </TouchableOpacity>
                        ),headerRight: () => (
                        <TouchableOpacity
                                       style={{ backgroundColor: '#FFFFFF', padding: 10, borderRadius: 5 }}
                                       onPress={() => navigation.navigate('Filter')}
                                   >
                                       <Text style={{ color: '#000' }}>Filter</Text>
                                   </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen name='Course Detail' component={CourseDetails} />
                <Stack.Screen name='Create Course' children={(props) => <CreateCourse {...props} onAddCourse={addCourse}
                 />} />
                  <Stack.Screen name='Filter' children={(props) => <Filter {...props} onApplyFilter={setFilter}/>} />

           <Stack.Screen name='Course Moments' component={CourseMoments} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;