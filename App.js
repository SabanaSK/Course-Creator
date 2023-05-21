import * as SplashScreen from 'expo-splash-screen';
import { View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import Home from './src/components/home';
import CourseDetails from './src/components/courseDetails';
import CreateCourse from './src/components/createCourse';
import Filter from './src/components/filter';
import CourseMoments from './src/components/courseMoments'
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
                }}
            >
                <Stack.Screen
                    name='Home'
                    children={(props) => <Home {...props} data={data} />}
                    options={({ navigation}) => ({
                        title: 'All Course',
                        headerLeft: () => (
                        <Button
                            title='Create Course'
                            onPress={() => navigation.navigate('Create Course')}
                            />
                        ),headerRight: () => (
                        <Button
                            title='Filter' onPress={() => navigation.navigate('Filter')}/>
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