import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, SafeAreaView} from 'react-native';
import {height, width} from '../../utils/constants';
import {Button, Input} from '@ui-kitten/components';
import {Colors} from '../../theme/colors';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {REGISTER} from '../../utils/router';

const SignIn = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={require('../../assets/ai1.jpg')}
          style={{resizeMode: 'contain', width: width, height: height}}
        />
      </View>

      <SafeAreaView style={styles.inputArea}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text}>Giriş Yap</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 16}}>
          <Input
            size="large"
            placeholder="Kullanıcı Adı"
            placeholderTextColor={'gray'}
            clearButtonMode="while-editing"
            style={styles.inputStyle}
            value={username}
            onChangeText={value => setUsername(value)}
          />
          <Input
            size="large"
            placeholder="Şifre"
            placeholderTextColor={'gray'}
            clearButtonMode="while-editing"
            value={password}
            onChangeText={password => setPassword(password)}
            secureTextEntry={secureTextEntry}
            accessoryRight={() =>
              secureTextEntry ? (
                <EyeSlash
                  size="23"
                  color={"gray"}
                  onPress={() => setSecureTextEntry(false)}/>
              ) : (
                <Eye
                  size="23"
                  color={"gray"}
                  onPress={() => setSecureTextEntry(true)}/>)}
            style={styles.inputStyle}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            appearance="outline"
            size="large"
            onPress={() => navigation.navigate(REGISTER)}>
              {evaProps => <Text {...evaProps} style={{color: Colors.BUTTON_COLOR, fontWeight: "600", fontSize: 17}}>Kaydol</Text>}
          </Button>
          <View style={styles.line}></View>
          <Button style={[styles.button, styles.signInButton]} size="large">
            {evaProps => <Text {...evaProps} style={{color: Colors.WHITE, fontWeight: "600", fontSize: 17}}>Giriş Yap</Text>}
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Colors.GRAY2},
  image: {
    flex: 1,
    backgroundColor: Colors.GRAY2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputArea: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 3,
    borderRightWidth: 0.4,
    borderLeftWidth: 0.4,
    borderColor: Colors.BUTTON_COLOR,
  },
  inputStyle: {
    marginVertical: 8,
    borderRadius: 40,
  },
  text: {
    fontSize: 30,
    fontWeight: '600',
    fontVariant: ['small-caps'],
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    borderRadius: 100,
    width: 150,
    borderWidth: 2,
    borderColor: Colors.BUTTON_COLOR
  },
  signInButton: {
    backgroundColor: Colors.BUTTON_COLOR,
    borderColor: Colors.BUTTON_COLOR,
  },
  line: {
    width: 2.5,
    height: height * 0.07,
    borderRadius: 100,
    backgroundColor: '#f4f4f4',
  },
});

export default SignIn;
