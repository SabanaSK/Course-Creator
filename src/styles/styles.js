import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 18,
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    viewPager: {
            flex: 1,
            width: '100%',
            height: 200,
        },
        pageStyle: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        image: {
            width: 250,
            height: 250,
            resizeMode: 'contain',
            borderRadius: 10,
        },
        courseContainer: {
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#ffff',
          borderRadius: 10,
          marginBottom: 40,
          paddingVertical: 20,
        },


});

export default styles;
