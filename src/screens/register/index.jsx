import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  Pressable,
  StatusBar,
} from 'react-native';
import {height, width} from '../../utils/constants';
import {Button, Input} from '@ui-kitten/components';
import {Colors} from '../../theme/colors';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import Animated, {useSharedValue} from 'react-native-reanimated';
import {SIGNIN} from '../../utils/router';
import BottomSheet from './registerBottomSheet';

const Register = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [reference, setReference] = useState('');

  const isOpen = useSharedValue(false); // bottomsheet için

  const progressSteps = {
    borderWidth: 2,
    activeStepIconBorderColor: Colors.BUTTON_COLOR,
    completedProgressBarColor: Colors.BUTTON_COLOR,
    activeStepIconColor: Colors.WHITE,
    activeLabelColor: Colors.BUTTON_COLOR,
    completedStepNumColor: Colors.BUTTON_COLOR,
    completedStepIconColor: Colors.BUTTON_COLOR,
    activeStepNumColor: Colors.BUTTON_COLOR,
    marginBottom: 70,
    topOffset: 20,
  };
  const progressStep = {
    nextBtnText: '>',
    previousBtnText: '<',
    finishBtnText: 'Kayıt Ol',
    nextBtnStyle: styles.button,
    previousBtnStyle: styles.button,
    nextBtnTextStyle: styles.buttonText,
    previousBtnTextStyle: styles.buttonText,
    onSubmit: () => {
      isOpen.value = !isOpen.value;
      console.log(name, surname, mail, password, passwordConfirm, reference);
    },
  };
  // İlk sayfada 'Önceki' butonunun boş olarak görüntülenmemesi için gizliyoruz
  const firstProgressStep = {
    ...progressStep,
    previousBtnStyle: {
      display: 'none',
    },
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.image}>
        <Image
          source={require('../../assets/ai4.jpg')}
          style={{resizeMode: 'contain', width: width, height: height}}
        />
      </View>

      <SafeAreaView style={styles.inputArea}>
        <View
          style={{flex: 0.8, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text}>Kayıt Ol</Text>
        </View>

        <View
          style={{flex: 4, justifyContent: 'center', paddingHorizontal: 16}}>
          <ProgressSteps {...progressSteps}>
            <ProgressStep label="Ad - Soyad" {...firstProgressStep}>
              <Input
                size="large"
                placeholder="İsim"
                placeholderTextColor={'gray'}
                clearButtonMode="while-editing"
                style={styles.inputStyle}
                value={name}
                onChangeText={value => setName(value)}
              />
              <Input
                size="large"
                placeholder="Soyisim"
                placeholderTextColor={'gray'}
                clearButtonMode="while-editing"
                style={styles.inputStyle}
                value={surname}
                onChangeText={value => setSurname(value)}
              />
              <Input
                size="large"
                placeholder="E-mail"
                placeholderTextColor={'gray'}
                clearButtonMode="while-editing"
                style={styles.inputStyle}
                value={mail}
                onChangeText={value => setMail(value)}
              />
            </ProgressStep>
            <ProgressStep label="Şifre" {...progressStep}>
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
                      color={'gray'}
                      onPress={() => setSecureTextEntry(false)}
                    />
                  ) : (
                    <Eye
                      size="23"
                      color={'gray'}
                      onPress={() => setSecureTextEntry(true)}
                    />
                  )
                }
                style={styles.inputStyle}
              />
              <Input
                size="large"
                placeholder="Şifre Doğrula"
                placeholderTextColor={'gray'}
                clearButtonMode="while-editing"
                value={passwordConfirm}
                onChangeText={password => setPasswordConfirm(password)}
                secureTextEntry={secureTextEntry}
                accessoryRight={() =>
                  secureTextEntry ? (
                    <EyeSlash
                      size="23"
                      color={'gray'}
                      onPress={() => setSecureTextEntry(false)}
                    />
                  ) : (
                    <Eye
                      size="23"
                      color={'gray'}
                      onPress={() => setSecureTextEntry(true)}
                    />
                  )
                }
                style={styles.inputStyle}
              />
            </ProgressStep>
            <ProgressStep label="Tamamla" {...progressStep}>
              <Input
                size="large"
                placeholder="Referans"
                placeholderTextColor={'gray'}
                clearButtonMode="while-editing"
                style={styles.inputStyle}
                value={reference}
                onChangeText={value => setReference(value)}
              />
            </ProgressStep>
          </ProgressSteps>
        </View>

        <BottomSheet isOpen={isOpen}>
          <Animated.Text style={{fontSize: 16, fontWeight: '500'}}>
            Kayıt olma işlemi başarılı.
          </Animated.Text>

          <Pressable>
            <Button
              style={styles.signInButton}
              size="medium"
              onPress={() => navigation.navigate(SIGNIN)}>
              {evaProps => (
                <Text
                  {...evaProps}
                  style={{
                    color: Colors.WHITE,
                    fontWeight: '600',
                    fontSize: 17,
                  }}>
                  Giriş Yap
                </Text>
              )}
            </Button>
          </Pressable>
        </BottomSheet>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY2,
  },
  image: {
    flex: 1,
    backgroundColor: Colors.GRAY2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputArea: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 3,
    borderRightWidth: 0.4,
    borderLeftWidth: 0.4,
    borderColor: Colors.BUTTON_COLOR,
  },
  inputStyle: {
    marginVertical: 10,
    borderRadius: 40,
  },
  text: {
    fontSize: 30,
    fontWeight: '600',
    fontVariant: ['small-caps'],
  },
  button: {
    backgroundColor: Colors.BUTTON_COLOR,
    padding: 16,
    paddingHorizontal: 22,
    borderRadius: 100,
  },
  signInButton: {
    backgroundColor: Colors.BUTTON_COLOR,
    paddingHorizontal: 22,
    borderRadius: 100,
    marginVertical: 10,
    borderColor: Colors.BUTTON_COLOR
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 22,
    fontWeight: '600',
  },
});

export default Register;
