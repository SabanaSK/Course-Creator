import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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

});

export default styles;
