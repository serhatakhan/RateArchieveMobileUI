import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { width } from '../../utils/constants';

const SignIn = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/ciro1.png')}
          style={{resizeMode: 'contain', flex: 1, width: width-90}}
        />
      </View>

      <View style={{flex: 1.25}}>
        {/* <Image source={require('../../assets/ciro.jpg')} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: 'auto',
    height: 'auto',
  },
  imageWrapper: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15.65,
    elevation: 6,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  buttonWrapper: {
    flex: 1,
  },
  touchableSocial: {
    borderWidth: 0.2,
    borderColor: 'gray',
    borderRadius: 50,
    padding: 6,
  },
});

export default SignIn;

{
  /* <Image
source={require('../../assets/ciro.jpg')}
style={{
  width: width,
  height: height * 0.45,
  borderBottomLeftRadius: 40,
  borderBottomRightRadius: 40,
}}
/> */
}
