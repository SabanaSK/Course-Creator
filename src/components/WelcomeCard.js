import { Image, StyleSheet, View, Text } from 'react-native';

const WelcomeCard = () => {
   return (
           <View style={style.container}>
                <Image
                   source={require('../../assets/WelcomeCard.png')}
                   style={style.image}
               />
           <Text style={style.text}>Welcome to Course Creator!</Text>
       </View>
   );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
   text: {
   fontSize: 16,
   paddingTop: 10,
   paddingBottom:10,

   },
   image:{
    height: 310,
    resizeMode: 'contain',
   }
   });

export default WelcomeCard;



