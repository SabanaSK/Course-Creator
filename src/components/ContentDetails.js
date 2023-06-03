import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, View, StyleSheet} from 'react-native';

const ContentDetails = ({ contentObj }) => (
  <View style={style.iconContent}>
    <Icon name="check" size={24} color="#FF00DC" />
    <Text style={style.content}>
      {contentObj.content}
    </Text>
  </View>
);


export default ContentDetails;


const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    fontSize: 15,
    paddingLeft: 10,
  },
  iconContent: {
   flexDirection: 'row',
   alignItems: 'center' ,
   paddingTop: 10,
   }

});
