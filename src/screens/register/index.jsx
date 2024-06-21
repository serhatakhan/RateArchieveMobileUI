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
import {Formik} from 'formik';
import RegisterSchema from './registerSchema';

const Register = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntry2, setSecureTextEntry2] = useState(true);

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

  const progressStep = handleSubmit => ({
    nextBtnText: '>',
    previousBtnText: '<',
    finishBtnText: 'Kayıt Ol',
    nextBtnStyle: styles.button,
    previousBtnStyle: styles.button,
    nextBtnTextStyle: styles.buttonText,
    previousBtnTextStyle: styles.buttonText,
    onSubmit: handleSubmit,
  });
  // * Formik'in handleSubmit fonksiyonunu, ProgressStep bileşeninin onSubmit özelliği
  // içinde kullanmak için, handleSubmit fonksiyonunu Formik bileşeninin içinde tanımlanan
  // render fonksiyonundan dışarıya çıkarttık ve sonra bu fonksiyonu ProgressStep
  // bileşenine ilettik. Böylece handleSubmit fonksiyonunu ProgressStep bileşeninin onSubmit özelliğine geçiriyoruz. Form son adıma geldiğinde ve kullanıcı "Kayıt Ol" butonuna bastığında handleSubmit fonksiyonu çağrılacak ve form verileri gönderilecektir.

  // İlk sayfada 'Önceki' butonunun boş olarak görüntülenmemesi için gizliyoruz
  const firstProgressStep = handleSubmit => ({
    ...progressStep(handleSubmit),
    previousBtnStyle: {
      display: 'none',
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
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
          {/* Formik bileşeni, çocuk bileşen olarak bir fonksiyon alır. Bu fonksiyon, formun kontrolü için gerekli yardımcı fonksiyonlar ve form değerlerini içeren bir nesne. */}
          <Formik
            initialValues={{
              name: '',
              surname: '',
              email: '',
              password: '',
              passwordConfirm: '',
              reference: '',
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values, {resetForm}) => {
              // Form gönderildiğinde yapılacak işlemler
              isOpen.value = !isOpen.value;
              resetForm();
              console.log(values);
            }}>
            {({handleChange, handleSubmit, handleBlur, values, errors, touched}) => (
              <ProgressSteps {...progressSteps}>
                <ProgressStep label="Ad - Soyad" {...firstProgressStep(handleSubmit)}>
                  <View style={{height: height * 0.083}}>
                    <Input
                      secureTextEntry={false}
                      size="large"
                      placeholder="İsim"
                      placeholderTextColor={'gray'}
                      clearButtonMode="while-editing"
                      style={styles.inputStyle}
                      caption={touched.name && errors.name ? errors.name : ''}
                      value={values.name}
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      status={touched.name && errors.name ? 'danger' : 'basic'}
                    />
                  </View>
                  <View style={{height: height * 0.083}}>
                    <Input
                      size="large"
                      placeholder="Soyisim"
                      placeholderTextColor={'gray'}
                      clearButtonMode="while-editing"
                      style={styles.inputStyle}
                      caption={touched.surname && errors.surname ? errors.surname : ''}
                      value={values.surname}
                      onChangeText={handleChange('surname')}
                      onBlur={handleBlur('surname')}
                      status={touched.surname && errors.surname ? 'danger' : 'basic'}
                    />
                  </View>
                  <Input
                    size="large"
                    placeholder="E-mail"
                    placeholderTextColor={'gray'}
                    clearButtonMode="while-editing"
                    style={styles.inputStyle}
                    caption={touched.email && errors.email ? errors.email : ''}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    status={touched.email && errors.email ? 'danger' : 'basic'}
                  />
                </ProgressStep>
                <ProgressStep label="Şifre" {...progressStep(handleSubmit)}>
                  <View style={{height: height * 0.083}}>
                    <Input
                      size="large"
                      placeholder="Şifre"
                      placeholderTextColor={'gray'}
                      clearButtonMode="while-editing"
                      onBlur={handleBlur('password')}
                      caption={touched.password && errors.password ? errors.password : ''}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      status={touched.password && errors.password ? 'danger' : 'basic'}
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
                  </View>
                  <Input
                    size="large"
                    placeholder="Şifre Doğrula"
                    placeholderTextColor={'gray'}
                    clearButtonMode="while-editing"
                    onBlur={handleBlur('passwordConfirm')}
                    caption={touched.passwordConfirm && errors.passwordConfirm ? errors.passwordConfirm : ''}
                    value={values.passwordConfirm}
                    onChangeText={handleChange('passwordConfirm')}
                    status={touched.passwordConfirm && errors.passwordConfirm ? 'danger' : 'basic'}
                    secureTextEntry={secureTextEntry2}
                    accessoryRight={() =>
                      secureTextEntry2 ? (
                        <EyeSlash
                          size="23"
                          color={'gray'}
                          onPress={() => setSecureTextEntry2(false)}
                        />
                      ) : (
                        <Eye
                          size="23"
                          color={'gray'}
                          onPress={() => setSecureTextEntry2(true)}
                        />
                      )
                    }
                    style={styles.inputStyle}
                  />
                </ProgressStep>
                <ProgressStep label="Tamamla" {...progressStep(handleSubmit)}>
                  <Input
                    size="large"
                    placeholder="Referans"
                    placeholderTextColor={'gray'}
                    clearButtonMode="while-editing"
                    style={styles.inputStyle}
                    caption={touched.reference && errors.reference ? errors.reference : ''}
                    value={values.reference}
                    onChangeText={handleChange('reference')}
                    onBlur={handleBlur('reference')}
                    status={touched.reference && errors.reference ? 'danger' : 'basic'}
                  />
                </ProgressStep>
              </ProgressSteps>
            )}
          </Formik>
        </View>

        <BottomSheet isOpen={isOpen}>
          <Animated.Text style={{fontSize: 16, fontWeight: '500'}}>
            Kayıt olma işlemi başarılı.
          </Animated.Text>

          <Pressable>
            <Button
              style={styles.signInButton}
              size="medium"
              onPress={() => navigation.replace(SIGNIN)}>
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
    marginVertical: 5,
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
    borderColor: Colors.BUTTON_COLOR,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 22,
    fontWeight: '600',
  },
});

export default Register;
