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
import {height, width} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import LaunchButton from '../../components/launchButton';
import { REGISTER, SIGNIN } from '../../utils/router';

const Launch = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/ai8.jpg')}
        style={styles.imageBackground}
        >

        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/logo.png')}
            style={{
              width: width - 50,
              height: height * 0.44,
              resizeMode: "contain"
            }} />
        </View>

        <View style={styles.buttonWrapper}>
          <LaunchButton title="GİRİŞ YAP" style={{backgroundColor: Colors.ORANGE, borderRadius: 100}} onPress={()=> navigation.navigate(SIGNIN)} />
          <Text style={{padding: 5, marginBottom: 16, color: 'white', fontWeight: "600"}}>
            Zaten hesabım var
          </Text>

          <LaunchButton
            title="KAYIT OL"
            style={{
              backgroundColor: 'white',
              borderRadius: 100,
              color: Colors.BUTTON_COLOR,
            }}
            onPress={()=> navigation.navigate(REGISTER)}
          />
          <Text style={{padding: 5, color: 'white', fontWeight: "600"}}>
            Hesabınız yok mu?{' '}
            <Text style={{textDecorationLine: 'underline', fontWeight: "700"}}>Kaydolun</Text>{' '}
          </Text>
        </View>

        <View style={styles.social}>
            <TouchableOpacity style={styles.touchableSocial}>
                <Image source={require('../../assets/telegram.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableSocial}>
                <Image source={require('../../assets/wp.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableSocial}>
                <Image source={require('../../assets/x.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableSocial}>
                <Image source={require('../../assets/youtube.png')} />
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    flex: 2,
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  social: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: 'center',    
  },
  touchableSocial: {
    borderWidth: 0.2,
    borderColor: 'gray',
    borderRadius: 50, 
    padding: 6
  }
});

export default Launch;
