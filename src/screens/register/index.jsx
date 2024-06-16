import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, SafeAreaView} from 'react-native';
import {height, width} from '../../utils/constants';
import {Button, Input} from '@ui-kitten/components';
import {Colors} from '../../theme/colors';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {SIGNIN} from '../../utils/router';

const Register = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isFlipped = useSharedValue(false);

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
      isFlipped.value = !isFlipped.value;
    },
  };
  // İlk sayfada Önceki butonunun boş olarak görüntülenmemesi için gizliyoruz
  const firstProgressStep = {
    ...progressStep,
    previousBtnStyle: {
      display: 'none',
    },
  };

  const RegularContent = () => {
    return (
      <View style={regularContentStyles.card}>
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
      </View>
    );
  };

  const regularContentStyles = StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 16,
    },
  });

  const FlippedContent = () => {
    return (
      <View style={flippedContentStyles.card}>
        <Button
          style={styles.button}
          appearance="outline"
          size="large"
          onPress={() => navigation.navigate(SIGNIN)}>
          Giriş Yap
        </Button>
      </View>
    );
  };

  const flippedContentStyles = StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: 'aliceblue',
      borderRadius: 16,
    },
    text: {
      color: '#001a72',
    },
  });

  const FlipCard = ({
    isFlipped,
    direction = 'y',
    duration = 500,
    RegularContent,
    FlippedContent,
  }) => {
    const isDirectionX = direction === 'x';

    const regularCardAnimatedStyle = useAnimatedStyle(() => {
      const spinValue = interpolate(Number(isFlipped.value), [0, 1], [0, 180]);
      const rotateValue = withTiming(`${spinValue}deg`, {duration});

      return {
        transform: [
          isDirectionX ? {rotateX: rotateValue} : {rotateY: rotateValue},
        ],
      };
    });

    const flippedCardAnimatedStyle = useAnimatedStyle(() => {
      const spinValue = interpolate(
        Number(isFlipped.value),
        [0, 1],
        [180, 360],
      );
      const rotateValue = withTiming(`${spinValue}deg`, {duration});

      return {
        transform: [
          isDirectionX ? {rotateX: rotateValue} : {rotateY: rotateValue},
        ],
      };
    });

    return (
      <View style={{flex: 1}}>
        <Animated.View
          style={[flipCardStyles.regularCard, regularCardAnimatedStyle]}>
          {RegularContent}
        </Animated.View>

        <View style={{justifyContent: "center", alignItems: "center"}}>
          <Animated.View
            style={[flipCardStyles.flippedCard, flippedCardAnimatedStyle]}>
            {FlippedContent}
          </Animated.View>
        </View>
      </View>
    );
  };

  const flipCardStyles = StyleSheet.create({
    regularCard: {
      // position: 'absolute',
      backfaceVisibility: 'hidden',
      zIndex: 1,
      flex: 1,
    },
    flippedCard: {
      backfaceVisibility: 'hidden',
      // flex: 1,
      zIndex: 2,
      position: 'absolute',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={require('../../assets/ai4.jpg')}
          style={{resizeMode: 'contain', width: width, height: height}}
        />
      </View>

      <SafeAreaView style={styles.inputArea}>
        <FlipCard
          isFlipped={isFlipped}
          cardStyle={styles.flipCard}
          FlippedContent={<FlippedContent />}
          RegularContent={<RegularContent />}
        />
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
  flipCard: {
    width: 170,
    height: 200,
  },
});

export default Register;
