import { useLayoutEffect } from 'react';
import { useNavigation, useRoute} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions, View, ScrollView } from 'react-native';

import CourseDetails from '../src/screens/CourseDetails';
import MomentItem from '../src/components/MomentItem';

const Drawer = createDrawerNavigator();

const DrawerItems = ({ item }) => {
    return (
        <View>
        <ScrollView>
            {item.moments.map((i) => (
                <MomentItem item={i} key={i.id} />
            ))}
        </ScrollView>
        </View>
    );
};

export const CourseDetailsDrawer = () => {
const route = useRoute();
const navigation = useNavigation();
const { item } = route.params.params;

   useLayoutEffect(() => {
       navigation.setOptions({ title: 'Course Details' });
   }, []);

  return (
    <Drawer.Navigator
     drawerContent={(props) => <DrawerItems {...props} item={item} />}
    screenOptions={{
                    drawerStyle: {
                        width: Dimensions.get('screen').width,
                    },
                    headerShown: false,
                }}
    >
      <Drawer.Screen name="Course Details" component={CourseDetails} />
    </Drawer.Navigator>
  );
};


