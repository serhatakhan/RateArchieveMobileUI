import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
} from 'react-native';
import {height, width} from '../../utils/constants';
import {Input} from '@ui-kitten/components';
import {Colors} from '../../theme/colors';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

const Register = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
  };
  // İlk sayfada Önceki butonunun boş olarak görüntülenmemesi için gizliyoruz
  const firstProgressStep = {
    ...progressStep,
    previousBtnStyle: {
      display: 'none',
    },
  };
  

  return (
    <View style={styles.container}>
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
                value={username}
                onChangeText={value => setUsername(value)}
              />
              <Input
                size="large"
                placeholder="Soyisim"
                placeholderTextColor={'gray'}
                clearButtonMode="while-editing"
                style={styles.inputStyle}
                value={username}
                onChangeText={value => setUsername(value)}
              />
              <Input
                size="large"
                placeholder="E-mail"
                placeholderTextColor={'gray'}
                clearButtonMode="while-editing"
                style={styles.inputStyle}
                value={username}
                onChangeText={value => setUsername(value)}
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
                      color={"gray"}
                      onPress={() => setSecureTextEntry(false)}
                    />
                  ) : (
                    <Eye
                      size="23"
                      color={"gray"}
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
                value={password}
                onChangeText={password => setPassword(password)}
                secureTextEntry={secureTextEntry}
                accessoryRight={() =>
                  secureTextEntry ? (
                    <EyeSlash
                      size="23"
                      color={"gray"}
                      onPress={() => setSecureTextEntry(false)}
                    />
                  ) : (
                    <Eye
                      size="23"
                      color={"gray"}
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
                value={username}
                onChangeText={value => setUsername(value)}
              />
            </ProgressStep>
          </ProgressSteps>
        </View>
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
    marginVertical: 8,
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
  buttonText: {
    color: Colors.WHITE,
    fontSize: 22,
    fontWeight: '600',
  },
});

export default Register;
