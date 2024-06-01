import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import { width } from '../../utils/constants';
import { Input } from '@ui-kitten/components';

const SignIn = ({ navigation }) => {
  
  const useInputState = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
  };

  const mediumInputState = useInputState();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/ciro1.png')}
          style={{ resizeMode: 'contain', flex: 1, width: width - 90 }}
        />
      </View>

      <View style={styles.inputArea}>
        <Input
          size='medium'
          placeholder='Medium'
          {...mediumInputState}
          label={'User Name'}
        />
        <Input
          size='medium'
          placeholder='Medium'
          {...mediumInputState}
          label={'Password'}
        />
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
  inputArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
});

export default SignIn;
