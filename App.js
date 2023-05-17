import * as SplashScreen from 'expo-splash-screen';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import Home from './src/components/home';
import CourseDetails from './src/components/courseDetails';
import CreateCourse from './src/components/createCourse';

const Stack = createNativeStackNavigator();

const App = () => {
 const [data, setData] = useState([
        {
            title: 'Character Design :Reincarnated as a slime',
            rating: 2,
            body: 'Learn Character Design with example from Reincarnated as a slime anime',
            key: '1',
        },
        {
            title: 'Animation: Demon Slayer',
            rating: 5,
            body: 'Learn animation with Demon Slayer anime as example',
            key: '2',
        },
        {
            title: 'Character Development: Katekyo Hitman Reborn',
            rating: 3,
            body: 'Learn character Development with Hitman Reborn',
            key: '3',
        },
    ]);

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
                        headerRight: () => (
                        <Button
                            title='Create Course'
                            onPress={() => navigation.navigate('Create Course')}
                            />
                        ),
                    })}
                />
                <Stack.Screen name='View Details' component={CourseDetails} />
                <Stack.Screen name='Create Course' children={(props) => <CreateCourse {...props} onAddCourse={addCourse}
                 />} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;